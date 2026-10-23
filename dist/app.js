// Keep previously shared section links working after the move to individual pages.
const legacyPages = {'#menu':'menu.html','#specials':'specials.html','#events':'private-events.html','#takeout':'delivery-takeout.html','#visit':'find-us.html'};
if ((location.pathname === '/' || location.pathname.endsWith('/index.html')) && legacyPages[location.hash]) location.replace(legacyPages[location.hash]);
const navigation = document.querySelector('#navigation');
const navToggle = document.querySelector('#nav-toggle');
const menuDropdownToggle = document.querySelector('.menu-dropdown-toggle');
const menuDropdown = document.querySelector('#menu-dropdown');
function closeMenuDropdown() {
  menuDropdown.hidden = true;
  menuDropdownToggle.setAttribute('aria-expanded', 'false');
}
menuDropdownToggle.addEventListener('click', () => {
  const open = menuDropdown.hidden;
  menuDropdown.hidden = !open;
  menuDropdownToggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', e => {
  if (!e.target.closest('.menu-navigation')) closeMenuDropdown();
});


function closeNavigation() { closeMenuDropdown(); navigation.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); navToggle.setAttribute('aria-label', 'Open navigation'); }
navToggle.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') !== 'true'; navigation.classList.toggle('open', open); navToggle.setAttribute('aria-expanded', String(open)); navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
navigation.addEventListener('click', e => { if (e.target.closest('a')) closeNavigation(); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!menuDropdown.hidden) {
    closeMenuDropdown();
    menuDropdownToggle.focus();
  } else {
    const wasOpen = navigation.classList.contains('open');
    closeNavigation();
    if (wasOpen) navToggle.focus();
  }
});
// Reset collapsed navigation when crossing the desktop breakpoint.
window.matchMedia('(max-width: 1100px)').addEventListener('change', closeNavigation);
navigation.addEventListener('focusout', () => {
  queueMicrotask(() => {
    if (!navigation.contains(document.activeElement) && document.activeElement !== navToggle) closeNavigation();
  });
});
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeNavigation(); });
const notes = {Burgers:'All burgers served with fries.',Sandwiches:'All sandwiches served with fries.',Salads:'Add chicken +$5 / shrimp +$7 / tri-tip +$8.','Smoke house Signature Plated':'Choose two sides: baked potato, fries, rice, or sautéed vegetables.','Kids Menu':'Kids meals include fries and a drink, except Kids Alfredo.'};
const labels = {};
const menuCategories = ["Starters", "Salads", "Burgers", "Sandwiches", "Kebabs", "Flat Bread Pizzas", "Smoke house Signature Plated", "GrillHouse Entrees", "Kids Menu", "Milkshakes", "Desserts", "Brunch Menu"];
const images = {'Classic Hamburger':'classic.webp','Bacon Cheese Burger':'burger.webp','Western Chicken Burger':'chicken.webp','Avocado Mushroom Burger':'avocado.webp','Double Cheese Burger':'double.webp','Big Pappa Burger':'big-pappa.webp','Teriyaki Salmon Burger':'salmon-burger.webp','Bone-In Wings':'wings.webp','French Fries':'fries.webp','Chips & Housemade Guacamole':'guacamole.webp','Pepperoni Flat Bread':'flatbread.webp','Classic Caesar Salad':'caesar.webp','Steakhouse Beef Kebab':'kebab.webp'};
let items = [], category = 'Burgers', menuReady = false;
function categoryFromUrl() {
  const aliases = {"Smokehouse Signature Plates": "Smoke house Signature Plated", "Grillhouse Entrees": "GrillHouse Entrees"};
  const raw = new URL(location.href).searchParams.get('category');
  const requested = aliases[raw] || raw;
  return requested === 'All' || items.some(item => item.category === requested) ? requested : 'Burgers';
}
function chooseCategory(name) {
  category = name;
  search.value = '';
  const url = new URL(location.href);
  url.searchParams.set('category', name);
  history.pushState(null, '', url);
  render();
}
window.addEventListener('popstate', () => {
  if (list && menuReady) { category = categoryFromUrl(); search.value = ''; render(); }
});
const search = document.querySelector('#menu-search'), list = document.querySelector('#menu-items'), categories = document.querySelector('#categories'), detail = document.querySelector('#detail-dialog'), photo = document.querySelector('#photo-dialog');
function node(tag, className, text) { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined) el.textContent = text; return el; }
const categoryPhotos = {"Starters": "starters", "Salads": "salads", "Burgers": "burgers", "Sandwiches": "sandwiches", "Kebabs": "kebabs", "Smoke house Signature Plated": "smokehouse", "GrillHouse Entrees": "grillhouse", "Flat Bread Pizzas": "flatbreads", "Kids Menu": "kids", "Milkshakes": "milkshakes", "Desserts": "desserts"};
function render() {
  const categoryPhoto = document.querySelector('.food-menu-intro img');
  if (categoryPhoto) {
    const photo = categoryPhotos[category];
    categoryPhoto.hidden = !photo;
    if (photo) { categoryPhoto.src = 'assets/menu-pdf/' + photo + '.webp'; categoryPhoto.alt = category + ' photo from the VJ’s dine-in menu'; }
  }

  categories.querySelectorAll('button').forEach(b => { const active = b.dataset.category === category; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
  const query = search.value.toLowerCase().trim();
  const filtered = items.filter(i => (query || category === 'All' || i.category === category) && (i.name + ' ' + i.description + ' ' + i.category).toLowerCase().includes(query));
  document.querySelector('#menu-category-title').textContent = query ? 'Search results' : category === 'All' ? 'The whole menu' : labels[category] || category;
  document.querySelector('#menu-note').textContent = query ? 'Searching across the whole menu.' : notes[category] || 'Pick something delicious. Click a dish to take a closer look.';
  document.querySelector('#menu-count').textContent = filtered.length + (filtered.length === 1 ? ' dish' : ' dishes');
  list.replaceChildren();
  for (const item of filtered) {
    const article = node('article', 'menu-item');
    if (images[item.name]) { const button = node('button', 'menu-item-photo'); button.dataset.dish = item.name; button.setAttribute('aria-label', 'View ' + item.name); const img = node('img'); img.src = 'assets/' + images[item.name]; img.alt = item.imageAlt || ''; img.decoding = 'async'; img.loading = 'lazy'; img.width = 600; img.height = 400; button.append(img); article.append(button); }
    const copy = node('div', 'menu-item-copy'); if (category === 'All' || query) copy.append(node('small', '', (labels[item.category] || item.category).toUpperCase()));
    const heading = node('div', 'menu-item-heading'), button = node('button', '', item.name); button.dataset.dish = item.name; button.setAttribute('aria-label', 'View details for ' + item.name); heading.append(button, node('strong', '', item.price)); copy.append(heading, node('p', '', item.description)); article.append(copy); list.append(article);
  }
  if (!filtered.length) { const empty = node('div', 'menu-empty'); empty.append(node('p', '', 'No dishes found. Try another craving.')); const reset = node('button', 'button button-outline', 'Show the full menu'); reset.addEventListener('click', () => { chooseCategory('All'); }); empty.append(reset); list.append(empty); }
}
function showDialog(dialog) { if (!dialog.open) { dialog.showModal(); document.body.classList.add('modal-open'); } }
function showDish(name) {
  if (!menuReady) return;
  const item = items.find(i => i.name === name); if (!item) return;
  const img = document.querySelector('#detail-image'); img.hidden = !images[name]; if (images[name]) { img.src = 'assets/' + images[name]; img.alt = item.imageAlt || name; } else { img.removeAttribute('src'); img.alt = ''; }
  document.querySelector('#detail-category').textContent = (labels[item.category] || item.category).toUpperCase(); document.querySelector('#detail-title').textContent = name; document.querySelector('#detail-price').textContent = item.price; document.querySelector('#detail-description').textContent = item.description; document.querySelector('#detail-note').textContent = notes[item.category] || 'Ask our team about ingredients and availability.'; showDialog(detail);
}
document.addEventListener('click', e => { const dish = e.target.closest('[data-dish]'); if (dish) showDish(dish.dataset.dish); const image = e.target.closest('[data-photo]'); if (image) { const img = document.querySelector('#gallery-image'); img.src = image.dataset.photo; img.alt = image.dataset.caption; document.querySelector('#photo-caption').textContent = image.dataset.caption; showDialog(photo); } });
for (const dialog of [detail, photo]) { dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close()); dialog.addEventListener('click', e => { const r = dialog.getBoundingClientRect(); if (e.target === dialog && (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)) dialog.close(); }); dialog.addEventListener('close', () => { if (!detail.open && !photo.open) document.body.classList.remove('modal-open'); }); }
if (categories) categories.addEventListener('click', e => { const button = e.target.closest('button'); if (button) { chooseCategory(button.dataset.category); } });
if (search) search.addEventListener('input', render);
if (list || document.querySelector('[data-dish]')) fetch('menu.json?v=20261023-alfredo', {cache: 'no-cache'}).then(r => { if (!r.ok) throw new Error('Menu unavailable'); return r.json(); }).then(data => { items = data; for (const item of items) if (item.image) images[item.name] = item.image; if (categories) for (const name of ['All', ...menuCategories]) { const button = node('button'); button.type = 'button'; button.dataset.category = name; button.append(node('span', 'category-name', labels[name] || name), node('span', 'category-count', String(name === 'All' ? items.length : items.filter(i => i.category === name).length))); categories.append(button); } menuReady = true; if (list) { category = categoryFromUrl(); render(); } }).catch(() => { if (list) list.replaceChildren(node('p', 'menu-empty', 'The menu could not load. Please refresh the page or call (916) 260-2606 for menu details.')); });
function updateOpeningStatus() {
  const status = document.querySelector('#opening-status');
  if (!status) return;
  const parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Los_Angeles', weekday:'short', hour:'numeric', minute:'numeric', hourCycle:'h23'}).formatToParts(new Date());
  const value = type => parts.find(p => p.type === type)?.value;
  const day = value('weekday'), now = Number(value('hour')) * 60 + Number(value('minute'));
  const opening = day === 'Mon' ? 17 : 11;
  const closing = day === 'Fri' || day === 'Sat' ? 23 : day === 'Sun' || day === 'Mon' ? 21 : 22;
  const open = now >= opening * 60 && now < closing * 60;
  status.textContent = open ? 'Open today until ' + (closing - 12) + ' pm' : now < opening * 60 ? 'Opening today at ' + (opening === 17 ? '5 pm' : '11 am') : 'See you tomorrow at ' + (day === 'Sun' ? '5 pm' : '11 am');
  document.querySelector('.status-dot')?.classList.toggle('is-open', open);
}
updateOpeningStatus(); setInterval(updateOpeningStatus, 60000); document.querySelector('#year').textContent = new Date().getFullYear();
