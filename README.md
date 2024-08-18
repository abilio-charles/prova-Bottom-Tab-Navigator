PROVA-BOTTOM-TAB-NAVIGATOR
Descrição

PROVA-BOTTOM-TAB-NAVIGATOR é uma aplicação móvel desenvolvida em React Native que utiliza a biblioteca de navegação Bottom Tab Navigator do React Navigation. A aplicação contém quatro abas principais, cada uma com sua própria funcionalidade e layout:

    Home: Tela inicial com uma mensagem de boas-vindas.
    Calculator: Uma tela de calculadora que permite ao usuário somar dois números.
    List: Uma tela que exibe uma lista de itens.
    Gallery: Uma galeria simples de imagens.


Funcionalidades
1. Home

    Exibe uma mensagem de boas-vindas ao usuário.

2. Calculator

    Permite que o usuário insira dois números e calcule a soma.

3. List

    Exibe uma lista de itens em um FlatList.

4. Gallery

    Exibe uma galeria de imagens utilizando o componente ScrollView.

Estrutura do Projeto

bash

/PROVA-BOTTOM-TAB-NAVIGATOR
  /screens
    HomeScreen.js          # Tela inicial
    CalculatorScreen.js    # Tela de calculadora
    ListScreen.js          # Tela de lista
    GalleryScreen.js       # Tela de galeria
  /styles
    HomeScreenStyles.js    # Estilos para a HomeScreen
    CalculatorScreenStyles.js # Estilos para a CalculatorScreen
    ListScreenStyles.js    # Estilos para a ListScreen
    GalleryScreenStyles.js # Estilos para a GalleryScreen
  App.js                   # Arquivo principal com a configuração do React Navigation

Tecnologias Utilizadas

    React Native: Framework principal para o desenvolvimento da aplicação móvel.
    React Navigation: Biblioteca utilizada para navegação entre as telas.
    Styled-components: Biblioteca para estilização dos componentes com CSS-in-JS.
    JavaScript: Linguagem de programação utilizada.

Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas:

    Node.js (v14 ou superior)
    npm ou Yarn
    React Native CLI (opcional para rodar em dispositivos físicos ou emuladores)

Instalação

    Clone o repositório para a sua máquina local:

bash

git clone https://github.com/abilio-charles/prova-Bottom-Tab-Navigator

    Navegue até o diretório do projeto:

bash

cd /PROVA-BOTTOM-TAB-NAVIGATOR

    Instale as dependências do projeto:

bash

npm install
# ou
yarn install

Como Rodar o Projeto
Android

    Inicie o emulador Android ou conecte um dispositivo Android via USB.
    Execute o comando para iniciar o aplicativo:

bash

npm run android
# ou
yarn android

iOS

    Certifique-se de que você tem o Xcode instalado e configurado.
    Execute o comando para iniciar o aplicativo:

bash

npm run ios
# ou
yarn ios

Web (opcional)

Se você quiser rodar o aplicativo no navegador, instale o pacote react-native-web e execute:

bash

npm run web
# ou
yarn web

Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR (Pull Request) com melhorias, correções de bugs, ou novas funcionalidades.
Passos para Contribuir

    Faça um fork do projeto.
    Crie uma nova branch com a sua funcionalidade/correção: git checkout -b minha-nova-funcionalidade.
    Faça o commit das suas alterações: git commit -m 'Adiciona minha nova funcionalidade'.
    Faça o push para a branch: git push origin minha-nova-funcionalidade.
    Abra um Pull Request.

Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para mais detalhes.
Contato

Se você tiver alguma dúvida, sugestão ou quiser entrar em contato, pode me encontrar em:

    Email: seu-email@exemplo.com
    LinkedIn: seu-linkedin
