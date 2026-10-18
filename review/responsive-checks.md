# Responsive review — October 17, 2026

All eight pages checked in Chrome on macOS at widths 320, 360, 390, 600, 768, 820, 1024, 1280, 1366, and 1440 px (900 px viewport height). No document overflow, clipped text, or JavaScript exceptions in 80 layout cases.

Navigation, all 12 category links, category filtering, search, opening dish details, and Escape dismissal checked at 360, 768, 1024, 1366, and 1440 px. Visual review covered phone home, tablet menu and specials, and desktop location views.

This is viewport emulation in Chrome; Safari and physical iPhone/iPad testing were not performed.

Bar-led homepage and updated bar page also passed the same 80 layout cases. Navigation, category filters, three-result Tri-Tip search, and dialogs passed at five widths. Visually reviewed desktop/mobile cocktail hero, tablet rare-whiskey feature, mobile sports cards, and tablet menu photographs.

## October 18 mobile-first refinement

Checked all 8 pages in Chrome on macOS at 320, 360, 390, 430, 768, 820, 1024, 1280, 1440 and 1728 pixels: all 80 cases passed document overflow, key heading/header bounds and assigned-image checks. Unassigned hidden dialog image elements are excluded from broken-image checks.

Navigation, menu search, dish dialog open/close and all five brunch photo controls passed at 320, 390, 768, 1024 and 1440 pixels. Search correctly returns all dishes matching the query. Screenshot review covered mobile, tablet and desktop homepage views.

Refinements: shorter mobile hero, larger mobile body/footer text, 44–50px primary touch controls, improved fixed-bottom button contrast, and reduced-motion support. Desktop/tablet hero layout retained. Screenshots and machine-readable results: responsive-390.png, responsive-768.png, responsive-1440.png, responsive-audit.json and responsive-interactions.json.

These are Chrome viewport checks on macOS, not physical-device tests or Safari validation.

## October 19 palette and typography makeover

Replaced green interface colors with burgundy, cream and gold, including the homepage hero and its gradients, button text and borders. Standardized responsive display headings and DM Sans body text, increased small labels and body copy, and adjusted tablet cards and phone actions.

Chrome viewport checks passed all eight pages at 320, 390, 600, 768, 820, 1024, 1280, 1440 and 1728 pixels (72 cases): no document overflow, clipped headings or green computed interface colors. Mobile navigation, Tri-Tip search (three results), and dish dialog opening passed at 390 pixels. Results: `makeover-audit.json`; previews: `makeover-390.png`, `makeover-768.png`, `makeover-1440.png`. These are viewport checks on macOS Chrome; physical devices and Safari were not tested.

## October 19 compact mobile footer

Mobile footer now uses a bordered burgundy card, two columns for navigation and contact details, smaller 11–12px copy, compact social links and side-by-side business details. Desktop footer layout is preserved. Chrome checks passed all eight pages at 320, 390, 430, 600, 768 and 1440 pixels (48 cases), with no document overflow or clipped footer text. The mobile homepage footer measures 675px tall at 390px width, including bottom spacing. Previews: `compact-footer-390.png` and `compact-footer-1440.png`.
