(function() {
     function LandingCtrl(Message, $scope) {
        this.heroTitle = "Let's Taco 'bout It!";
        this.selectRoom = function(room) {            
            $scope.messages = Message.getByRoomId(room.$id);
            $scope.currentRoom = room;
        }
        this.send = function() {
            room = $scope.currentRoom;
            Message.send(room.$id, this.content);
            this.content="";
        }
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl',['Message','$scope', LandingCtrl]);
 })();