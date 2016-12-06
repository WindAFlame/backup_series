/**
 * Created by cedric.ghislain on 05/12/2016.
 */
var app = angular.module('myApp', []);

app.controller('jsonInfoCtrl', function($scope, $http) {
    $http.get("../media/config.json").then(function(response) {
        $scope.myData = response.data.info;
    });
});

app.controller('jsonSeasonCtrl', function($scope, $http) {
    $http.get("../media/config.json").then(function(response) {
        $scope.myData = response.data.season;
    });
});