## Como acessar o website:

Após baixar o repositório, digite os seguintes comandos no terminal:

```bash
cd cafe-com-leide
npm run dev
```

Acesse o link [http://localhost:3000/exemplo](http://localhost:3000/exemplo) no navegador ou clique com botão direito e control no mesmo link que aparece no terminal.

## O que é cada pasta:

- public: Onde ficam todos arquivos que ficam acessíveis ao longo do site, como imagens, ícones e dados, além das configurações para adição do site no Google no fim do projeto.
- src: Onde todo o código escrito em Typescript, CSS e Javascript está localizado.
    - components: Possui toda a estruturação da página, com código escrito em Typescript utilizando o framework React.
    - patterns: Possui outros arquivos mais simples que serão repetidos pelo site.
    - styles: Contém toda a estilização em CSS para os arquivos de ```components``` e ```patterns```
