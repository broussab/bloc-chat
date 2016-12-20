(function() {
    function ModalCtrl($uibModal) {
        this.name="";
      this.openModal = function(){
      var modal = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: function($scope, $uibModalInstance){
          $scope.cancel = function(){
            $uibModalInstance.dismiss('cancel');
          };
          $scope.submit = function(){
            $uibModalInstance.close($scope.name);
          };
        }
      });
      modal.result.then(function (name){
          console.log(name);
          var fb =   firebase.database().ref().child("rooms");
          fb.push({"name": name});
      });
    }
  }

      
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
 })();