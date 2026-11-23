// scripts/check-node.js
// Checks the Node version and warns if it's not within the recommended versions for this project.
const v = process.version;
const major = parseInt(v.replace(/^v/, '').split('.')[0], 10);
const engines = [16, 18];
if (!engines.includes(major)) {
  console.warn(`\n[Warning] Detected Node version ${v}. This repo is tested against Node 16 and 18 (recommended).
  You can: \n    - Use Node 18: https://github.com/coreybutler/nvm-windows (Windows) or nvm (Unix)
    - Run the dev server with the OpenSSL legacy provider: npm run start:legacy
    - Or run: cross-env NODE_OPTIONS=--openssl-legacy-provider ng serve\n`);
}
process.exit(0);
