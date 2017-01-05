(function() {
    function RoomCtrl(Room, $scope, $uibModal) {
        this.heroTitle = "Available Rooms";
        $scope.chatRooms=Room.all;
         
        this.openModal = function(){
          var modal = $uibModal.open({
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl',
            controllerAs: 'modal'
          });
          modal.result.then(function (name){
              Room.add(name);
          });
         }
    }  
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$scope', '$uibModal', RoomCtrl]);
 })();
