# TODO — trocar antes de publicar

Tudo aqui é **placeholder**. Nada nesta lista pode ir pro ar como está.

---

## 1. Número de WhatsApp (fictício `5500000000000` — 5 ocorrências, todas em `index.html`)

O prompt original falava em "4 lugares", mas a contagem real no código é **5**:

- [ ] **Header** — link `.btn btn-primary` "Fale no WhatsApp" (`?text=` preenchido)
- [ ] **Hero** — botão `.btn btn-primary` "Solicitar orçamento" (`?text=` preenchido)
- [ ] **CTA final** — botão `.btn btn-primary` "Solicitar orçamento no WhatsApp" (`?text=` preenchido)
- [ ] **Rodapé** — link `.foot-link` "WhatsApp — a confirmar" (`https://wa.me/5500000000000`, **sem** `?text=`)
- [ ] **Botão flutuante verde** — `<a id="floatWa">` (`?text=` preenchido)

Formato final: `https://wa.me/55DDNÚMERO` (manter o `?text=Oi!%20Vim%20pelo%20site%20...`
onde já existe; ajustar/remover só no do rodapé conforme preferência).

---

## 2. Fotos placeholder (8 blocos `.ph-tile` — hoje gradiente, trocar por imagem real)

Ver `images/README.md` para nomes de arquivo sugeridos e proporções.

- [ ] **Hero** — "Foto de destaque — substituir por imagem real do casal"
- [ ] **Sobre** — "Retrato de Mai e Anderson"
- [ ] **Portfólio 1** — "Elopement na serra catarinense"
- [ ] **Portfólio 2** — "Cabana ao entardecer"
- [ ] **Portfólio 3** — "Passeio de balão ao amanhecer"
- [ ] **Portfólio 4** — "Cerimônia à luz de vela"
- [ ] **Portfólio 5** — "Making of da noiva"
- [ ] **Portfólio 6** — "Festa até o fim"

---

## 3. Depoimentos ilustrativos (`#testiTrack` — 3 cards, `index.html`)

Todos com autor "Casal — nome a confirmar". Substituir texto **e** nome quando os
depoimentos reais chegarem.

- [ ] Card 1 — contexto "Elopement, Serra Catarinense"
- [ ] Card 2 — contexto "Destination wedding, litoral"
- [ ] Card 3 — contexto "Casamento íntimo, interior"

---

## 4. Estatísticas ilustrativas (seção "Números" — ajustar `data-count` em `index.html`)

- [ ] **120+** — "Casais fotografados — número ilustrativo, ajustar"
- [ ] **7** — "Anos registrando histórias de amor — ajustar"
- [ ] **14** — "Destinos diferentes já fotografados — ajustar"

> ⚠️ **NÃO** mexer no "12,8 mil" seguidores do Instagram (`data-count="12.8"`) —
> esse número é **real**. Depois de ajustar os outros, limpar o texto "— ajustar" / "— número
> ilustrativo, ajustar" dos rótulos.

---

## 5. Contato — marcado "a confirmar" no rodapé (`index.html`)

- [ ] E-mail `contato@historiaadois.com.br` (aparece no texto do link **e** no `href="mailto:"`)
- [ ] Confirmar handle do Instagram `@historiaadoisfotografias` (3 links: portfólio, CTA final, rodapé)

---

## 6. Deploy (depois que o resto estiver resolvido)

- [ ] `vercel` na raiz do projeto e vincular ao projeto Vercel (conta compartilhada `Vitorssm1`)
- [ ] Conferir domínio final / apontar domínio próprio se houver
