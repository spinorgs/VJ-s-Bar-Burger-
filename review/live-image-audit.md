# Deployed image audit — October 23, 2026

Chrome decoded all 102 assigned page and menu images successfully in a fresh live session. The screenshot’s cocktail card still referenced the older cocktail asset. Replaced older cocktail photos across Home, Our Bar and Specials with the supplied pink cocktail image. Updated the homepage event banner to the supplied event dining-room photo and Our Bar’s backbar to the supplied wide bar photo.

The build now versions image URLs using a SHA-256 content digest, including HTML src/srcset and dynamic menu images. This replaces manually maintained image versions and ensures replacement bytes use a new cache key. Page, script and menu cache revalidation remains enabled; images retain their existing cache policy.

The rebuilt local site passed decoding for all 102 assigned page/menu images. This check includes lazy-loaded images. No replacement was inferred for unrelated wine, beer or food imagery.
