const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['js/entry.js'],
  bundle: true,
  platform: 'browser',
  format: 'iife',
  globalName: 'VESTA',
  outfile: 'js/vesta.bundle.js',
  logLevel: 'info'
}).then(() => {
  console.log('Bundle created: js/vesta.bundle.js');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
