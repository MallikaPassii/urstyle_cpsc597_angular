var myApp = angular.module("myApplication", ['ngRoute']);

//Route the pages and change URL

myApp.config(function($routeProvider) {
$routeProvider
 
.when('/', {
templateUrl : 'index.html',
controller : 'homepageController'
})
 
.when('/women', {
templateUrl : 'women_category.html',
controller : 'categoryController'
})
 
.when('/men', {
templateUrl : 'men_category.html',
controller : 'ThirdController'
})
 
.otherwise({redirectTo: '/'});
});

// Define the controller for Home Page
myApp.controller("homepageController", function ($scope) {
    $scope.items = ["women", "men", "footwear", "fragrances"];
    
});

// Define the controller for Category Page - Women
myApp.controller("categoryController", function ($scope) {
    $scope.message = 'Hello from category controller';
    
});

// Define the controller for Category Page - Men
myApp.controller("ThirdController", function ($scope) {
    $scope.message = 'Hello from third controller';
    
});

