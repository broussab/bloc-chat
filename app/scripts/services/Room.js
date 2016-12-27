(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var add = function(name) {
        rooms.$add({"name": name});
    }
    return {
      all: rooms,
      add: add
    }
  };
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();