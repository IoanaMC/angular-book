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

 /* 19. Repeatedly Rendering Directive’s DOM Node Children */
 // app.directive("repeatNtimes", function() {
	//  return {
	// 	 restrict: "E",
	// 	 compile: function(element, attributes) {
	// 		 var content = element.children();
	// 		 for (var i=1; i<attributes.repeat; i++) {
	// 		 	element.append(content.clone());
	// 		 }
	// 	 }
	//  };
 // });

//v2 - nu merge
 // app.directive("repeatNtimes", function() {
	//  return {
	// 	restrict: "E",
	// 	compile: function(tElement, attrs) {
	// 		var content = tElement.children();
	// 		for (var i=1; i<attrs.repeat; i++) {
	// 			tElement.append(content.clone());
	// 		}

	// 		return function (scope, element, attrs) {
	// 		 element.on("click", "h1", function() {
	// 		 	$(this).css({ "background-color": "red" });
	// 		 });
	// 		};
	// 	 }
	// }
 // });

 /* 20. Directive-to-Directive Communication */
 // app.directive("basket", function() {
	//  return {
	// 	 restrict: "E",
	// 	 controller: function($scope, $element, $attrs) {
	// 		 $scope.content = [];

	// 		 this.addApple = function() {
	// 		 	$scope.content.push("apple");
	// 		 };

	// 		 this.addOrange = function() {
	// 		 	$scope.content.push("orange");
	// 		 };
	// 	 },
	// 	 link: function(scope, element) {
	// 		element.bind("mouseenter", function() {
	// 		 	console.log(scope.content);
	// 	 	});
	// 	 }
	//  };
 // });

 // app.directive("apple", function() {
	//  return {
	// 	 require: "basket",
	// 	 link: function(scope, element, attrs, basketCtrl) {
	// 	 	basketCtrl.addApple();
	// 	 }
	//  };
 // });

 // app.directive("orange", function() {
	//  return {
	// 	 require: "basket",
	// 	 link: function(scope, element, attrs, basketCtrl) {
	// 	 	basketCtrl.addOrange();
	// 	 }
	//  };
 // });

 /* 22. Implementing a Custom Filter to Reverse an Input String */
 // app.filter("reverse", function() {
	//  return function(input) {
	// 	 var result = "";
	// 	 input = input || "";
	// 	 for (var i=0; i<input.length; i++) {
	// 	 	result = input.charAt(i) + result;
	// 	 }
	// 	 return result;
	//  };
 // });

/* 23. Passing Configuration Params to Filters */
// app.filter("reverse", function() {
//  return function(input, options) {
// 	 input = input || "";
// 	 var result = "";
// 	 var suffix = options["suffix"] || "";

// 	 for (var i=0; i<input.length; i++) {
// 	 	result = input.charAt(i) + result;
// 	 }

// 	 if (input.length > 0) result += suffix;

// 	 return result;
//  };
// });

/* 24.25. Filtering a List of DOM Nodes */
app.filter("exclude", function() {
 return function(input, exclude) {
	 var result = [];
	 for (var i=0; i<input.length; i++) {
		 if (input[i] !== exclude) {
		 	result.push(input[i]);
		 }
	 }

	 return result;
 };
});

/* 25. Chaining Filters together */
app.filter("sortAscending", function() {
 return function(input) {
 }

 return result;
});