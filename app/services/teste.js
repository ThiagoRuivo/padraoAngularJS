(function(){
  'use script';
  
  angular
    .module('meuApp')
    .service('teste', teste);
    
  teste.$inject = ['$q'];
    
  function teste($q){
    /* VARIÁVEIS */
    
    var serviceTeste = this;
    var texto = 'Serviço de teste iniciar com sucesso';
    var primeiro = 1;

    /* LÓGICA DE INICIALIZAÇÃO */

    serviceTeste.iniciar = _iniciar;
    serviceTeste.retornar = _retornar;

    serviceTeste.iniciar();
    
    /* FUNÇÕES */

    function _iniciar () {
      console.log(texto);
    }
    function _retornar () {
      return primeiro;
    }
  
  }
})();