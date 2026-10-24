// Compõe a capa (og:image, 1200x630) do curso Do prompt ao papel: foto sem texto + título em serifa branca (DESIGN.md V15).
// Uso: node capa/compor-capa.cjs <foto.jpg>   → assets/img/capa.jpg, capa-en.jpg, capa-es.jpg
const fs = require('fs'), path = require('path');
const pw = require('/home/nmaldaner/projetos/agent-browser/node_modules/playwright');
const foto = path.resolve(process.argv[2]);
const raiz = path.resolve(__dirname, '..');
const TXT = {
  '':   { k: 'CURSO · 8 AULAS', t: 'Pare de caçar o prompt perfeito: defina o papel', a: 'Do prompt ao contexto, do contexto ao papel.' },
  '-en': { k: 'COURSE · 8 LESSONS', t: 'Stop chasing the perfect prompt: define the role', a: 'From prompt to context, from context to role.' },
  '-es': { k: 'CURSO · 8 CLASES', t: 'Deja de buscar el prompt perfecto: define el rol', a: 'Del prompt al contexto, del contexto al rol.' },
};
const b64 = fs.readFileSync(foto).toString('base64');
const html = (x) => `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
*{margin:0;box-sizing:border-box} body{width:1200px;height:630px;overflow:hidden;background:#0c0c10}
.f{position:absolute;inset:0;background:url(data:image/jpeg;base64,${b64}) right center/cover no-repeat}
.g{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,12,16,.96) 0%,rgba(12,12,16,.88) 38%,rgba(12,12,16,.25) 70%,rgba(12,12,16,0) 100%)}
.c{position:absolute;left:56px;top:0;bottom:0;width:640px;display:flex;flex-direction:column;justify-content:center;gap:22px}
.k{font:600 17px Inter;letter-spacing:.22em;color:#9a9aa6}
.t{font:500 52px/1.08 Fraunces;color:#fff}
.a{font:400 22px/1.3 Inter;color:#e6e6ea;white-space:nowrap}
.m{position:absolute;left:56px;bottom:44px;font:600 22px Inter;letter-spacing:.14em;color:#fff}.m i{color:#FACC15;font-style:normal}
</style></head><body><div class="f"></div><div class="g"></div>
<div class="c"><div class="k">${x.k}</div><div class="t">${x.t}</div><div class="a">${x.a}</div></div>
<div class="m">INEMA<i>.</i>CLUB</div></body></html>`;
(async () => {
  const b = await pw.chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const [suf, x] of Object.entries(TXT)) {
    await p.setContent(html(x), { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
    const out = path.join(raiz, 'assets/img', `capa${suf}.jpg`);
    await p.screenshot({ path: out, type: 'jpeg', quality: 88 }); console.log('ok', out);
  }
  await b.close();
})();
