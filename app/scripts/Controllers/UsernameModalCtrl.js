(function() {
    function UsernameModalCtrl($uibModalInstance, $scope) {        
        this.submit = function(){
            $uibModalInstance.close($scope.uName);
        };
    }
      
    angular
         .module('blocChat')
         .controller('UsernameModalCtrl', ['$uibModalInstance','$scope', UsernameModalCtrl]);
 })();