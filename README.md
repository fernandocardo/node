# node
Aprendendo Node

## Fontes de Aprendizado:
 - https://treinamento.nodebr.org/

### Começando um projeto
`npm init -y`

Nesse momento é criado o arquivo package.json, indicando as caracteristicas do projeto.
Também é informado que a entrada do programa "main" é em index.js
Caso ele não encontre, o programa não funciona.

Para executar:
`node index.js`
ou 
`node .`

Se quiser criar um script, basta incluir no package.json, na chave scripts
~~~~
  "scripts": {
    "dev": "node index.js",
~~~~

Para executar o script criado
`npm run dev`