# Carlos Bueno — Cyber Metal Portfolio

Site de portfólio em React, TypeScript e Vite, com identidade Cyber Metal.

## Desenvolvimento local

Requer Node.js 22 (ou versão LTS compatível).

```bash
npm install
npm run dev
```

Acesse o endereço local exibido pelo Vite.

## Publicação

1. Crie um **novo** repositório público `carlosbuenodev-coder.github.io` na conta `carlosbuenodev-coder` (não substitua o repositório de perfil `carlosbuenodev-coder`).
2. Envie o conteúdo desta pasta para a raiz do novo repositório, incluindo `.github/workflows/deploy.yml`.
3. Envie os arquivos de código. Não envie `node_modules`. O workflow instalará as dependências.
4. No repositório, abra **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. Faça push na branch `main` e acompanhe **Actions**. Depois do deploy, o endereço esperado será `https://carlosbuenodev-coder.github.io`.

Observação: a hospedagem só fica ativa após a configuração e execução bem-sucedida do deploy. O site é estático; não publica nem conecta a API financeira.

## Auditoria de dependências

A auditoria de 17/11/2026 reportou quatro entradas de severidade alta na
cadeia de ferramentas de build. A origem é o aviso
[GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)
em `picomatch@4.0.7`. As demais entradas são `fdir`, `tinyglobby` e
`vite`, que dependem dessa cadeia. O aviso oficial ainda não lista uma
versão corrigida. Valide a resolução com `npm audit` quando surgir uma
correção compatível.

O npm 11 também avisou que o `postinstall` do `esbuild@0.25.12` ainda
não constava na lista `allowScripts`. O log registrou saída 0 para o
script e o binário instalado reportou a versão esperada.
