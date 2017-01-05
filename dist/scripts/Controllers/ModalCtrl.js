(function() {
    function ModalCtrl($uibModalInstance) {
        this.name="";        
        this.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
        this.submit = function(){
            $uibModalInstance.close(this.name);
        };
    }

      
    angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
 })();