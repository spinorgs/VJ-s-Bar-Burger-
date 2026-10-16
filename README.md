# VJ’s Bar & Burger

Six-page static HTML5/CSS3/vanilla JS site. The deliverable lives in **vjs-website/**; the previous **dist/** site and existing assets are preserved. No dependencies or build step are required. Firebase Hosting and the optional Node server now serve `vjs-website/`.

## Preview

- Open `vjs-website/index.html` directly. Navigation, carousel, menu filters, hours and form validation work with `file://` because no fetch/includes are used.
- Or open the project in VS Code, install **Live Server**, right-click `vjs-website/index.html`, and choose **Open with Live Server**.
- Optional: with Node 18+, run `npm run dev` and visit <http://localhost:3000>.
- Google Fonts and the embedded Google Map need an internet connection. System fonts and a directions link remain available offline.

## Edit content

- `vjs-website/js/main.js`: **SITE** holds order/takeout/directions links and the single editable hours schedule. Hours shown on Home and Find Us are generated from this one array. The schedule is explicitly marked as an example. Set `hoursConfirmed: true` only after verifying it; this also enables opening hours in home-page Restaurant JSON-LD.
- **MENU_ITEMS** in the same file is the only searchable menu data source: all 57 items from the previous project, with name, price, category, description, image, detailImage, featured and tags. Prices are USD numbers. Supported dietary tags: `V`, `GF`, `Spicy`. Confirm recipes before publishing dietary labels. No GF dishes are claimed; selecting GF currently gives a clear empty state. Category navigation preserves search/dietary filters, disables categories with no matches, and highlights the current section during scrolling or deep linking.
- `vjs-website/css/styles.css`: brand variables, spacing, fonts and responsive styles. Headings and body use Google’s DM Sans with system fallbacks. Bold uppercase campaign headlines, rounded buttons, overlapping feature cards and the two-tier header follow the requested promotional reference.
- The HTML files hold editorial copy, sample specials, event information, newsletter copy and forms. Header/footer markup is identical across all six pages; change it consistently everywhere. JS applies active navigation and central outbound links.
- `vjs-website/assets/menu.pdf`: supplied dine-in PDF. Original restaurant photography and enhanced logo are reused. All 57 dishes now have responsive WebP photos. Eleven use licensed representative images, visibly labeled and credited in the menu and dish dialog. Cards use 480/960/1600px variants where the original resolution allows; originals are never upscaled. Logo is the existing transparent PNG; favicon and placeholder are SVG.
- **SITE.siteUrl** is set to `https://vjs-bar-burger.web.app`. All six HTML files include absolute Open Graph image/URL and canonical tags for social crawlers; JS keeps the metadata synchronized. Update both the configuration and HTML metadata if moving to a custom domain.

## Forms and accessibility

Newsletter, event and contact forms validate in the browser. Their success notices explicitly say nothing was sent, saved, subscribed or booked. Connect a real provider/backend and update these notices before collecting inquiries or subscriptions. No personal details go to localStorage or analytics.

The site includes a skip link, labeled fields, native validation, visible keyboard focus, semantic sections, responsive image boxes and a keyboard/touch-accessible carousel. Autoplay pauses on hover, focus, hidden tabs or the pause control; reduced-motion preference disables autoplay initially and removes movement. With JavaScript disabled the static pages, first hero, navigation on desktop and PDF links remain available; interactive menu/hours need JavaScript.

## Deploy to Firebase Hosting

The repository’s `firebase.json` serves only `vjs-website/`, with normal multi-page URLs and no SPA rewrite. From the repository root:

```sh
npm install -g firebase-tools
firebase login
firebase use --add
firebase deploy --only hosting
```

Select the intended Firebase project. The existing `.firebaserc` and GitHub workflows are retained; check their project/secrets before relying on automatic deployment. Production URL: https://vjs-bar-burger.web.app (Firebase Hosting).

Run `npm run check` for JavaScript syntax checks.

## Assumptions and content to confirm

- Regular hours are **sample hours**: Mon–Thu 11 AM–9 PM, Fri–Sat 11 AM–10 PM, Sun 11 AM–8 PM. Confirm before enabling structured opening-hour data.
- Happy hour and weekly schedules are clearly marked sample promotions. Replace offers, days, times and prices in `specials.html`; home links point there without claiming a deal.
- Event capacity, pricing, minimums and seating availability are unconfirmed. Package concepts are suggestions, labeled as requiring restaurant approval. Replace with approved information.
- Parking/accessibility details require restaurant confirmation; the site gives a direct contact option.
- Social profile URLs were not supplied: footer icons are labeled “coming soon,” with no fake links. Replace with accessible linked SVG icons when profiles are verified.
- Full menu pricing/descriptions come from the previous project’s `dist/menu.json`; verify against the current PDF. Dietary labels are examples, not allergy assurances. Twelve illustrative photos (eleven licensed reference photos and one AI-edited burger image) can be replaced with VJ’s own photos when available; two brunch descriptions defer to staff.
- VJ’s Kitchen and Chocolate Bash are labeled coming soon. No opening date is assumed.
- BJ’s blocks automated browser access. The redesign uses a public homepage screenshot as a layout reference: a two-tier utility/navigation header, pill buttons, a compact promotional hero, overlapping feature cards, alternating image campaigns and a large category grid. The site uses VJ’s branding and copy, restaurant photos and labeled illustrative imagery; no BJ’s assets are included.

## Asset cache updates

Firebase's predeploy hook automatically versions the stylesheet and JavaScript URLs using their content hashes and stamps internal page links to bypass older cached HTML. HTML, CSS and JavaScript use revalidation headers so visitors receive compatible versions after updates. Header SVGs have explicit dimensions as a fallback. No compilation or package installation is needed; direct-file and Live Server previews still work. If preparing files for another host, run `npm run version-assets` after editing CSS/JS and deploy all six HTML files together.

## Menu and ordering

All order and takeout buttons stay on this website. The ordering page explains phone enquiries and pickup; there is no external restaurant ordering redirect or online checkout. The enhanced menu has photo categories in the header, 57 image cards, favorites/dietary filters, category sorting and native dish-detail dialogs. Cards select a suitable image resolution with srcset; larger WebP photos load for dish details. Edit `featured` in MENU_ITEMS to change favorite badges and the favorites filter, and `detailImage` for the larger detail photo.

## Responsive photos and layouts

- `assets/menu-photo-sources.json` records the original source, dimensions, generated variants and licenses for every menu image. Representative photos are commercial-use-compatible Wikimedia Commons images found through web searches; attribution and license links are visible under Menu photography & credits and inside the relevant dish dialogs. Resized/converted images retain their listed licenses.
- `MENU_ITEMS.imageVariants` drives responsive srcset. `imageFit` preserves portrait dishes without cutting them off. Keep `representative` and `photoCredit` metadata when using an illustrative photo instead of an actual VJ’s dish photo.
- Phone layouts use single-column dish cards, 16px form controls to avoid input zoom, larger tap targets and stacked filters on narrow screens. Tablets use two columns; laptops use three. Photo frames reserve their dimensions to prevent image loading shifts.

## Menu image quality update

All 57 dish photos are exported directly from their recorded originals as quality-95 responsive WebP files (`*-hq-*.webp`), without upscaling. Cards and dish dialogs contain the whole image. Tap a dish photo or select View dish to open its larger view. Existing low-resolution originals remain limited by their source detail; replace those originals with restaurant photography for a further improvement.

Menu descriptions and controls use larger type, phones use one column, tablets use two, and laptops use three. Tablet search/filter controls wrap to prevent crowding.
