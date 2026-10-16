// Keep HTML and its CSS/JS in sync across browser caches. No compilation needed.
// Firebase runs this automatically before deployment. Local file previews also
// support the query strings and continue using the editable source files.
import {createHash} from 'node:crypto';
import {readFile, readdir, writeFile} from 'node:fs/promises';
const root = new URL('../vjs-website/', import.meta.url);
const versions = {};
for (const file of ['css/styles.css', 'js/main.js']) {
  versions[file] = createHash('sha256').update(await readFile(new URL(file, root))).digest('hex').slice(0, 12);
}
const release = createHash('sha256').update(Object.values(versions).join(':')).digest('hex').slice(0, 12);
for (const filename of await readdir(root)) {
  if (!filename.endsWith('.html')) continue;
  const file = new URL(filename, root);
  const original = await readFile(file, 'utf8');
  let html = original;
  for (const [asset, version] of Object.entries(versions)) {
    const pattern = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    html = html.replace(new RegExp(`(["'])${pattern}(?:\\?[^"']*)?\\1`, 'g'), `"${asset}?v=${version}"`);
  }
  // Navigation also bypasses any HTML cached before revalidation headers existed.
  html = html.replace(/href="((?:index|menu|specials|private-events|delivery-takeout|find-us)\.html)(?:\?[^"#]*)?(#[^"]*)?"/g, (_, page, anchor = '') => `href="${page}?v=${release}${anchor}"`);
  if (html !== original) await writeFile(file, html);
}
console.log(`Release ${release}. Versioned assets: ${Object.entries(versions).map(([file, version]) => `${file}=${version}`).join(', ')}`);
