(function() {
  function Message($firebaseArray, $cookies) {
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);
    
      var getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }
      
    var send = function(roomId, msBody) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        var date = new Date();
        var minutes = date.getMinutes();
	       if (minutes < 10) {
               minutes = "0" + minutes;
            };
        var time = (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear()+"    "+date.getHours()+":"+minutes;
        var newMessage = {
          userName: currentUser,
          sentAt: time,
          roomId: roomId,
          msBody: msBody
      };
        messages.$add(newMessage);
    }
    return {
      getByRoomId: getByRoomId,
      send: send
    }
      
  };
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();