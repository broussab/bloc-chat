(function() {
     function RoomCtrl(Room, $scope) {
        this.heroTitle = "Available Rooms";
        $scope.chatRooms=Room.all;
     }
 
     angular
         .module('blocChat')
         .controller('RoomCtrl', ['Room', '$scope', RoomCtrl]);
 })();
