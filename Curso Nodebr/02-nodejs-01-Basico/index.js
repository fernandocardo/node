//Codigo completo do exercicio de callbacks

// Obter um usuário
// preciso obter o numero de telefone do usuário apartir do seu id
// Obter o indereço do usuário apatir do seu id

function obterUsuario(callback) {
    setTimeout(function () {
      return callback(null, {
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      });
    }, 110);
  }
  
  function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
      return callback(null, {
        telefone: '9999-99999',
        ddd: 11,
      });
    }, 500);
  }
  
  function obterEndereco(idUsuario, callback) {
    setTimeout(function () {
      return callback(null, {
        rua: "Dos bobos",
        numero: 230,
      }, 300);
    });
  }
  
  
  
  obterUsuario(function resolverUsuario(error, usuario) {
    if (error) {
      console.log("deu ruim", error);
      return;
    }
  
  
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
      if (error1) {
        console.log("deu ruim", error1);
        return;
      }
  
      obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if (error2) {
          console.log("deu ruim", error2);
          return;
        }
  
        console.log(`
        Nome:${ usuario.nome},
        Endereco:${endereco.rua}, ${endereco.numero}
        Telefone:(${telefone.ddd})${telefone.telefone}
            `);
      });
    });
  });