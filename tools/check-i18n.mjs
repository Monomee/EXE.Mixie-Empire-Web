// Usage: node tools/check-i18n.mjs — fails if VI/EN keys differ or HTML uses an unknown key.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const js = readFileSync(new URL('script.js', root), 'utf8');

const { I18N } = vm.runInNewContext(js.replace(/^const I18N/m, 'var I18N') + ';({I18N})', {
  document: { addEventListener() {} },
});
const vi = new Set(Object.keys(I18N.vi));
const en = new Set(Object.keys(I18N.en));
const used = [
  ...[...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]),
  ...[...html.matchAll(/data-i18n-attr="[^:"]+:([^"]+)"/g)].map(m => m[1]),
];

const errors = [
  ...[...vi].filter(k => !en.has(k)).map(k => `missing in en: ${k}`),
  ...[...en].filter(k => !vi.has(k)).map(k => `missing in vi: ${k}`),
  ...used.filter(k => !vi.has(k)).map(k => `unknown key in HTML: ${k}`),
];
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`OK (${vi.size} keys, ${used.length} uses)`);
