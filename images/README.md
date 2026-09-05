# images/

Todas as fotos do site hoje são **placeholders** — blocos com gradiente creme/vinho
(`<div class="ph-tile">`) com um rótulo "Substituir por foto real". Nenhuma imagem de
verdade foi entregue ainda.

Coloque os arquivos reais nesta pasta com os nomes sugeridos abaixo e, no `index.html`,
troque o `<div class="ph-tile">…</div>` correspondente por um `<img>` apontando pra cá
(ex.: `<img src="images/hero.jpg" alt="…">`). Essa troca é um passo seguinte — a
reorganização atual **não** mexeu na marcação das fotos.

| Arquivo sugerido | Onde entra | Rótulo atual no site |
|---|---|---|
| `hero.jpg` | Hero — `.hero-visual .ph-tile` | "Foto de destaque — substituir por imagem real do casal" |
| `retrato-mai-anderson.jpg` | Seção "Sobre" — `.sobre-portrait .ph-tile` | "Retrato de Mai e Anderson" |
| `portfolio-01-elopement-serra.jpg` | Portfólio, 1º item | "Elopement na serra catarinense" |
| `portfolio-02-cabana-entardecer.jpg` | Portfólio, 2º item | "Cabana ao entardecer" |
| `portfolio-03-balao-amanhecer.jpg` | Portfólio, 3º item | "Passeio de balão ao amanhecer" |
| `portfolio-04-luz-de-vela.jpg` | Portfólio, 4º item | "Cerimônia à luz de vela" |
| `portfolio-05-making-of.jpg` | Portfólio, 5º item | "Making of da noiva" |
| `portfolio-06-festa.jpg` | Portfólio, 6º item | "Festa até o fim" |

Total: **8 imagens** (1 hero + 1 retrato + 6 portfólio).

### Dicas
- Hero: proporção ~4:5 (retrato). Retrato "Sobre": ~3:4. Portfólio: as células são
  paisagem (~340px de altura no desktop), então fotos horizontais funcionam melhor.
- Exportar em JPG otimizado (largura máx. ~1600px, qualidade ~80) pra não pesar a página.
- Manter o `alt` descritivo em cada `<img>` pra acessibilidade e SEO.
