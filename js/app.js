// Create app
var myApp = angular.module('myApp', ['ui.router'])
// Configure app
myApp.config(function($stateProvider) {
    $stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'templates/home.html',
		controller: 'HomeController',
	})
	// Configure states for "content" and "about"
	.state('about', {
		url:'/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutController',
	})
	.state('content', {
		url:'/content',
		templateUrl: 'templates/content.html',
		controller: 'ContentController',
	})
})
// Landing page controller: define $scope.number as a number
myApp.controller('HomeController', function($scope){
  $scope.number = 27;
})

// About page controller: define $scope.about as a string
myApp.controller('AboutController', function($scope){
  $scope.about = "Few Facts About Me:";
})

// Content controller: define $scope.url as an image
myApp.controller('ContentController', ['$scope', '$http', function($scope, $http) {
  $http.get('data/contentPage.json').then(function(response) {
  	$scope.contents = response.data;
  })

}])

