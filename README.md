
# Carlos Bueno — Cyber Metal Portfolio 🤘

Portfólio profissional desenvolvido com **React, TypeScript e Vite**, combinando tecnologia, identidade visual Cyber Metal e apresentação de projetos de desenvolvimento de software.

### 🌐 Portfólio publicado

**[Acessar o Cyber Metal Portfolio 2.1](https://carlosbuenodev-coder.github.io/)**

## Sobre o projeto

O Cyber Metal Portfolio apresenta minha trajetória profissional, tecnologias, formação e projetos.

A identidade visual combina preto, grafite e vermelho neon, com referências ao rock clássico e heavy metal.

### Funcionalidades

- Layout responsivo para computadores e celulares.
- Animações suaves e efeitos interativos.
- Navegação entre seções.
- Cartões de tecnologias e projetos.
- Links para GitHub e LinkedIn.
- Suporte a navegação por teclado e movimento reduzido.
- Publicação automatizada pelo GitHub Actions.

## Tecnologias

- React
- TypeScript
- Vite
- CSS
- Git e GitHub
- GitHub Actions
- GitHub Pages

## Desenvolvimento local

Requer Node.js 22 ou versão LTS compatível.

Clone o repositório:

```bash
git clone https://github.com/carlosbuenodev-coder/carlosbuenodev-coder.github.io.git
cd carlosbuenodev-coder.github.io
```

Instale as dependências:

```bash
npm ci
```

Inicie o servidor:

```bash
npm run dev
```

Abra o endereço local informado pelo Vite.

Para gerar o build de produção:

```bash
npm run build
```

## Publicação

O portfólio está hospedado gratuitamente no GitHub Pages:

https://carlosbuenodev-coder.github.io/

O repositório utiliza o workflow:

`.github/workflows/deploy.yml`

O GitHub Actions executa a instalação das dependências, gera o build e publica os arquivos de produção.

O deploy é acionado por pushes na branch `main` ou manualmente pelo GitHub Actions.

## Segurança e dependências

Na auditoria de 17/11/2026, o `npm audit` identificou quatro entradas de severidade alta relacionadas à cadeia de dependências de build, com origem no aviso `GHSA-fc5q-39xc-vjpf` associado ao `picomatch@4.0.7`.

A resolução permanece pendente de verificação de uma atualização compatível.

Também foi registrado um aviso referente ao `postinstall` do `esbuild@0.25.12`. O script terminou com sucesso e o build foi validado.

Esses registros não representam uma correção das vulnerabilidades.

## Observação

Este portfólio é um site estático de apresentação profissional. Ele não publica nem conecta diretamente a API do Sistema de Gestão Financeira Empresarial.

## Contato

- [GitHub](https://github.com/carlosbuenodev-coder)
- [LinkedIn](https://www.linkedin.com/in/carlosbueno-dev)
- [Portfólio](https://carlosbuenodev-coder.github.io/)
