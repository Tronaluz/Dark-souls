# Dark Souls - Projeto Prático EBAC Front-End

Este projeto é uma página web dedicada à franquia de jogos de ação e RPG "Dark Souls". O site fornece informações sobre a franquia, seus jogos, NPCs e o diretor Hidetaka Miyazaki, oferecendo uma experiência interativa e visual para os fãs da série.

## Visão Geral

A página é dividida em seções que destacam diferentes aspectos da franquia Dark Souls:

- **Dark Souls (Lore):** Descrição geral da franquia, sua narrativa profunda e elementos de jogabilidade.
- **Jogos:** Apresentação dos três jogos principais da série: *Dark Souls*, *Dark Souls II* e *Dark Souls III*, com imagens e trailers.
- **NPCs:** Lista de NPCs notáveis de cada jogo, com uma exibição visual dos personagens.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página web.
- **CSS3/Sass**: Utilização de Sass para modularização e manutenção do CSS, gerando código CSS otimizado.
- **JavaScript**: Funcionalidades interativas para navegação e manipulação de conteúdo.
- **Node.js & NPM**: Gerenciamento de dependências do projeto.
- **Gulp**: Automatização de tarefas como compilação de Sass, minificação de arquivos CSS/JavaScript e otimização de imagens.

## Estrutura do Projeto

```plaintext
📁 dist/
    └── 📁 images/
    └── 📁 styles/
    └── 📁 scripts/
📄 index.html

dist/images/: Contém todas as imagens usadas na página, incluindo logotipos, banners, personagens, etc.
dist/styles/main.css: Contém o estilo principal da página gerado a partir do Sass.
dist/scripts/main.js: Contém scripts para interatividade.
gulpfile.js: Configuração do Gulp para automatização de tarefas.
