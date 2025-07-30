# Pant Marketing Dashboard

Dashboard profissional para campanhas de tráfego pago.

## Funcionalidades

- Autenticação simples com senha
- Criação e gerenciamento de dashboards
- Múltiplos modelos de negócio suportados
- Visualização de métricas em tempo real
- Gráficos interativos com Recharts
- Interface responsiva com Tailwind CSS

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
npm run check
```

### Cloudflare Pages

Ao configurar o projeto no Cloudflare Pages, use estas opções:

- **Build command:** `npm run build`
- **Build output directory:** `dist`

O arquivo `wrangler.toml` já define `pages_build_output_dir = "dist"`, por isso não é
necessário apontar para `dist/client`.
