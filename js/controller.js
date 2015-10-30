var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
});



scotchApp.controller('mainController', ['$scope', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';

}]);

scotchApp.controller('aboutController', ['$scope', function($scope) {

	$scope.message = 'Look! I am an about page.';

}]);

scotchApp.controller('contactController', ['$scope', function($scope) {

	$scope.message = 'Contact us! JK. This is just a demo.';

}]);