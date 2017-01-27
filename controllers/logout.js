app.controller("LogoutControl",function($location, $auth){
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        $location.path('/login');
      });
  });
