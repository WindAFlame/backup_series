var app = angular.module('myApp', []);

app.controller('jsonInfoCtrl', function($scope, $http) {
    $http.post("../media/config.1.json").then(function(response) {
        $scope.myData = response.data.info;
    });
});

app.controller('jsonSeasonCtrl', function($scope, $http) {
    $http.post("../media/config.1.json").then(function(response) {
        $scope.listSeason = response.data.season;
        $scope.listSeasonHead = Object.keys($scope.listSeason);
    });
});