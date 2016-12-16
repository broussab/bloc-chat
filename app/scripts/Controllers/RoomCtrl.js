(function() {
     function RoomCtrl(Room, $scope) {
        this.heroTitle = "Available Rooms";
        this.roomData = Room;
        $scope.chatRooms=this.roomData.all; 
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
 })();
