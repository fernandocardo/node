//Codigo completo do exercicio de callbacks

// Obter um usuário
// preciso obter o numero de telefone do usuário apartir do seu id
// Obter o indereço do usuário apatir do seu id
// importamos um modulo interno do node.js
const util = require ('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(callback) {
    //quando der algum problema, ->reject(ERRO)
    //quando sucesso -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {

          //return reject(new Error('DEU RUIM DE VERDADE'))

          return resolve({
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date(),
          });
        }, 1000);
    })
    
    
  }
  
  function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject){
      setTimeout(() => {
        return resolve({
          telefone: '9999-99999',
          ddd: 11,
        });
      }, 2000);
    })
    
  }
  
  function obterEndereco(idUsuario,callback) {
      setTimeout(function () {
        return callback(null, {
          rua: "Dos bobos",
          numero: 230,
        }, 2000);
      });
  }

  main()
  async function main(){
    try {

      console.time('medida-promise')
      const usuario = await obterUsuario()
      // const telefone = await obterTelefone(usuario.id)
      // const endereco = await obterEnderecoAsync(usuario.id)
      const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAsync(usuario.id)
      ])
      const endereco = resultado[1]
      const telefone = resultado[0]

        console.log(`
        Nome:${usuario.nome}
        Endereço:${endereco.rua},${endereco.numero}
        Telefone: (${telefone.ddd}),${telefone.numero}
        `)

      console.timeEnd('medida-promise')
      
    } catch (error) {
      console.log('DEU RUIM',error)
    }
  }
  
  // const usuarioPromise = obterUsuario()
  // //para manupular o sucesso, usamos a função .then
  // //para manipular erros, usamos o .catch
  // //usuario -> telefone -> endereco
  // usuarioPromise
  //   .then(function(usuario){
  //     return obterTelefone(usuario.id)
  //     .then(function resolverTelefone(result){
  //       return {
  //         usuario :{
  //           nome: usuario.nome,
  //           id: usuario.id
  //         },
  //         telefone: result
  //       }

  //     })
  //   })
  //   .then(function(resultado){
  //     const endereco = obterEnderecoAsync(resultado.usuario.id)
  //     return endereco.then(function resolverEndereco(result) {
  //       return {
  //         usuario: resultado.usuario,
  //         telefone: resultado.telefone,
  //         endereco: result
  //       }
  //     })
  //   })
  //   .then(function (resultado){
  //       console.log(`
  //       Nome:${resultado.usuario.nome}
  //       Endereço:${resultado.endereco.rua},${resultado.endereco.numero}
  //       Telefone: (${resultado.telefone.ddd}),${resultado.telefone.numero}
  //       `)

  //   })
  //   .catch(function(error){
  //       console.log('DEU RUIM', error)
  //   })
  