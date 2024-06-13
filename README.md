# Relatório do Projeto: Reprodução da Página de Exemplo
---
## Objetivo
O objetivo deste projeto foi reproduzir o comportamento e o layout da página de exemplo fornecida, garantindo funcionalidades específicas e seguindo diretrizes detalhadas.

## Descrição Geral
O projeto consiste na criação de um site que simula a gestão de um elenco de atletas de futebol do Botafogo para o ano de 2024. O site deve permitir o acesso somente a usuários autorizados através de um sistema básico de autenticação, utilizando armazenamento local para gerenciar o estado de login.

## Implementação Técnica
A implementação foi dividida em três páginas principais:

1. Página de Login

- Responsável pela autenticação do usuário usando uma senha pré-definida.
- A senha é comparada com seu hash SHA-256 usando a biblioteca Crypto-JS.
- Caso a senha esteja correta, o usuário é redirecionado para a página principal. Caso contrário, uma mensagem de erro é exibida.

2. Página Principal (Home)

- Exibe o elenco completo de atletas em formato de cartões.
- Os dados são obtidos através de chamadas aos endpoints fornecidos:
  - https://botafogo-atletas.mange.li/2024-1/all
  - https://botafogo-atletas.mange.li/2024-1/masculino
  - https://botafogo-atletas.mange.li/2024-1/feminino
- Permite filtrar a lista de atletas por gênero através de botões ou um seletor, dependendo do viewport.
- Utiliza armazenamento local para controlar a sessão do usuário.
- Utiliza fontes personalizadas e aplica um design responsivo conforme as especificações.

3. Página de Detalhes de Atleta

- Exibe informações detalhadas de um atleta específico, obtidas do endpoint:
  - https://botafogo-atletas.mange.li/2024-1/{atleta-id}
- O atleta-id é extraído da URL para carregar os dados corretos.
- Somente acessível após a autenticação do usuário.
- Responsiva e utiliza o layout vertical até 768px.

### Tecnologias Utilizadas
- HTML: Estruturação das páginas.
- CSS: Estilização das páginas e dos elementos.
- JavaScript: Implementação da lógica de autenticação, requisições HTTP para obter dados dos atletas e manipulação do DOM.
- Crypto-JS: Biblioteca utilizada para calcular o hash SHA-256 da senha.
- GitHub Pages: Hospedagem pública do projeto.

### Responsividade
- Página de Login: Layout vertical até 768px.
- Página Principal e Detalhes: Layout vertical até 768px; Container de atletas em uma coluna até 768px, duas colunas até 1024px e quatro colunas após 1024px.
- Seleção de Elenco: Utiliza select até 768px e botões para viewports maiores que 768px.

### Conclusão
O projeto foi desenvolvido com sucesso, atendendo aos requisitos especificados e emulando o comportamento da página de exemplo fornecida. A utilização de armazenamento local para a autenticação, a integração com APIs externas para obter dados dinâmicos e a responsividade foram pontos chave para garantir uma experiência de usuário consistente e funcional em diferentes dispositivos.

Para acessar o projeto, ele está disponível em GitHub Pages.
