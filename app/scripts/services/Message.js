(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
   
    var getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }
      
    /*var add = function(name) {
        rooms.$add({"name": name});
    }*/
    return {
      getByRoomId: getByRoomId
      //add: add
    }
      
  };
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();