// Динамический обратный отсчёт до конца текущего месяца
export function usePromoCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-based

  // Последний день текущего месяца
  const lastDay = new Date(year, month + 1, 0);
  const lastDayNum = lastDay.getDate();

  // Сколько дней осталось (включая сегодня)
  const today = new Date(year, month, now.getDate());
  const msLeft = lastDay - today;
  const daysLeft = Math.round(msLeft / (1000 * 60 * 60 * 24));

  // Название месяца в родительном падеже
  const monthNames = [
    'января','февраля','марта','апреля','мая','июня',
    'июля','августа','сентября','октября','ноября','декабря',
  ];

  return {
    label: `до ${lastDayNum} ${monthNames[month]}`,
    daysLeft,
    daysLabel: `осталось ${daysLeft} ${declension(daysLeft, ['день','дня','дней'])}`,
  };
}

function declension(n, forms) {
  const abs = Math.abs(n) % 100;
  const n1 = abs % 10;
  if (abs > 10 && abs < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}
