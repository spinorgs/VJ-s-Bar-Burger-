'use strict';
/* CLIENT EDIT: primary links and the sample opening schedule live ONLY here.
   Set hoursConfirmed to true after the restaurant approves the schedule.
   Set siteUrl to the final HTTPS origin to enable absolute Open Graph URLs.
   Forms are intentionally browser-only; no messages or subscriptions are sent. */
const SITE = {
  siteUrl: 'https://vjs-bar-burger.web.app', // Production origin (no trailing slash)
  hoursConfirmed: false,
  links: {
    order: 'delivery-takeout.html#order-by-phone',
    takeout: 'delivery-takeout.html#pickup',
    directions: 'https://www.google.com/maps/search/?api=1&query=2606+Gateway+Oaks+Dr+Sacramento+CA'
  },
  hours: [
    { label: 'Monday – Thursday', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '21:00' },
    { label: 'Friday – Saturday', days: ['Friday', 'Saturday'], opens: '11:00', closes: '22:00' },
    { label: 'Sunday', days: ['Sunday'], opens: '11:00', closes: '20:00' }
  ]
};
/* CLIENT EDIT: Single source of menu items below. Prices are numbers (USD).
   category matches CATEGORIES below; image is relative to assets/.
   tags may contain V, GF, Spicy. Confirm dietary details with the kitchen before
   publishing. Existing sample tags are illustrative; no GF claims are made.
   Every dish has responsive WebP photos. Representative photos are explicitly labeled;
   keep photoCredit and representative metadata when replacing licensed images. */
const MENU_ITEMS = [
  {
    "category": "starters",
    "name": "French Fries",
    "price": 4,
    "description": "Crisp, golden fries.",
    "image": "menu-photos/french-fries-hq-600.webp",
    "tags": [
      "V"
    ],
    "featured": false,
    "detailImage": "menu-photos/french-fries-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/french-fries-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/french-fries-hq-600.webp",
        "width": 600,
        "height": 900
      }
    ],
    "imageFit": "contain",
    "imageAlt": "French Fries",
    "photoOriginal": "original-fries.jpg"
  },
  {
    "category": "starters",
    "name": "Baked Potato",
    "price": 5,
    "description": "Warm with butter and sour cream; add bacon +$3.",
    "image": "menu-photos/baked-potato-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/baked-potato-hq-1066.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/baked-potato-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/baked-potato-hq-960.webp",
        "width": 960,
        "height": 1441
      },
      {
        "src": "menu-photos/baked-potato-hq-1066.webp",
        "width": 1066,
        "height": 1600
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Baked Potato",
    "photoOriginal": "original-bakedpotato.jpg"
  },
  {
    "category": "starters",
    "name": "Onion Rings",
    "price": 10,
    "description": "Golden, crispy onion rings.",
    "image": "menu-photos/onion-rings-hq-612.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/onion-rings-hq-612.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/onion-rings-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/onion-rings-hq-612.webp",
        "width": 612,
        "height": 408
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Onion Rings",
    "photoOriginal": "original-onionrings.jpg"
  },
  {
    "category": "starters",
    "name": "Fried Mac & Cheese Bites",
    "price": 11,
    "description": "Crispy golden bites filled with creamy macaroni and casein cheese sauce.",
    "image": "menu-photos/fried-mac-cheese-bites-hq-600.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/fried-mac-cheese-bites-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/fried-mac-cheese-bites-hq-480.webp",
        "width": 480,
        "height": 333
      },
      {
        "src": "menu-photos/fried-mac-cheese-bites-hq-600.webp",
        "width": 600,
        "height": 416
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Fried Mac & Cheese Bites",
    "photoOriginal": "original-cheesebites.jpg"
  },
  {
    "category": "starters",
    "name": "Chips & Housemade Guacamole",
    "price": 11,
    "description": "House chips with fresh guacamole.",
    "image": "menu-photos/chips-housemade-guacamole-hq-612.webp",
    "tags": [
      "V"
    ],
    "featured": false,
    "detailImage": "menu-photos/chips-housemade-guacamole-hq-612.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chips-housemade-guacamole-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/chips-housemade-guacamole-hq-612.webp",
        "width": 612,
        "height": 408
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chips & Housemade Guacamole",
    "photoOriginal": "original-chips.jpg"
  },
  {
    "category": "wings",
    "name": "Boneless Wings",
    "price": 15,
    "description": "Eight wings; choose lemon pepper, BBQ, Buffalo, honey Sriracha or garlic butter.",
    "image": "menu-photos/boneless-wings-hq-600.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/boneless-wings-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/boneless-wings-hq-480.webp",
        "width": 480,
        "height": 640
      },
      {
        "src": "menu-photos/boneless-wings-hq-600.webp",
        "width": 600,
        "height": 800
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Boneless Wings",
    "photoOriginal": "original-boneless.jpg"
  },
  {
    "category": "wings",
    "name": "Bone-In Wings",
    "price": 16,
    "description": "Eight wings, your choice of five sauces.",
    "image": "menu-photos/bone-in-wings-hq-600.webp",
    "tags": [],
    "featured": true,
    "detailImage": "menu-photos/bone-in-wings-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/bone-in-wings-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/bone-in-wings-hq-600.webp",
        "width": 600,
        "height": 400
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Bone-In Wings",
    "photoOriginal": "original-boneinwings.jpg"
  },
  {
    "category": "starters",
    "name": "VJ's Signature Sampler",
    "price": 22,
    "description": "A shareable assortment of house starters.",
    "image": "menu-photos/vj-s-signature-sampler-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/vj-s-signature-sampler-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Famartin",
      "source": "https://commons.wikimedia.org/wiki/File:2018-02-22_16_52_42_Classic_appetizer_combo_(Chips_with_spinach-artichoke_dip,_mozzarella_sticks,_honey-bbq_buffalo_wings_and_chicken_quesadilla)_at_the_Applebee%27s_in_Fair_Lakes,_Fairfax_County,_Virginia.jpg",
      "title": "2018-02-22 16 52 42 Classic appetizer combo (Chips with spinach-artichoke dip, mozzarella sticks, honey-bbq buffalo wings and chicken quesadilla) at the Applebee's in Fair Lakes, Fairfax County, Virginia.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/vj-s-signature-sampler-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/vj-s-signature-sampler-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/vj-s-signature-sampler-hq-1280.webp",
        "width": 1280,
        "height": 960
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of VJ's Signature Sampler",
    "photoOriginal": "menu-photo-sources/vj-s-signature-sampler.jpg"
  },
  {
    "category": "salads",
    "name": "Classic Caesar Salad",
    "price": 12,
    "description": "Romaine, Parmesan and croutons in Caesar dressing.",
    "image": "menu-photos/classic-caesar-salad-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/classic-caesar-salad-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/classic-caesar-salad-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/classic-caesar-salad-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/classic-caesar-salad-hq-1600.webp",
        "width": 1600,
        "height": 1067
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Classic Caesar Salad",
    "photoOriginal": "original-cessarsalad.jpg"
  },
  {
    "category": "salads",
    "name": "Mediterranean Power Salad",
    "price": 14,
    "description": "Greens, feta, tomato, cucumber and red wine vinaigrette.",
    "image": "menu-photos/mediterranean-power-salad-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mediterranean-power-salad-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/mediterranean-power-salad-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/mediterranean-power-salad-hq-960.webp",
        "width": 960,
        "height": 641
      },
      {
        "src": "menu-photos/mediterranean-power-salad-hq-1600.webp",
        "width": 1600,
        "height": 1068
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Mediterranean Power Salad",
    "photoOriginal": "original-powersalad.jpg"
  },
  {
    "category": "salads",
    "name": "Berry & Goat Cheese Salad",
    "price": 15,
    "description": "Berries, walnuts, goat cheese and raspberry vinaigrette.",
    "image": "menu-photos/berry-goat-cheese-salad-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/berry-goat-cheese-salad-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/berry-goat-cheese-salad-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/berry-goat-cheese-salad-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/berry-goat-cheese-salad-hq-1600.webp",
        "width": 1600,
        "height": 1066
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Berry & Goat Cheese Salad",
    "photoOriginal": "original-berrysalad.jpg"
  },
  {
    "category": "burgers",
    "name": "Classic Hamburger",
    "price": 13,
    "description": "Juicy, handmade half-pound beef patty with lettuce, tomato, onion and pickles.",
    "image": "menu-photos/classic-hamburger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/classic-hamburger-hq-1920.webp",
    "representative": true,
    "imageVariants": [
      {
        "src": "menu-photos/classic-hamburger-hq-480.webp",
        "width": 480,
        "height": 312
      },
      {
        "src": "menu-photos/classic-hamburger-hq-960.webp",
        "width": 960,
        "height": 624
      },
      {
        "src": "menu-photos/classic-hamburger-hq-1920.webp",
        "width": 1920,
        "height": 1247
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Classic Hamburger",
    "photoOriginal": "menu-photo-sources/classic-hamburger.jpg",
    "photoCredit": {
      "author": "Len Rizzi (photographer, original image), reprocessed by Off-shell",
      "source": "https://commons.wikimedia.org/wiki/File:Hamburger_(black_bg).jpg",
      "title": "Hamburger (black bg).jpg",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
    }
  },
  {
    "category": "burgers",
    "name": "Western Chicken Burger",
    "price": 16,
    "description": "Juicy chicken breast with mayo, BBQ, bacon, onion rings, smoked Gouda, lettuce and tomatoes.",
    "image": "menu-photos/western-chicken-burger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/western-chicken-burger-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/western-chicken-burger-hq-480.webp",
        "width": 480,
        "height": 417
      },
      {
        "src": "menu-photos/western-chicken-burger-hq-960.webp",
        "width": 960,
        "height": 834
      },
      {
        "src": "menu-photos/western-chicken-burger-hq-1600.webp",
        "width": 1600,
        "height": 1391
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Western Chicken Burger",
    "photoOriginal": "original-burger7.jpg"
  },
  {
    "category": "burgers",
    "name": "Bacon Cheese Burger",
    "price": 16,
    "description": "Smoked Gouda, onion rings, bacon & BBQ sauce.",
    "image": "menu-photos/bacon-cheese-burger-hq-960.webp",
    "tags": [],
    "featured": true,
    "detailImage": "menu-photos/bacon-cheese-burger-hq-1536.webp",
    "representative": true,
    "imageVariants": [
      {
        "src": "menu-photos/bacon-cheese-burger-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/bacon-cheese-burger-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/bacon-cheese-burger-hq-1536.webp",
        "width": 1536,
        "height": 1024
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Illustrative Bacon Cheese Burger with crisp bacon, onion rings and a light BBQ glaze",
    "photoOriginal": "bacon-burger-light-bbq-1536.webp"
  },
  {
    "category": "burgers",
    "name": "Avocado Mushroom Burger",
    "price": 17,
    "description": "Juicy, handmade half-pound beef patty with avocado, mushrooms, Swiss cheese and mayo.",
    "image": "menu-photos/avocado-mushroom-burger-hq-630.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/avocado-mushroom-burger-hq-630.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/avocado-mushroom-burger-hq-480.webp",
        "width": 480,
        "height": 258
      },
      {
        "src": "menu-photos/avocado-mushroom-burger-hq-630.webp",
        "width": 630,
        "height": 339
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Avocado Mushroom Burger",
    "photoOriginal": "original-burger5.jpg"
  },
  {
    "category": "burgers",
    "name": "Double Cheese Burger",
    "price": 17,
    "description": "Half pound of juicy, handmade beef in two patties with American cheese and classic toppings.",
    "image": "menu-photos/double-cheese-burger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/double-cheese-burger-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/double-cheese-burger-hq-480.webp",
        "width": 480,
        "height": 480
      },
      {
        "src": "menu-photos/double-cheese-burger-hq-960.webp",
        "width": 960,
        "height": 960
      },
      {
        "src": "menu-photos/double-cheese-burger-hq-1600.webp",
        "width": 1600,
        "height": 1601
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Double Cheese Burger",
    "photoOriginal": "original-burger4.jpg"
  },
  {
    "category": "burgers",
    "name": "Big Pappa Burger",
    "price": 18,
    "description": "Juicy, handmade half-pound beef patty with bacon, avocado, pepper jack, fried egg and Thousand Island sauce.",
    "image": "menu-photos/big-pappa-burger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/big-pappa-burger-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/big-pappa-burger-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/big-pappa-burger-hq-960.webp",
        "width": 960,
        "height": 1440
      },
      {
        "src": "menu-photos/big-pappa-burger-hq-1600.webp",
        "width": 1600,
        "height": 2400
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Big Pappa Burger",
    "photoOriginal": "original-big-pappa-burger.jpg"
  },
  {
    "category": "burgers",
    "name": "Teriyaki Salmon Burger",
    "price": 18,
    "description": "Seasoned salmon, lettuce, tomato, grilled pineapple finished with teriyaki glaze.",
    "image": "menu-photos/teriyaki-salmon-burger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/teriyaki-salmon-burger-hq-1024.webp",
    "representative": true,
    "photoCredit": {
      "author": "Kyle Lam",
      "source": "https://commons.wikimedia.org/wiki/File:Salmon_burger.jpg",
      "title": "Salmon burger.jpg",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/teriyaki-salmon-burger-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/teriyaki-salmon-burger-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/teriyaki-salmon-burger-hq-1024.webp",
        "width": 1024,
        "height": 683
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Teriyaki Salmon Burger",
    "photoOriginal": "menu-photo-sources/teriyaki-salmon-burger.jpg"
  },
  {
    "category": "sandwiches",
    "name": "Chicken Club Sandwich",
    "price": 16,
    "description": "Toasted sourdough, chicken, bacon, lettuce and tomato.",
    "image": "menu-photos/chicken-club-sandwich-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chicken-club-sandwich-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chicken-club-sandwich-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/chicken-club-sandwich-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/chicken-club-sandwich-hq-1600.webp",
        "width": 1600,
        "height": 1067
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chicken Club Sandwich",
    "photoOriginal": "original-chicken-club-sandwich.jpg"
  },
  {
    "category": "sandwiches",
    "name": "Fish Sandwich",
    "price": 16,
    "description": "Toasted sourdough with fish, tartar sauce, lettuce and tomato.",
    "image": "menu-photos/fish-sandwich-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/fish-sandwich-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/fish-sandwich-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/fish-sandwich-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/fish-sandwich-hq-1600.webp",
        "width": 1600,
        "height": 1067
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Fish Sandwich",
    "photoOriginal": "original-fish-sandwich-2.jpg"
  },
  {
    "category": "sandwiches",
    "name": "Santa Fe Chicken Sandwich",
    "price": 17,
    "description": "Sourdough, chipotle aioli, guacamole, peppers and jalapeño.",
    "image": "menu-photos/santa-fe-chicken-sandwich-hq-600.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/santa-fe-chicken-sandwich-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/santa-fe-chicken-sandwich-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/santa-fe-chicken-sandwich-hq-600.webp",
        "width": 600,
        "height": 900
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Santa Fe Chicken Sandwich",
    "photoOriginal": "original-santa-fe-chicken-sandwich.avif"
  },
  {
    "category": "grill",
    "name": "Chicken Kebab",
    "price": 18,
    "description": "Choose BBQ, Nashville hot or pineapple teriyaki with vegetables.",
    "image": "menu-photos/chicken-kebab-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chicken-kebab-hq-1500.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chicken-kebab-hq-480.webp",
        "width": 480,
        "height": 640
      },
      {
        "src": "menu-photos/chicken-kebab-hq-960.webp",
        "width": 960,
        "height": 1280
      },
      {
        "src": "menu-photos/chicken-kebab-hq-1500.webp",
        "width": 1500,
        "height": 2000
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chicken Kebab",
    "photoOriginal": "original-cgk2.jpg"
  },
  {
    "category": "grill",
    "name": "Garlic Parmesan Steak Kebab",
    "price": 20,
    "description": "Marinated steak, garlic Parmesan and sautéed vegetables.",
    "image": "menu-photos/garlic-parmesan-steak-kebab-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/garlic-parmesan-steak-kebab-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/garlic-parmesan-steak-kebab-hq-480.webp",
        "width": 480,
        "height": 719
      },
      {
        "src": "menu-photos/garlic-parmesan-steak-kebab-hq-960.webp",
        "width": 960,
        "height": 1437
      },
      {
        "src": "menu-photos/garlic-parmesan-steak-kebab-hq-1600.webp",
        "width": 1600,
        "height": 2395
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Garlic Parmesan Steak Kebab",
    "photoOriginal": "original-garlic-parmesan-steak-kebab.jpg"
  },
  {
    "category": "grill",
    "name": "Steakhouse Beef Kebab",
    "price": 20,
    "description": "Steak skewer with peppers, onions and mushrooms.",
    "image": "menu-photos/steakhouse-beef-kebab-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/steakhouse-beef-kebab-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/steakhouse-beef-kebab-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/steakhouse-beef-kebab-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/steakhouse-beef-kebab-hq-1600.webp",
        "width": 1600,
        "height": 1066
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Steakhouse Beef Kebab",
    "photoOriginal": "original-charcola.jpg"
  },
  {
    "category": "grill",
    "name": "Mediterranean Lamb Kebab",
    "price": 20,
    "description": "Grilled lamb skewer with vegetables.",
    "image": "menu-photos/mediterranean-lamb-kebab-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mediterranean-lamb-kebab-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Maksym Kozlenko",
      "source": "https://commons.wikimedia.org/wiki/File:2023-01-20_Lamb_Shish_Kebab.jpg",
      "title": "2023-01-20 Lamb Shish Kebab.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/mediterranean-lamb-kebab-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/mediterranean-lamb-kebab-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/mediterranean-lamb-kebab-hq-1280.webp",
        "width": 1280,
        "height": 960
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Mediterranean Lamb Kebab",
    "photoOriginal": "menu-photo-sources/mediterranean-lamb-kebab.jpg"
  },
  {
    "category": "grill",
    "name": "Mixed Grill Kebab",
    "price": 30,
    "description": "Assorted house kebabs; ask which skewers are included.",
    "image": "menu-photos/mixed-grill-kebab-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mixed-grill-kebab-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "User:Jpatokal",
      "source": "https://commons.wikimedia.org/wiki/File:Arabic_MixedGrill.JPG",
      "title": "Arabic MixedGrill.JPG",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/mixed-grill-kebab-hq-480.webp",
        "width": 480,
        "height": 319
      },
      {
        "src": "menu-photos/mixed-grill-kebab-hq-960.webp",
        "width": 960,
        "height": 638
      },
      {
        "src": "menu-photos/mixed-grill-kebab-hq-1280.webp",
        "width": 1280,
        "height": 851
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Mixed Grill Kebab",
    "photoOriginal": "menu-photo-sources/mixed-grill-kebab.jpg"
  },
  {
    "category": "grill",
    "name": "Tri-Tip & Chicken Combo",
    "price": 28,
    "description": "Tri-tip and chicken with your choice of two sides.",
    "image": "menu-photos/tri-tip-chicken-combo-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/tri-tip-chicken-combo-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/tri-tip-chicken-combo-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/tri-tip-chicken-combo-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/tri-tip-chicken-combo-hq-1600.webp",
        "width": 1600,
        "height": 1067
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Tri-Tip & Chicken Combo",
    "photoOriginal": "original-trichicken.jpg"
  },
  {
    "category": "grill",
    "name": "Tri-Tip & Shrimp Combo",
    "price": 29,
    "description": "Tri-tip and shrimp with your choice of two sides.",
    "image": "menu-photos/tri-tip-shrimp-combo-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/tri-tip-shrimp-combo-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/tri-tip-shrimp-combo-hq-480.webp",
        "width": 480,
        "height": 299
      },
      {
        "src": "menu-photos/tri-tip-shrimp-combo-hq-960.webp",
        "width": 960,
        "height": 598
      },
      {
        "src": "menu-photos/tri-tip-shrimp-combo-hq-1600.webp",
        "width": 1600,
        "height": 997
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Tri-Tip & Shrimp Combo",
    "photoOriginal": "original-tritip.jpg"
  },
  {
    "category": "grill",
    "name": "Fish & Chips",
    "price": 21,
    "description": "Crispy battered cod with fries.",
    "image": "menu-photos/fish-chips-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/fish-chips-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/fish-chips-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/fish-chips-hq-960.webp",
        "width": 960,
        "height": 641
      },
      {
        "src": "menu-photos/fish-chips-hq-1600.webp",
        "width": 1600,
        "height": 1068
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Fish & Chips",
    "photoOriginal": "original-fishchips.jpg"
  },
  {
    "category": "grill",
    "name": "Chicken Alfredo",
    "price": 22,
    "description": "Chicken over creamy Alfredo noodles with broccoli.",
    "image": "menu-photos/chicken-alfredo-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chicken-alfredo-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chicken-alfredo-hq-480.webp",
        "width": 480,
        "height": 339
      },
      {
        "src": "menu-photos/chicken-alfredo-hq-960.webp",
        "width": 960,
        "height": 677
      },
      {
        "src": "menu-photos/chicken-alfredo-hq-1600.webp",
        "width": 1600,
        "height": 1129
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chicken Alfredo",
    "photoOriginal": "original-chickenal.jpg"
  },
  {
    "category": "grill",
    "name": "Atlantic / Blackened Salmon",
    "price": 25,
    "description": "8 oz salmon, lemon butter, jasmine rice and a half salad.",
    "image": "menu-photos/atlantic-blackened-salmon-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/atlantic-blackened-salmon-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/atlantic-blackened-salmon-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/atlantic-blackened-salmon-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/atlantic-blackened-salmon-hq-1600.webp",
        "width": 1600,
        "height": 1067
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Atlantic / Blackened Salmon",
    "photoOriginal": "original-salmon.jpg"
  },
  {
    "category": "grill",
    "name": "Slow Roasted Tri-Tip",
    "price": 29,
    "description": "Juicy 8 oz tri-tip cut, dry rubbed with a flavorful blend of spices and slow cooked at temperature.",
    "image": "menu-photos/slow-roasted-tri-tip-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/slow-roasted-tri-tip-hq-1280.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/slow-roasted-tri-tip-hq-480.webp",
        "width": 480,
        "height": 354
      },
      {
        "src": "menu-photos/slow-roasted-tri-tip-hq-960.webp",
        "width": 960,
        "height": 708
      },
      {
        "src": "menu-photos/slow-roasted-tri-tip-hq-1280.webp",
        "width": 1280,
        "height": 944
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Slow Roasted Tri-Tip",
    "photoOriginal": "original-slowrib.jpg"
  },
  {
    "category": "grill",
    "name": "Lamb Chop Dinner",
    "price": 36,
    "description": "4 grilled lamb chops with rosemary seasoning, garlic mashed potatoes, honey-glazed roasted carrots and a blackberry-balsamic red wine reduction.",
    "image": "menu-photos/lamb-chop-dinner-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/lamb-chop-dinner-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Gatorfan252525",
      "source": "https://commons.wikimedia.org/wiki/File:Lamb_Chops_from_a_Greek_restaurant_in_Fort_Lauderdale,_Florida.jpg",
      "title": "Lamb Chops from a Greek restaurant in Fort Lauderdale, Florida.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/lamb-chop-dinner-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/lamb-chop-dinner-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/lamb-chop-dinner-hq-1280.webp",
        "width": 1280,
        "height": 960
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Lamb Chop Dinner",
    "photoOriginal": "menu-photo-sources/lamb-chop-dinner.jpg"
  },
  {
    "category": "flatbreads",
    "name": "BBQ Chicken Flat Bread",
    "price": 15,
    "description": "Grilled chicken, BBQ sauce, red onion, mozzarella and cilantro.",
    "image": "menu-photos/bbq-chicken-flat-bread-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/bbq-chicken-flat-bread-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/bbq-chicken-flat-bread-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/bbq-chicken-flat-bread-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/bbq-chicken-flat-bread-hq-1600.webp",
        "width": 1600,
        "height": 1066
      }
    ],
    "imageFit": "contain",
    "imageAlt": "BBQ Chicken Flat Bread",
    "photoOriginal": "original-bbq-chicken-flatbread.jpg"
  },
  {
    "category": "flatbreads",
    "name": "Pepperoni Flat Bread",
    "price": 16,
    "description": "Pepperoni, mozzarella, house pizza sauce and Italian herbs.",
    "image": "menu-photos/pepperoni-flat-bread-hq-960.webp",
    "tags": [],
    "featured": true,
    "detailImage": "menu-photos/pepperoni-flat-bread-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/pepperoni-flat-bread-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/pepperoni-flat-bread-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/pepperoni-flat-bread-hq-1600.webp",
        "width": 1600,
        "height": 1200
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Pepperoni Flat Bread",
    "photoOriginal": "original-pepperoni.jpg"
  },
  {
    "category": "flatbreads",
    "name": "Steakhouse Flat Bread",
    "price": 17,
    "description": "Steak, caramelized onions, peppers, mozzarella and blue cheese.",
    "image": "menu-photos/steakhouse-flat-bread-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/steakhouse-flat-bread-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/steakhouse-flat-bread-hq-480.webp",
        "width": 480,
        "height": 640
      },
      {
        "src": "menu-photos/steakhouse-flat-bread-hq-960.webp",
        "width": 960,
        "height": 1280
      },
      {
        "src": "menu-photos/steakhouse-flat-bread-hq-1600.webp",
        "width": 1600,
        "height": 2133
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Steakhouse Flat Bread",
    "photoOriginal": "original-steak.jpg"
  },
  {
    "category": "kids",
    "name": "Mini Cheese Burger",
    "price": 10,
    "description": "Kid-sized cheeseburger with fries and a drink.",
    "image": "menu-photos/mini-cheese-burger-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mini-cheese-burger-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/mini-cheese-burger-hq-480.webp",
        "width": 480,
        "height": 341
      },
      {
        "src": "menu-photos/mini-cheese-burger-hq-960.webp",
        "width": 960,
        "height": 681
      },
      {
        "src": "menu-photos/mini-cheese-burger-hq-1600.webp",
        "width": 1600,
        "height": 1135
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Mini Cheese Burger",
    "photoOriginal": "original-km1.jpg"
  },
  {
    "category": "kids",
    "name": "Crispy Chicken Bites",
    "price": 10,
    "description": "Bite-sized crispy chicken with fries and a drink.",
    "image": "menu-photos/crispy-chicken-bites-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/crispy-chicken-bites-hq-1200.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/crispy-chicken-bites-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/crispy-chicken-bites-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/crispy-chicken-bites-hq-1200.webp",
        "width": 1200,
        "height": 800
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Crispy Chicken Bites",
    "photoOriginal": "original-km2.jpg"
  },
  {
    "category": "kids",
    "name": "Mini Cheese Pizza",
    "price": 10,
    "description": "Small cheese pizza with fries and a drink.",
    "image": "menu-photos/mini-cheese-pizza-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mini-cheese-pizza-hq-1200.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/mini-cheese-pizza-hq-480.webp",
        "width": 480,
        "height": 480
      },
      {
        "src": "menu-photos/mini-cheese-pizza-hq-960.webp",
        "width": 960,
        "height": 960
      },
      {
        "src": "menu-photos/mini-cheese-pizza-hq-1200.webp",
        "width": 1200,
        "height": 1200
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Mini Cheese Pizza",
    "photoOriginal": "original-km3.jpg"
  },
  {
    "category": "kids",
    "name": "Kids Boneless Wings",
    "price": 10,
    "description": "Boneless wings with fries and a drink.",
    "image": "menu-photos/kids-boneless-wings-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/kids-boneless-wings-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/kids-boneless-wings-hq-480.webp",
        "width": 480,
        "height": 480
      },
      {
        "src": "menu-photos/kids-boneless-wings-hq-960.webp",
        "width": 960,
        "height": 960
      },
      {
        "src": "menu-photos/kids-boneless-wings-hq-1600.webp",
        "width": 1600,
        "height": 1600
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Kids Boneless Wings",
    "photoOriginal": "original-km4.jpg"
  },
  {
    "category": "kids",
    "name": "Mini Corn Dogs",
    "price": 10,
    "description": "Mini corn dogs with fries and a drink.",
    "image": "menu-photos/mini-corn-dogs-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mini-corn-dogs-hq-1200.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/mini-corn-dogs-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/mini-corn-dogs-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/mini-corn-dogs-hq-1200.webp",
        "width": 1200,
        "height": 900
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Mini Corn Dogs",
    "photoOriginal": "original-km5.jpg"
  },
  {
    "category": "kids",
    "name": "Kids Alfredo",
    "price": 11,
    "description": "Creamy Alfredo noodles for kids.",
    "image": "menu-photos/kids-alfredo-hq-636.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/kids-alfredo-hq-636.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/kids-alfredo-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/kids-alfredo-hq-636.webp",
        "width": 636,
        "height": 424
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Kids Alfredo",
    "photoOriginal": "original-km6.jpg"
  },
  {
    "category": "drinks",
    "name": "Vanilla Milkshake",
    "price": 6,
    "description": "Classic creamy vanilla.",
    "image": "menu-photos/vanilla-milkshake-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/vanilla-milkshake-hq-1366.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/vanilla-milkshake-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/vanilla-milkshake-hq-960.webp",
        "width": 960,
        "height": 1439
      },
      {
        "src": "menu-photos/vanilla-milkshake-hq-1366.webp",
        "width": 1366,
        "height": 2048
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Vanilla Milkshake",
    "photoOriginal": "original-vanilla-milkshake.jpg"
  },
  {
    "category": "drinks",
    "name": "Mango Milkshake",
    "price": 6,
    "description": "Smooth and creamy mango.",
    "image": "menu-photos/mango-milkshake-hq-687.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/mango-milkshake-hq-687.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/mango-milkshake-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/mango-milkshake-hq-687.webp",
        "width": 687,
        "height": 1031
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Mango Milkshake",
    "photoOriginal": "original-mango-milkshake.avif"
  },
  {
    "category": "drinks",
    "name": "Chocolate Milkshake",
    "price": 6,
    "description": "Rich chocolate shake.",
    "image": "menu-photos/chocolate-milkshake-hq-600.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chocolate-milkshake-hq-600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chocolate-milkshake-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/chocolate-milkshake-hq-600.webp",
        "width": 600,
        "height": 900
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chocolate Milkshake",
    "photoOriginal": "original-chocolate-milkshake.avif"
  },
  {
    "category": "desserts",
    "name": "Cheesecake",
    "price": 7,
    "description": "Vanilla cheesecake with berry compote.",
    "image": "menu-photos/cheesecake-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/cheesecake-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/cheesecake-hq-480.webp",
        "width": 480,
        "height": 336
      },
      {
        "src": "menu-photos/cheesecake-hq-960.webp",
        "width": 960,
        "height": 673
      },
      {
        "src": "menu-photos/cheesecake-hq-1600.webp",
        "width": 1600,
        "height": 1121
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Cheesecake",
    "photoOriginal": "original-d1.jpg"
  },
  {
    "category": "desserts",
    "name": "Chocolate Cake",
    "price": 7,
    "description": "Chocolate cake with chocolate mousse.",
    "image": "menu-photos/chocolate-cake-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chocolate-cake-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chocolate-cake-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/chocolate-cake-hq-960.webp",
        "width": 960,
        "height": 640
      },
      {
        "src": "menu-photos/chocolate-cake-hq-1600.webp",
        "width": 1600,
        "height": 1066
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chocolate Cake",
    "photoOriginal": "original-d2.jpg"
  },
  {
    "category": "desserts",
    "name": "Cookies & Cream Cookie Skillet",
    "price": 8,
    "description": "Warm cookies and cream cookie with vanilla ice cream.",
    "image": "menu-photos/cookies-cream-cookie-skillet-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/cookies-cream-cookie-skillet-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/cookies-cream-cookie-skillet-hq-480.webp",
        "width": 480,
        "height": 300
      },
      {
        "src": "menu-photos/cookies-cream-cookie-skillet-hq-960.webp",
        "width": 960,
        "height": 601
      },
      {
        "src": "menu-photos/cookies-cream-cookie-skillet-hq-1600.webp",
        "width": 1600,
        "height": 1002
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Cookies & Cream Cookie Skillet",
    "photoOriginal": "original-d8.jpg"
  },
  {
    "category": "desserts",
    "name": "Chocolate Chunk Cookie Skillet",
    "price": 8,
    "description": "Warm chocolate chunk cookie with vanilla ice cream.",
    "image": "menu-photos/chocolate-chunk-cookie-skillet-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chocolate-chunk-cookie-skillet-hq-1600.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/chocolate-chunk-cookie-skillet-hq-480.webp",
        "width": 480,
        "height": 320
      },
      {
        "src": "menu-photos/chocolate-chunk-cookie-skillet-hq-960.webp",
        "width": 960,
        "height": 641
      },
      {
        "src": "menu-photos/chocolate-chunk-cookie-skillet-hq-1600.webp",
        "width": 1600,
        "height": 1068
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Chocolate Chunk Cookie Skillet",
    "photoOriginal": "original-d7.jpg"
  },
  {
    "category": "desserts",
    "name": "Strawberry Shortcake Cookie Sundae",
    "price": 9,
    "description": "Warm strawberry cookie with berry compote.",
    "image": "menu-photos/strawberry-shortcake-cookie-sundae-hq-928.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/strawberry-shortcake-cookie-sundae-hq-928.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/strawberry-shortcake-cookie-sundae-hq-480.webp",
        "width": 480,
        "height": 637
      },
      {
        "src": "menu-photos/strawberry-shortcake-cookie-sundae-hq-928.webp",
        "width": 928,
        "height": 1232
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Strawberry Shortcake Cookie Sundae",
    "photoOriginal": "original-strawberry-shortcake-cookie-skillet.jpg"
  },
  {
    "category": "desserts",
    "name": "Triple Chocolate Cookie Sundae",
    "price": 9,
    "description": "Warm triple chocolate cookie, ice cream and sauce.",
    "image": "menu-photos/triple-chocolate-cookie-sundae-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/triple-chocolate-cookie-sundae-hq-1200.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/triple-chocolate-cookie-sundae-hq-480.webp",
        "width": 480,
        "height": 720
      },
      {
        "src": "menu-photos/triple-chocolate-cookie-sundae-hq-960.webp",
        "width": 960,
        "height": 1440
      },
      {
        "src": "menu-photos/triple-chocolate-cookie-sundae-hq-1200.webp",
        "width": 1200,
        "height": 1800
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Triple Chocolate Cookie Sundae",
    "photoOriginal": "original-triple-chocolate-cookie-skillet.jpg"
  },
  {
    "category": "desserts",
    "name": "Cookie Trio Skillet",
    "price": 16,
    "description": "Three cookies of your choice with vanilla ice cream.",
    "image": "menu-photos/cookie-trio-skillet-hq-800.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/cookie-trio-skillet-hq-800.webp",
    "representative": false,
    "imageVariants": [
      {
        "src": "menu-photos/cookie-trio-skillet-hq-480.webp",
        "width": 480,
        "height": 480
      },
      {
        "src": "menu-photos/cookie-trio-skillet-hq-800.webp",
        "width": 800,
        "height": 800
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Cookie Trio Skillet",
    "photoOriginal": "original-cookie-skillet-trio.jpg"
  },
  {
    "category": "brunch",
    "name": "Honey Sriracha Chicken Biscuit",
    "price": 16,
    "description": "With 2 eggs",
    "image": "menu-photos/honey-sriracha-chicken-biscuit-hq-960.webp",
    "tags": [
      "Spicy"
    ],
    "featured": false,
    "detailImage": "menu-photos/honey-sriracha-chicken-biscuit-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "CalebJay",
      "source": "https://commons.wikimedia.org/wiki/File:North_Carolina_Style_Southern_Fried_Chicken_Biscuit_Sandwich.jpg",
      "title": "North Carolina Style Southern Fried Chicken Biscuit Sandwich.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/honey-sriracha-chicken-biscuit-hq-480.webp",
        "width": 480,
        "height": 600
      },
      {
        "src": "menu-photos/honey-sriracha-chicken-biscuit-hq-960.webp",
        "width": 960,
        "height": 1200
      },
      {
        "src": "menu-photos/honey-sriracha-chicken-biscuit-hq-1280.webp",
        "width": 1280,
        "height": 1600
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Honey Sriracha Chicken Biscuit",
    "photoOriginal": "menu-photo-sources/honey-sriracha-chicken-biscuit.jpg"
  },
  {
    "category": "brunch",
    "name": "Biscuits & Gravy",
    "price": 16,
    "description": "With 2 eggs",
    "image": "menu-photos/biscuits-gravy-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/biscuits-gravy-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Elvenjewel777",
      "source": "https://commons.wikimedia.org/wiki/File:Biscuits_and_gravy_grits.jpg",
      "title": "Biscuits and gravy grits.jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/biscuits-gravy-hq-480.webp",
        "width": 480,
        "height": 640
      },
      {
        "src": "menu-photos/biscuits-gravy-hq-960.webp",
        "width": 960,
        "height": 1280
      },
      {
        "src": "menu-photos/biscuits-gravy-hq-1280.webp",
        "width": 1280,
        "height": 1707
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Biscuits & Gravy",
    "photoOriginal": "menu-photo-sources/biscuits-gravy.jpg"
  },
  {
    "category": "brunch",
    "name": "Chicken & Waffle",
    "price": 20,
    "description": "With 2 eggs",
    "image": "menu-photos/chicken-waffle-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/chicken-waffle-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Andy Li",
      "source": "https://commons.wikimedia.org/wiki/File:Fried_Chicken,_Bacon_%26_Waffles_-_The_Breakfast_Club_2023-09-03.jpg",
      "title": "Fried Chicken, Bacon & Waffles - The Breakfast Club 2023-09-03.jpg",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
    },
    "imageVariants": [
      {
        "src": "menu-photos/chicken-waffle-hq-480.webp",
        "width": 480,
        "height": 360
      },
      {
        "src": "menu-photos/chicken-waffle-hq-960.webp",
        "width": 960,
        "height": 720
      },
      {
        "src": "menu-photos/chicken-waffle-hq-1280.webp",
        "width": 1280,
        "height": 960
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Chicken & Waffle",
    "photoOriginal": "menu-photo-sources/chicken-waffle.jpg"
  },
  {
    "category": "brunch",
    "name": "Shrimp & Grits",
    "price": 21,
    "description": "",
    "image": "menu-photos/shrimp-grits-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/shrimp-grits-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "vxla",
      "source": "https://commons.wikimedia.org/wiki/File:Shrimp_and_Grits_at_L%C3%BCke_Restaurant.jpg",
      "title": "Shrimp and Grits at Lüke Restaurant.jpg",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0"
    },
    "imageVariants": [
      {
        "src": "menu-photos/shrimp-grits-hq-480.webp",
        "width": 480,
        "height": 319
      },
      {
        "src": "menu-photos/shrimp-grits-hq-960.webp",
        "width": 960,
        "height": 638
      },
      {
        "src": "menu-photos/shrimp-grits-hq-1280.webp",
        "width": 1280,
        "height": 850
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Shrimp & Grits",
    "photoOriginal": "menu-photo-sources/shrimp-grits.jpg"
  },
  {
    "category": "brunch",
    "name": "Country Boy Waffle",
    "price": 25,
    "description": "",
    "image": "menu-photos/country-boy-waffle-hq-960.webp",
    "tags": [],
    "featured": false,
    "detailImage": "menu-photos/country-boy-waffle-hq-1280.webp",
    "representative": true,
    "photoCredit": {
      "author": "Andy Li",
      "source": "https://commons.wikimedia.org/wiki/File:Egg_%26_bacon_and_Belgian_waffles_-_Brewhouse_%26_Kitchen_2026-04-14.jpg",
      "title": "Egg & bacon and Belgian waffles - Brewhouse & Kitchen 2026-04-14.jpg",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en"
    },
    "imageVariants": [
      {
        "src": "menu-photos/country-boy-waffle-hq-480.webp",
        "width": 480,
        "height": 362
      },
      {
        "src": "menu-photos/country-boy-waffle-hq-960.webp",
        "width": 960,
        "height": 723
      },
      {
        "src": "menu-photos/country-boy-waffle-hq-1280.webp",
        "width": 1280,
        "height": 964
      }
    ],
    "imageFit": "contain",
    "imageAlt": "Representative photo of Country Boy Waffle",
    "photoOriginal": "menu-photo-sources/country-boy-waffle.jpg"
  }
];
const CATEGORIES = [
  ['burgers', 'Burgers'], ['wings', 'Wings'], ['flatbreads', 'Flatbreads'],
  ['grill', 'Grill & Kebabs'], ['drinks', 'Drinks'], ['desserts', 'Desserts'],
  ['starters', 'Starters'], ['salads', 'Salads'], ['sandwiches', 'Sandwiches'],
  ['kids', 'Kids'], ['brunch', 'Brunch']
];
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[char]));
const currency = value => new Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0}).format(value);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

// Shared header/footer are identical across all six pages. Active navigation is set here.
const currentPage = location.pathname.split('/').pop() || 'index.html';
const internalVersion = new URL($('a[href^="menu.html"]').href).searchParams.get('v');
function siteLink(path) {
  const url = new URL(path, location.href);
  if (url.origin === location.origin && /\.html$/.test(url.pathname) && internalVersion) url.searchParams.set('v', internalVersion);
  return url.href;
}
$$('#main-nav a').forEach(link => {
  if (link.getAttribute('href').split(/[?#]/)[0] === currentPage) link.setAttribute('aria-current', 'page');
});
$$('[data-link]').forEach(link => {
  const value = SITE.links[link.dataset.link];
  if (value) link.href = siteLink(value);
});
$$('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });

const navToggle = $('.nav-toggle');
const nav = $('#main-nav');
const menuPreview = $('#menu-preview');
const menuPreviewToggle = $('.menu-preview-toggle');
function closeMenuPreview(returnFocus = false) {
  const wasOpen = !menuPreview.hidden;
  menuPreview.hidden = true;
  menuPreviewToggle.setAttribute('aria-expanded', 'false');
  if (returnFocus && wasOpen) menuPreviewToggle.focus();
}
menuPreviewToggle.addEventListener('click', () => {
  const open = menuPreview.hidden;
  menuPreview.hidden = !open;
  menuPreviewToggle.setAttribute('aria-expanded', String(open));
  if (open) $('a', menuPreview).focus();
});
$('.menu-preview-close').addEventListener('click', () => closeMenuPreview(true));
menuPreview.addEventListener('click', event => {
  if (event.target.closest('a')) { closeMenuPreview(); closeNavigation(); }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenuPreview(true);
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.site-header')) closeMenuPreview();
});

function closeNavigation() {
  closeMenuPreview();
  navToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
}
navToggle.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') !== 'true';
  if (!open) closeMenuPreview();
  navToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  document.body.classList.toggle('nav-open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeNavigation(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
    closeNavigation(); navToggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeNavigation();
});
window.matchMedia('(min-width: 1080px)').addEventListener('change', closeNavigation);

function formatTime(value) {
  const [hour, minute] = value.split(':').map(Number);
  return `${hour % 12 || 12}:${String(minute).padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
}
$$('[data-hours]').forEach(node => {
  node.innerHTML = SITE.hours.map(row => `<dt>${escapeHTML(row.label)}</dt><dd>${formatTime(row.opens)} – ${formatTime(row.closes)}</dd>`).join('');
});
if (SITE.hoursConfirmed) {
  $$('.location-grid h3 .small-note').forEach(note => { note.textContent = 'Holiday hours may vary — call to confirm'; });
}

// Absolute metadata is enabled once the production origin is supplied.
if (SITE.siteUrl) {
  const origin = SITE.siteUrl.replace(/\/$/, '');
  const pageURL = `${origin}/${currentPage}`;
  const ogURL = $('meta[property="og:url"]') || document.createElement('meta');
  ogURL.setAttribute('property', 'og:url'); ogURL.content = pageURL; document.head.append(ogURL);
  $('meta[property="og:image"]').content = `${origin}/assets/hd-burger-1280.webp`;
  const canonical = $('link[rel="canonical"]') || document.createElement('link');
  canonical.rel = 'canonical'; canonical.href = pageURL; document.head.append(canonical);
}
if (document.body.dataset.page === 'home') {
  const schema = {
    '@context': 'https://schema.org', '@type': 'Restaurant', name: "VJ's Bar & Burger",
    slogan: 'Good food. Better company.', telephone: '+1-916-260-2606',
    email: 'vjsbarburger@gmail.com', servesCuisine: ['American', 'Burgers'],
    address: { '@type':'PostalAddress', streetAddress:'2606 Gateway Oaks Dr', addressLocality:'Sacramento', addressRegion:'CA', addressCountry:'US' },
    hasMenu: SITE.siteUrl ? `${SITE.siteUrl.replace(/\/$/, '')}/assets/menu.pdf` : new URL('assets/menu.pdf', location.href).href
  };
  // Do not publish unconfirmed placeholder hours as factual search-engine data.
  // Confirm the schedule above and set hoursConfirmed=true to include opening hours.
  if (SITE.hoursConfirmed) schema.openingHoursSpecification = SITE.hours.map(row => ({
    '@type':'OpeningHoursSpecification', dayOfWeek:row.days.map(day => `https://schema.org/${day}`), opens:row.opens, closes:row.closes
  }));
  if (SITE.siteUrl) { schema.url = SITE.siteUrl; schema.image = `${SITE.siteUrl.replace(/\/$/, '')}/assets/hd-burger-1280.webp`; }
  const script = $('#restaurant-schema');
  script.textContent = JSON.stringify(schema);
}

// Carousel: six-second autoplay, explicit pause, hover/focus pause, hidden-tab pause,
// arrows, dots, left/right keys and touch swipe. Reduced motion starts paused.
const carousel = $('.hero');
if (carousel) {
  const slides = $$('.slide', carousel);
  const dots = $$('[data-slide]', carousel);
  const pause = $('[data-pause]', carousel);
  let active = 0, timer = null, userPaused = motionPreference.matches, hoverPaused = false, focusPaused = false;
  const updatePauseLabel = () => {
    pause.textContent = userPaused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', userPaused ? 'Play carousel' : 'Pause carousel');
  };
  const stop = () => { if (timer !== null) window.clearInterval(timer); timer = null; };
  function start() {
    stop();
    if (!userPaused && !hoverPaused && !focusPaused && !document.hidden) timer = window.setInterval(() => show(active + 1), 6000);
  }
  function show(index, announce = false) {
    // Keep focus on the matching CTA when a keyboard or swipe changes slides.
    const previousLinks = $$('a, button', slides[active]);
    const focusedLink = previousLinks.indexOf(document.activeElement);
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== active; });
    dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === active)));
    if (focusedLink >= 0) {
      const nextLinks = $$('a, button', slides[active]);
      (nextLinks[focusedLink] || $('[data-next]', carousel)).focus({preventScroll:true});
    }
    if (announce) $('[data-slide-status]', carousel).textContent = `Slide ${active + 1} of ${slides.length}`;
  }
  $('[data-prev]', carousel).addEventListener('click', () => { show(active - 1, true); start(); });
  $('[data-next]', carousel).addEventListener('click', () => { show(active + 1, true); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i, true); start(); }));
  pause.addEventListener('click', () => { userPaused = !userPaused; updatePauseLabel(); start(); });
  carousel.addEventListener('mouseenter', () => { hoverPaused = true; stop(); });
  carousel.addEventListener('mouseleave', () => { hoverPaused = false; start(); });
  carousel.addEventListener('focusin', () => { focusPaused = true; stop(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { focusPaused = false; start(); }
  });
  carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); show(active + (event.key === 'ArrowRight' ? 1 : -1), true); start();
    }
  });
  let touchStart = null;
  carousel.addEventListener('touchstart', event => {
    const touch = event.changedTouches[0]; touchStart = {x:touch.clientX, y:touch.clientY};
  }, {passive:true});
  carousel.addEventListener('touchend', event => {
    if (!touchStart) return;
    const touch = event.changedTouches[0], dx = touch.clientX - touchStart.x, dy = touch.clientY - touchStart.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) { show(active + (dx < 0 ? 1 : -1), true); start(); }
    touchStart = null;
  }, {passive:true});
  carousel.addEventListener('touchcancel', () => { touchStart = null; }, {passive:true});
  document.addEventListener('visibilitychange', start);
  motionPreference.addEventListener('change', event => {
    if (event.matches) { userPaused = true; updatePauseLabel(); stop(); }
  });
  updatePauseLabel(); start();
}

const menuResults = $('#menu-results');
if (menuResults) {
  const search = $('#menu-search'), diet = $('#diet-filter'), tabs = $('[data-category-tabs]');
  const sort = $('#menu-sort'), quickFilters = $$('[data-quick-filter]');
  const dishDialog = $('#dish-dialog');
  let favoritesOnly = false;
  function menuPhotoAttributes(item) {
    const variants = item.imageVariants || [];
    const srcset = variants.map(photo => `assets/${photo.src} ${photo.width}w`).join(', ');
    const original = variants[variants.length - 1];
    return `src="assets/${escapeHTML(item.image)}" ${srcset ? `srcset="${escapeHTML(srcset)}" sizes="(min-width:1360px) 410px, (min-width:1080px) calc((100vw - 128px) / 3), (min-width:800px) calc((100vw - 104px) / 2), (min-width:640px) calc((100vw - 60px) / 2), calc(100vw - 40px)"` : ''} alt="${escapeHTML(item.imageAlt || item.name)}" width="${original?.width || 600}" height="${original?.height || 400}" style="object-fit:${item.imageFit === 'contain' ? 'contain' : 'cover'}" loading="lazy" decoding="async"`;
  }
  $('.menu-count-label').textContent = `${MENU_ITEMS.length} dishes. Plenty of possibilities.`;
  function syncQuickFilters() {
    const selected = favoritesOnly ? 'favorites' : diet.value || 'all';
    quickFilters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.quickFilter === selected)));
  }
  function openDish(index) {
    const item = MENU_ITEMS[index];
    if (!item) return;
    const image = $('#dish-dialog-image');
    image.sizes = '(min-width:800px) 760px, calc(100vw - 32px)';
    image.srcset = (item.imageVariants || []).map(photo => `assets/${photo.src} ${photo.width}w`).join(', ');
    image.src = `assets/${item.detailImage || item.image}`;
    image.alt = item.imageAlt || item.name;
    image.style.objectFit = 'contain';
    const credit = $('#dish-dialog-photo-credit');
    credit.replaceChildren();
    if (item.representative && !item.photoCredit) credit.textContent = 'AI-edited illustrative image; actual presentation may vary.';
    if (item.representative && item.photoCredit) {
      credit.append(document.createTextNode(`Representative photo — ${item.photoCredit.author}. `));
      const source = document.createElement('a');
      source.href = item.photoCredit.source; source.target = '_blank'; source.rel = 'noopener'; source.textContent = 'Photo source';
      const license = document.createElement('a');
      license.href = item.photoCredit.licenseUrl; license.target = '_blank'; license.rel = 'noopener'; license.textContent = item.photoCredit.license;
      credit.append(source, document.createTextNode(' · '), license, document.createTextNode('. Resized and converted to WebP.'));
    }
    $('#dish-dialog-category').textContent = CATEGORIES.find(([id]) => id === item.category)[1];
    $('#dish-dialog-title').textContent = item.name;
    $('#dish-dialog-price').textContent = currency(item.price);
    $('#dish-dialog-description').textContent = item.description || 'Ask our team for today’s preparation.';
    $('#dish-dialog-tags').innerHTML = item.tags.map(tag => `<span class="pill">${escapeHTML(tag)}</span>`).join('');
    dishDialog.showModal();
  }
  $('.dish-dialog-close').addEventListener('click', () => dishDialog.close());
  dishDialog.addEventListener('click', event => {
    if (event.target !== dishDialog) return;
    const box = dishDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dishDialog.close();
  });
  tabs.innerHTML = CATEGORIES.map(([id, name]) => `<a href="#${id}">${escapeHTML(name)}</a>`).join('');
  let menuSections = [];
  let navigationFrame = null;
  let activeCategory = '';
  function setActiveCategory(id) {
    if (activeCategory === id) return;
    activeCategory = id;
    $$('a', tabs).forEach(link => {
      if (link.getAttribute('href') === `#${id}`) {
        link.setAttribute('aria-current', 'location');
        // Move only the horizontal tab strip; never move the document here.
        const box = link.getBoundingClientRect(), strip = tabs.getBoundingClientRect();
        if (box.left < strip.left) tabs.scrollBy({left:box.left - strip.left - 12});
        else if (box.right > strip.right) tabs.scrollBy({left:box.right - strip.right + 12});
      } else link.removeAttribute('aria-current');
    });
  }
  function updateCategoryNavigation() {
    navigationFrame = null;
    const boundary = $('.site-header').getBoundingClientRect().bottom + $('.category-tabs').offsetHeight + 28;
    let current = menuSections[0];
    for (const section of menuSections) {
      if (section.getBoundingClientRect().top <= boundary) current = section;
      else break;
    }
    setActiveCategory(current?.id || '');
  }
  function scheduleCategoryNavigation() {
    if (navigationFrame === null) navigationFrame = window.requestAnimationFrame(updateCategoryNavigation);
  }
  function renderMenu() {
    const query = search.value.trim().toLocaleLowerCase();
    const items = MENU_ITEMS.filter(item => (!favoritesOnly || item.featured) && (!diet.value || item.tags.includes(diet.value)) && `${item.name} ${item.description} ${CATEGORIES.find(([id]) => id === item.category)?.[1] || ''}`.toLocaleLowerCase().includes(query));
    items.sort((a, b) => sort.value === 'price-asc' ? a.price - b.price : sort.value === 'price-desc' ? b.price - a.price : sort.value === 'name' ? a.name.localeCompare(b.name) : Number(b.featured) - Number(a.featured));
    syncQuickFilters();
    $('#menu-result-count').textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'}${query || diet.value ? ' found' : ' on the menu'}`;
    menuResults.innerHTML = CATEGORIES.map(([id, label]) => {
      const group = items.filter(item => item.category === id);
      if (!group.length) return '';
      return `<section class="menu-section" id="${id}" aria-labelledby="heading-${id}"><div class="menu-section-heading"><h2 id="heading-${id}">${escapeHTML(label)}</h2><span>${group.length} ${group.length === 1 ? 'dish' : 'dishes'}</span></div><div class="menu-items">${group.map(item => `<article class="menu-item"><div class="menu-item-photo"><button class="menu-photo-open" type="button" data-menu-item="${MENU_ITEMS.indexOf(item)}" aria-label="View larger photo of ${escapeHTML(item.name)}"><img ${menuPhotoAttributes(item)}><span class="menu-photo-expand" aria-hidden="true">↗</span></button>${item.representative ? '<span class="menu-photo-note">Representative photo</span>' : ''}${item.featured ? '<span class="menu-favorite-badge">VJ’S FAVORITE</span>' : ''}</div><div class="menu-item-copy"><div class="menu-item-heading"><h3>${escapeHTML(item.name)}</h3><span class="item-price">${currency(item.price)}</span></div><p>${escapeHTML(item.description || 'Ask our team for today’s preparation.')}</p><div class="menu-item-tags">${item.tags.map(tag => `<span class="pill">${escapeHTML(tag)}</span>`).join('')}</div><div class="menu-item-actions"><button class="button button-outline dark-outline" type="button" data-menu-item="${MENU_ITEMS.indexOf(item)}" aria-label="View details for ${escapeHTML(item.name)}">View dish <span aria-hidden="true">↗</span></button><a href="tel:+19162602606" aria-label="Call to order ${escapeHTML(item.name)}">Call to order</a></div></div></article>`).join('')}</div></section>`;
    }).join('') || `<div class="empty-state"><h2>No bites found.</h2><p>${diet.value === 'GF' ? 'No gluten-free dishes are verified yet. Ask our team about your dietary requirements.' : 'Try another dish or ingredient, or clear your filters to explore the full menu.'}</p><button class="button" type="button" data-reset-menu>Reset filters</button></div>`;
    menuSections = $$('.menu-section', menuResults);
    $$('a', tabs).forEach(link => {
      const available = menuSections.some(section => link.getAttribute('href') === `#${section.id}`);
      if (available) {
        link.removeAttribute('aria-disabled'); link.removeAttribute('tabindex'); link.removeAttribute('title');
      } else {
        link.setAttribute('aria-disabled', 'true'); link.setAttribute('tabindex', '-1');
        link.setAttribute('title', 'No matching items in this category');
      }
      link.removeAttribute('aria-current');
    });
    activeCategory = '';
    scheduleCategoryNavigation();
  }
  function resetMenu() { search.value = ''; diet.value = ''; sort.value = 'featured'; favoritesOnly = false; renderMenu(); }
  search.addEventListener('input', renderMenu);
  diet.addEventListener('change', () => { favoritesOnly = false; renderMenu(); });
  sort.addEventListener('change', renderMenu);
  quickFilters.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.quickFilter;
    if (filter === 'all') { resetMenu(); return; }
    favoritesOnly = filter === 'favorites';
    diet.value = favoritesOnly ? '' : filter;
    renderMenu();
  }));
  $('.reset-filter').addEventListener('click', resetMenu);
  menuResults.addEventListener('click', event => {
    if (event.target.closest('[data-reset-menu]')) { resetMenu(); search.focus(); }
    const trigger = event.target.closest('[data-menu-item]');
    if (trigger) openDish(Number(trigger.dataset.menuItem));
  });
  tabs.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    // Category navigation must never discard a search or dietary preference.
    if (link.getAttribute('aria-disabled') === 'true') { event.preventDefault(); return; }
    setActiveCategory(link.getAttribute('href').slice(1));
  });
  window.addEventListener('scroll', scheduleCategoryNavigation, {passive:true});
  window.addEventListener('resize', scheduleCategoryNavigation);
  window.addEventListener('hashchange', scheduleCategoryNavigation);
  renderMenu();
  if (location.hash) {
    let id = location.hash.slice(1);
    try { id = decodeURIComponent(id); } catch { /* Ignore malformed encoded fragments. */ }
    const target = document.getElementById(id);
    if (target?.classList.contains('menu-section')) window.requestAnimationFrame(() => {
      target.scrollIntoView({behavior:'instant'});
      updateCategoryNavigation();
    });
  }
}

// Native accessible constraint validation, plus a Sacramento-local future date.
const sacramentoToday = () => {
  const parts = new Intl.DateTimeFormat('en-US', {timeZone:'America/Los_Angeles', year:'numeric', month:'2-digit', day:'2-digit'}).formatToParts(new Date());
  const value = type => parts.find(part => part.type === type).value;
  return `${value('year')}-${value('month')}-${value('day')}`;
};
$$('[data-form]').forEach(form => {
  const date = $('[name="date"]', form);
  if (date) date.min = sacramentoToday();
  form.addEventListener('input', event => {
    if (typeof event.target.setCustomValidity === 'function') event.target.setCustomValidity('');
    $('.form-status', form).textContent = '';
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    $$('input:not([type="date"]):not([type="number"]), textarea', form).forEach(field => {
      field.value = field.value.trim();
      field.setCustomValidity(field.required && !field.value ? 'Please complete this field.' : field.minLength > 0 && field.value.length < field.minLength ? `Please enter at least ${field.minLength} characters.` : '');
    });
    if (date) { date.min = sacramentoToday(); date.setCustomValidity(date.value && date.value < date.min ? 'Choose today or a future date.' : ''); }
    if (!form.reportValidity()) return;
    const type = form.dataset.form;
    $('.form-status', form).textContent = type === 'newsletter'
      ? 'Thanks! Your email format looks good. This is a demo: you have not been subscribed and your email has not been saved.'
      : 'Your details look good. This demo has not sent your message. Please email vjsbarburger@gmail.com or call (916) 260-2606 to reach our team.';
  });
});

if ('IntersectionObserver' in window && !motionPreference.matches) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, {threshold:0.08});
  $$('.reveal').forEach(node => observer.observe(node));
}
