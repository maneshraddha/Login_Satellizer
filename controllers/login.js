app.controller("LogControl", function($scope, $location,$rootScope,$http,$auth,$window,$timeout){
  $scope.username = "admin@bridgelabz.com";
  $scope.password = "Bridge@123";
  var data ={"emailId":$scope.username,"password":$scope.password };
  console.log('before send - ',data);
  $scope.login = function() {
    $auth.login(data,{"method":"POST","url":"http://192.168.0.17:3000/login"})
      .then(function(data) {
        console.log('After send-',data);
          $location.path("/dashboard");
      }).catch(function(error){
        console.log(error);
        alert("Wrong id and password");
      });
  };
});
