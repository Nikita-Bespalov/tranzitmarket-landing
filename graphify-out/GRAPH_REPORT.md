# Graph Report - /Users/bespl/Downloads/fulfilment-pro  (2026-05-14)

## Corpus Check
- Large corpus: 74 files · ~592,748 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 66 nodes · 134 edges · 10 communities detected
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.81)
- Token cost: 12,800 input · 2,100 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Primitives & Shared UI|Primitives & Shared UI]]
- [[_COMMUNITY_Page Layout & Routing|Page Layout & Routing]]
- [[_COMMUNITY_Modal & Callback Flow|Modal & Callback Flow]]
- [[_COMMUNITY_Hero Section|Hero Section]]
- [[_COMMUNITY_Benefits & Services|Benefits & Services]]
- [[_COMMUNITY_Warehouses & Carousel|Warehouses & Carousel]]
- [[_COMMUNITY_Contacts & Footer|Contacts & Footer]]
- [[_COMMUNITY_Navigation|Navigation]]
- [[_COMMUNITY_Clients Section|Clients Section]]
- [[_COMMUNITY_Logistics Page|Logistics Page]]

## God Nodes (most connected - your core abstractions)
1. `MainPage()` - 18 edges
2. `LogisticsPage()` - 13 edges
3. `useIsMobile()` - 12 edges
4. `useIsMobile()` - 11 edges
5. `Contacts()` - 10 edges
6. `Section()` - 9 edges
7. `Nav()` - 8 edges
8. `Hero()` - 8 edges
9. `Button()` - 8 edges
10. `App()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `LogisticsPage()` --represents--> `Logistics Service`  [INFERRED]
  /Users/bespl/Downloads/fulfilment-pro/src/pages/LogisticsPage.jsx → src/pages/LogisticsPage.jsx
- `App()` --manages_state--> `accentMode (gold palette tweak)`  [EXTRACTED]
  /Users/bespl/Downloads/fulfilment-pro/src/App.jsx → src/App.jsx
- `Contacts()` --uses_hook--> `useIsMobile()`  [EXTRACTED]
  /Users/bespl/Downloads/fulfilment-pro/src/components/Contacts.jsx → src/hooks/useIsMobile.js
- `Footer()` --uses_hook--> `useIsMobile()`  [EXTRACTED]
  /Users/bespl/Downloads/fulfilment-pro/src/components/Contacts.jsx → src/hooks/useIsMobile.js
- `Clients()` --uses_component--> `Ic (icon set)`  [EXTRACTED]
  /Users/bespl/Downloads/fulfilment-pro/src/components/Clients.jsx → src/components/Primitives.jsx

## Communities

### Community 0 - "Primitives & Shared UI"
Cohesion: 0.22
Nodes (11): BenefitCard(), Benefits(), ServiceCard(), Services(), StatsBand(), ClientCard(), Clients(), Breadcrumb() (+3 more)

### Community 1 - "Page Layout & Routing"
Cohesion: 0.22
Nodes (10): LogisticsTeaser(), CallbackModal(), Fulfillment Service, Logistics Service, ТРАНЗИТМАРКЕТ (brand), FeatureCard(), LogisticsPage(), Nav() (+2 more)

### Community 2 - "Modal & Callback Flow"
Cohesion: 0.33
Nodes (10): MainPage(), LogisticsBanner(), Hero(), MarketplaceStrip(), OfferBanner(), PromiseBand(), useIsMobile(), Photo() (+2 more)

### Community 3 - "Hero Section"
Cohesion: 0.25
Nodes (5): App(), ScrollToTop(), accentMode (gold palette tweak), React + Vite Project, Blog Sitemap (/blog/sitemap.xml)

### Community 4 - "Benefits & Services"
Cohesion: 0.53
Nodes (5): ContactRow(), Contacts(), Footer(), FooterCol(), MapPin()

### Community 5 - "Warehouses & Carousel"
Cohesion: 0.7
Nodes (4): AboutCarousel(), AboutTeam(), isVideo(), MediaSlide()

### Community 6 - "Contacts & Footer"
Cohesion: 0.67
Nodes (3): ModalCtx, ModalProvider(), useModal()

### Community 7 - "Navigation"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Clients Section"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Logistics Page"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **3 isolated node(s):** `Blog Sitemap (/blog/sitemap.xml)`, `Fulfillment Service`, `accentMode (gold palette tweak)`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Navigation`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Clients Section`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Logistics Page`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `MainPage()` connect `Modal & Callback Flow` to `Primitives & Shared UI`, `Page Layout & Routing`, `Hero Section`, `Benefits & Services`, `Warehouses & Carousel`?**
  _High betweenness centrality (0.306) - this node is a cross-community bridge._
- **Why does `LogisticsPage()` connect `Page Layout & Routing` to `Primitives & Shared UI`, `Modal & Callback Flow`, `Hero Section`, `Benefits & Services`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Why does `App()` connect `Hero Section` to `Page Layout & Routing`, `Modal & Callback Flow`?**
  _High betweenness centrality (0.177) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `LogisticsPage()` (e.g. with `useIsMobile()` and `Logistics Service`) actually correct?**
  _`LogisticsPage()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 11 inferred relationships involving `useIsMobile()` (e.g. with `MainPage()` and `Contacts()`) actually correct?**
  _`useIsMobile()` has 11 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Blog Sitemap (/blog/sitemap.xml)`, `Fulfillment Service`, `accentMode (gold palette tweak)` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._