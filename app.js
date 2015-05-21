/* 3. Responding to Click Events using Controllers */
// function MyCtrl($scope) {
//  $scope.visible = true;

//  $scope.toggle = function() {
//    $scope.visible = !$scope.visible;
//  };
// }


var app = angular.module("MyApp", []);

/* 4. Creating Custom HTML Elements with Directives */
// app.directive("show", function() {
//  return {
//    link: function(scope, element, attributes) {
//        scope.$watch(attributes.show, function(value){
//        element.css('display', value ? '' : 'none');
//      });
//    }
//  };
// });

/* 5. Assigning a Default Value to a Model */
// var MyCtrl = function($scope) {
//  $scope.value = "some value";
// };

/* 6. Changing a Model Value with a Controller Function */
// function MyCtrl($scope) {
//  $scope.value = 1;

//  $scope.incrementValue = function(increment) {
//    $scope.value += increment;
//  };
// }

/* 7. Encapsulating a Model Value with a Controller Function */
// function MyCtrl($scope) {
//  $scope.value = 1;

//  $scope.getIncrementedValue = function() {
//    return $scope.value + 2;
//  };
// }

/* 8. Responding to Scope Changes */
// function MyCtrl($scope) {
//  $scope.name = "";

//  $scope.$watch("name", function() {
//    if ($scope.name.length > 0) {
//      $scope.greeting = "Greetings " + $scope.name;
//    }
//  });
// }

/* 9. Sharing Models Between Nested Controllers */
// app.controller("MyCtrl", function($scope) {
//  $scope.name = "Peter";
//  $scope.user = {
//    name: "ParkerP"
//  };
// });

// app.controller("MyNestedCtrl", function($scope) {
//  $scope.name = "Joe";
//  $scope.user = {
//    name: "JoeJ"
//  };
// });

/* 10. Sharing Code Between Controllers using Services */
// app.factory("UserService", function() {
//  var users = ["Peter", "Daniel", "Nina"];

//  return {
//    all: function() {
//      return users;
//    },
//    first: function() {
//      return users[0];
//    }
//  };
// });

// app.controller("MyCtrl", function($scope, UserService) {
//  $scope.users = UserService.all();
// });

// app.controller("AnotherCtrl", function($scope, UserService) {
//  $scope.firstUser = UserService.first();
// });

//v2 - nu merge
// var anotherCtrl = function($scope, UserService) {
//  $scope.firstUser = UserService.first();
// };

// anotherCtrl.$inject = ["$scope", "UserService"];

/* 12. Changing the DOM in Response to User Actions */