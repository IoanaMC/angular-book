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
// app.filter("exclude", function() {
//  return function(input, exclude) {
// 	 var result = [];
// 	 for (var i=0; i<input.length; i++) {
// 		 if (input[i] !== exclude) {
// 		 	result.push(input[i]);
// 		 }
// 	 }

// 	 return result;
//  };
// });

// /* 25. Chaining Filters together */
// app.filter("sortAscending", function() {
//  return function(input) {
//  }

//  return result;
// });
 

// var app = angular.module('MyApp', ['ngResource']);

 /* 25. Requesting JSON Data with AJAX */
 // app.controller("PostsCtrl", function($scope, $http) {
	//  $http.get('data/posts.json').
	//  	success(function(data, status, headers, config) {
	// 		$scope.posts = data;
	// 	}).
	// 	error(function(data, status, headers, config) {
	// 		// log error
	// 	});
 // }); // ?custom http headers

 /* 26. Consuming RESTful APIs - nu merge*/
//  app.factory("Post", function($resource) {
// 	return $resource("/api/posts/:id");
//  });

//  app.controller("PostIndexCtrl", function($scope, Post) {
// 	Post.query(function(data) {
// 		$scope.posts = data;
// 	});
//  });

// app.controller("PostShowCtrl", function($scope, Post) {
//  Post.get({ id: 1 }, function(data) {
//  	$scope.post = data;
//  });
// });

//Configuration
// app.factory("Post", function($resource) {
//  return $resource("/api/posts/:id", {}, {
//  	query: { method: "GET", isArray: false }
//  });
// });

// app.controller("PostIndexCtrl", function($scope, Post) {
//  Post.query(function(data) {
//  	$scope.posts = data.posts;
//  });
// });

/* 27. Consuming JSONP APIs - nu merge */
// var app = angular.module("MyApp", ["ngResource"]);

// function MyCtrl($scope, $resource) {
// 	var TwitterAPI = $resource("http://search.twitter.com/search.json",
// 	{ callback: "JSON_CALLBACK" },
// 	{ get: { method: "JSONP" }});

// 	$scope.search = function() {
// 		$scope.searchResult = TwitterAPI.get({ q: $scope.searchTerm });
// 	};
// }

 /* 28. Deferred and Promise - nu merge */
 // tmp = [];

 // $http.get("/data/first.json").success(function(data) {
	//  tmp.push(data);
	//  $http.get("/data/second.json").success(function(data) {
	// 	 tmp.push(data);
	// 	 $http.get("/data/third.json").success(function(data) {
	// 		 tmp.push(data);
	// 		 $scope.combinedNestedResult = tmp.join(", ");
	// 	 });
	//  });
 // });

 //versiunea 2
 // var first = $http.get("/app/data/first.json"),
 // second = $http.get("/app/data/second.json"),
 // third = $http.get("/app/data/third.json");

 // $q.all([first, second, third]).then(function(result) {
	//  var tmp = [];
	//  angular.forEach(result, function(response) {
	//  	tmp.push(response.data);
	//  });
	//  return tmp;
 // }).then(function(tmpResult) {
 // 	$scope.combinedResult = tmpResult.join(", ");
 // });

 // $scope.startDeferredTimer = function(success) {
	//  deferredTimer(success).then(
	// 	 function(data) {
	// 		 $scope.deferredTimerResult = "Successfully finished: " +
	// 		 data.message;
	// 	 },
	// 	 function(data) {
	// 	 	$scope.deferredTimerResult = "Failed: " + data.message;
	// 	 }
	//  );
 // };

 /* 29. Client-Side Routing with Hashbang URLs */
 // var app = angular.module("MyApp", []).config(function($routeProvider, $locationProvider) {
	//  $locationProvider.hashPrefix('!');
	//  $routeProvider.
	// 	 when("/persons",
	// 	 	{ templateUrl: "partials/person_list.html" }).
	// 	 when("/persons/:id",
	//  		{ templateUrl: "partials/person_details.html",
	//  	 controller: "ShowCtrl" }).
	//  	 otherwise( { redirectTo: "/persons" });
 // });

/* 30. Using Regular URLs with the HTML5 History API */
 // app.config(function($routeProvider, $locationProvider) {
	//  $locationProvider.html5Mode(true);

	//  $routeProvider.
	// 	 when("/persons",
	// 	 	{ templateUrl: "/partials/index.jade",
	// 	 	controller: "PersonIndexCtrl" }).
	// 	 when("/persons/:id",
	// 	 	{ templateUrl: "/partials/show.jade",
	// 	 	controller: "PersonShowCtrl" }).
	// 	 otherwise( { redirectTo: "/persons" });
 // });

/* 31. Using Route Location to Implement a Navigation Menu */