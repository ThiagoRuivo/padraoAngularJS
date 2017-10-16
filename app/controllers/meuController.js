(function(){
  'use script';

  angular
    .module('meuApp')
    .controller('meuController', meuController);

  meuController.inject = ['$scope'];

  function meuController($scope, service, teste){
    /* VARIÁVEIS */

    $scope.app = "Meu Botão";
    $scope.textoTeste = "Testando link com o service"

    /* LÓGICA DE INICIALIZAÇÃO */

    // atribuição de funções ao $scope
    $scope.iniciar = _iniciar;
    $scope.exibirMensagem = _exibirMensagem;

    // chamar função para iniciar o controller
    $scope.iniciar();

    /* FUNÇÕES */

    function _iniciar () {
      // inserir toda a lógica de inicialização do controller
      service.verificar(teste.retornar());
      console.log('Inicialização completa.');
    }
    function _exibirMensagem () {
      console.log('Qualquer coisa');
    }

  }
})();