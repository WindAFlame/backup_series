var app = angular.module('myApp', []);

app.controller('jsonInfoCtrl', function($scope, $http) {
    $http.get("../media/config.1.json").then(function(response) {
        $scope.myData = response.data.info;
    });
});

app.controller('jsonSeasonCtrl', function($scope, $http) {
    $http.get("../media/config.1.json").then(function(response) {
        // Variable
        //$scope.myData = response.data.season;
        $scope.listSeason = [];
        // Implements
        angular.forEach(response.data.season,function(value, key) {
            $scope.listSeason.push(new Season(key,value));
        });
    });
});