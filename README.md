# VJ’s Bar & Burger redesign

Local, buildless restaurant website using recovered public content and assets. The supplied workspace was empty; the original published pages are archived in `original/`. Firebase Hosting project: `vjs-bar-burger`.

Run `npm run build`, then `npm start`. Open http://localhost:4173. The Firebase hosting configuration serves `dist/`; Live site: https://vjs-bar-burger.web.app.

Pages: Home, Food Menu, Drinks & Bar, Specials, About Us, Private Events, Contact / Location, Delivery & Takeout.

Shared styling is in `style.css`; menu data is in `menu.json`. Menu filters, search, dish dialogs, mobile navigation and opening status are in `app.js`. All 57 menu items, descriptions and prices were checked against the supplied two-page dine-in PDF. Hours and the full address reflect the restaurant corrections supplied on October 17, 2026. Drinks selections and current promotional pricing require restaurant input; no specific offers were fabricated. The existing ordering URL is preserved; an HTTP response alone does not verify checkout operation.

Verification: JavaScript syntax, all local link and asset destinations, menu images, static build and local HTTP page responses. Chrome checks at 1440px desktop and 390px mobile widths passed for horizontal overflow, visible image loading, category deep links, mobile navigation, the menu dropdown, Escape focus restoration, search, category filters, browser Back, and dish details. Desktop home and mobile menu screenshots were visually reviewed. The embedded Google map and ordering checkout depend on external services; checkout was not exercised.

The Menu dropdown and homepage category cards link directly to `menu.html?category=...`. The selected category is preserved in the URL and supports browser Back. Menu cards now use the larger existing dish images instead of stretched thumbnails.

The latest homepage uses the selected food-first direction: large burger hero, food categories, drinks, specials, events, then location and hours. Homepage styling and shared appearance are in `appearance.css`. Updated desktop and mobile homepage previews are in `review/`. Chrome checks also passed at 768px and 1024px tablet widths, including hero button and featured-dish label overlap checks.

Colorful refinement: cherry red and golden yellow CTAs, pastel food and promotion cards, a deep teal drinks section, and matching accents across the shared navigation, menu and footer. The food-first layout and verified menu data are preserved. The build and desktop/mobile interaction checks passed after this refinement.

Latest updates (October 17, 2026): corrected hours, address and maps; exact menu categories; revised homepage, events, specials and pickup copy; Instagram and Facebook links; PDF links removed; eight replacement dish photos, including a two-patty Big Pappa. Run `firebase deploy --only hosting` to deploy the built `dist/` directory. Replacement photo sources and reuse status are recorded in `review/menu-photo-sources.md`.

Responsive refinements: horizontal category controls and wider tablet menu cards, consistent specials photos, stacked tablet content sections, larger phone touch targets, safe-area footer spacing, and input sizing to avoid automatic iOS zoom. The appearance stylesheet URL is versioned so browsers load this update immediately. Chrome viewport testing on macOS covers 320–1440 px; this does not replace physical-device Safari testing.

Bar and sports update: homepage prioritizes cocktails, wine, beer, and the rare whiskey collection, followed by specials and live NFL/NBA viewing. The bar page now has drink-category anchors and a whiskey collection feature. Eleven category photographs were extracted from the user-supplied two-page dine-in PDF and assigned only where the pictured food fits the description. Source details are in `review/supplied-menu-photos.md` and `review/bar-photo-sources.md`. No specific whiskey bottle inventory or game schedules were inferred.

Navigation fix (October 17, 2026): Escape restores focus to the mobile navigation toggle; moving keyboard focus outside navigation closes it; crossing the desktop breakpoint resets menu state. Build and all local asset checks passed. Chrome layout audit passed all eight pages at ten viewport widths; category navigation, search and dialogs passed at five widths. Escape focus restoration and breakpoint state reset were verified separately.
