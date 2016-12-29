(function() {
     function LandingCtrl(Message, $scope) {
        this.heroTitle = "Let's Taco 'bout It!";
        this.selectRoom = function(room) {            
            $scope.messages = Message.getByRoomId(room.$id);
            $scope.currentRoom = room;
        }
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl',['Message','$scope', LandingCtrl]);
 })();