# Iza Nogueira | Estética & Saúde — landing page

Landing page de conversão (objetivo único: agendamento pelo WhatsApp) + página de links para a bio do Instagram.
HTML, CSS e JS puros, sem build e sem dependências. Só precisa de hospedagem estática.

## Arquivos

```
iza-estetica/
├── index.html          # landing page
├── styles.css          # estilos da landing page
├── main.js             # interações leves (reveal, botão flutuante, FAQ, rastreio)
├── links/index.html    # página de links para a bio (CSS embutido, carrega sozinha)
├── assets/
│   ├── iza-retrato.jpg / .webp   # foto do hero (recortada do story, 800px — trocar por foto em alta)
│   ├── iza-perfil.jpg / .webp    # foto secundária do "Sobre" (do perfil do Instagram — trocar)
│   ├── og-image.jpg              # imagem que aparece ao compartilhar o link (1200×630)
│   ├── favicon.svg               # ícone da aba
│   └── apple-touch-icon.png      # ícone no iPhone
└── README.md
```

## Onde está publicado

- Rascunho público no GitHub Pages: **https://abelfluxia.github.io/iza-estetica/** (página de links: **https://abelfluxia.github.io/iza-estetica/links/**).
- Repositório: https://github.com/AbelFluxIA/iza-estetica. Qualquer commit na branch `main` republica em ~1 minuto.
- A landing page está com `<meta name="robots" content="noindex">` para o Google não indexar o rascunho. Remova essa linha do `index.html` no lançamento oficial.

### Para colocar um domínio próprio (ex.: izanogueira.com.br)

1. No repositório, em Settings → Pages → Custom domain, informe o domínio e crie o registro DNS que o GitHub indicar (ou use outra hospedagem: Netlify Drop, Vercel, Hostinger, todas servem arquivos estáticos).
2. Trocar `https://abelfluxia.github.io/iza-estetica/` pelo domínio real em `index.html` (canonical, `og:url`, `og:image`, JSON-LD) e em `links/index.html` (`og:url`, `og:image`). Sem isso a prévia no WhatsApp mostra a imagem errada.
3. Colocar na bio do Instagram o link da página de links.

### Opcional

- **Analytics**: descomente o bloco de GA4 / Meta Pixel no `<head>` de `index.html` e preencha os IDs. Os cliques nos botões de WhatsApp já disparam o evento `whatsapp_click` com a origem (hero, protocolo-02, cta-final, flutuante…).
- **Depoimentos**: a seção `#depoimentos` está oculta (`hidden`) com três textos de EXEMPLO. Só ative com depoimentos reais e autorizados: troque os textos, apague as tags "Exemplo" e remova o `hidden` da `<section>`.
- **Mapa**: quando tiver o endereço, troque o `q=` do iframe por `q=Rua+X,+123,+Bairro,+João+Pessoa` e atualize o link "Ver no mapa" e o botão "Como chegar" da página de links.

## Lista para confirmar com a Iza

Tudo abaixo está marcado no HTML com comentários `A CONFIRMAR`. O site funciona sem essas respostas, mas fica melhor com elas.

1. **Protocolos oferecidos** — validar os 6 itens da seção "Protocolos" (limpeza de pele; manchas/melasma com clareadores e peeling superficial; acne adulta; viço e firmeza facial com equipamentos faciais e massagem; corpo com drenagem/modeladora/equipamentos; massagem relaxante). Remover o que ela não faz.
2. **Endereço** — rua, número e bairro (FAQ "Onde fica", seção "Onde fica", mapa, página de links).
3. **Dias e horários** — inclusive se atende sábado ou fim de tarde.
4. **Registro Anvisa e biossegurança** — se ela confirmar que todos os produtos e equipamentos têm registro e que usa descartáveis, vale acrescentar "produtos e equipamentos com registro na Anvisa" na barra de credenciais e no "Sobre": é um sinal de confiança forte.
5. **Preço de entrada** — quer publicar "a limpeza de pele começa a partir de R$ X"? A avaliação é gratuita ou tem valor? (FAQ "Quanto custa?")
6. **Acompanhamento entre sessões pelo WhatsApp** — faz? (passo 3 de "Como funciona")
7. **Depoimentos reais** — 3 clientes com autorização: primeiro nome + inicial + bairro.
8. **Fotos em alta** — uma foto retrato 4:5 com pelo menos 1200px de largura para o hero (idealmente no estúdio, com a madeira ripada ao fundo) e uma segunda para o "Sobre". As atuais foram recortadas do story e do perfil do Instagram e são de baixa resolução.
9. **Mensagem automática no WhatsApp** — configurar no WhatsApp Business uma resposta fora do horário com dois horários sugeridos, para o lead não esfriar.

## Decisões de design (para quem for mexer)

- Paleta: marfim `#FAF7F2`, areia `#F2EBE2`, café `#2A1F1A`, taupe `#6A5A4F`, ouro `#B9975B` (só em linhas e ornamentos), bronze `#7E6039` (único dourado permitido em texto, contraste AA).
- Fontes: Cormorant Garamond (títulos) + Jost (texto), via Google Fonts.
- Botão de WhatsApp na cor da marca, com o ícone; o verde oficial aparece só no pontinho de "online".
- Nada de promessa de resultado, nada de injetáveis/microagulhamento (fora do escopo legal da esteticista), nada de antes/depois.
- Todas as mensagens pré-preenchidas do WhatsApp dizem de onde a pessoa veio (hero, protocolo específico, fim da página), o que já qualifica a conversa.
