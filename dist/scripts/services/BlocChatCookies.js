(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
       var modalInstance = $uibModal.open({
            templateUrl: '/templates/usernameModal.html',
            controller: 'UsernameModalCtrl',
            controllerAs: 'username',
            backdrop: 'static',
            keyboard: false
              });
        modalInstance.result.then(function (uName) { $cookies.put('blocChatCurrentUser', uName)
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();