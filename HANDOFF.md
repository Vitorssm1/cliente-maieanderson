# História a dois — Mai & Anderson — Handoff

Landing page de **Mai & Anderson / "História a dois"**, dupla de fotógrafos de casamento,
elopements e destination weddings, base em **Praia Grande - SC**. Página única, um CTA:
falar no WhatsApp pra pedir orçamento.

## Stack (travada — sem framework, sem build step, sem back-end)

HTML + CSS + JS puro. Abre direto no navegador (`file://`) ou em qualquer servidor estático.
Sem `npm install`, sem bundler, sem `vercel.json` (estático puro sobe direto na Vercel, mesmo
padrão de `cliente-radar` e `portfolio-erikasilva`).

```
index.html            # marcação (sem CSS/JS inline)
css/style.css          # todo o CSS, tokens em :root
js/script.js           # todo o JS (8 IIFEs)
images/                # fotos reais entram aqui — ver images/README.md
historia-a-dois.html   # protótipo original single-file, aprovado — FONTE DE VERDADE, não apagar
TODO.md                # placeholders a trocar antes de publicar
```

`index.html` + `css/style.css` + `js/script.js` reconstroem o `historia-a-dois.html`
byte a byte (só troca `<style>`→`<link>` e `<script>`→`<script src>`). Qualquer mudança
de design deve continuar batendo com o protótipo, ou o protótipo é atualizado junto.

## Identidade visual

- Paleta: `--cream:#f6f0e4` (fundo), `--wine:#6d2436` (primária/CTA), `--wine-dark:#4a1826`,
  `--gold:#af8a51` / `--gold-light:#e4c896` (detalhe), `--ink:#221b16` (texto),
  `--paper:#fbf7ee`. WhatsApp: `--wa-green:#25d366`.
- Tipografia: **Bodoni Moda** (serif, títulos/itálicos) + **Manrope** (corpo). Via Google Fonts `<link>`.
- Assinatura visual: watermark **"&"** em itálico (`.amp-mark`) flutuando atrás dos títulos de seção.
- Cantos arredondados `--radius:20px` em fotos e cards; botões em pílula com "sheen" no hover.
- `--ease:cubic-bezier(.22,.75,.28,1)` em quase todas as transições.

## Interações (js/script.js — 8 blocos, todos IIFE)

1. Partículas douradas no hero (`#heroParticles`) — puladas se `prefers-reduced-motion`.
2. Glow que segue o cursor em `.serv-card` e `.testi-card` (via `--mx`/`--my`).
3. Header ganha `.scrolled` após 30px; botão flutuante `#floatWa` aparece após 500px.
4. Menu mobile fullscreen translúcido (`#menuToggle` / `#mainNav`), fecha no Esc / clique / resize.
5. Reveal on scroll (`.reveal` → `.on`) via IntersectionObserver, com stagger por CSS `nth-child`.
6. Contadores animados (`.num-item .val`, lê `data-count` / `data-suffix`).
7. FAQ accordion (`.faq-item`, um aberto por vez, primeiro já aberto).
8. Carrossel de depoimentos arrastável (`#testiTrack` + `#testiPrev` / `#testiNext`).

`prefers-reduced-motion: reduce` desliga animações e o reveal (CSS no fim de `style.css`
+ guarda no JS das partículas).

## Placeholders

**Nada pode ir pro ar como está.** Ver `TODO.md` — resumo: número de WhatsApp fictício
(`5500000000000`, 5 lugares), 8 fotos placeholder, 3 depoimentos ilustrativos, 3 estatísticas
ilustrativas (o "12,8 mil" seguidores é **real**), e-mail/handle de contato a confirmar.

## Deploy

Estático. `vercel` na raiz e vincular ao projeto na conta compartilhada `Vitorssm1`.
Repo GitHub: `Vitorssm1/cliente-maieanderson`. **Ainda sem deploy.**
