app.controller("SignUpControl",function($scope, $location,$rootScope,$http){
  $scope.signup = function() {
    $location.path('/login');
  };
});
