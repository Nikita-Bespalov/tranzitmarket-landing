import { createContext, useContext, useState } from 'react';
import { CallbackModal } from '../components/CallbackModal';

const ModalCtx = createContext(() => {});

export function useModal() { return useContext(ModalCtx); }

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalCtx.Provider value={() => setOpen(true)}>
      {children}
      <CallbackModal open={open} onClose={() => setOpen(false)} />
    </ModalCtx.Provider>
  );
}
