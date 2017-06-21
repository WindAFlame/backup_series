var app = angular.module('myApp', []);

app.controller('jsonInfoCtrl', function($scope, $http) {
    /* ONLY FOR JSON FILE
    $http.post("../../media/config.1.json").then(function(response) {
        $scope.myData = response.data.info;
    });
    */
    $scope.myData = data.info;
});

app.controller('jsonSeasonCtrl', function($scope, $http) {
    /* ONLY FOR JSON FILE
    $http.post("../../media/config.1.json").then(function(response) {
        $scope.listSeason = response.data.season;
        $scope.listSeasonHead = Object.keys($scope.listSeason);
    }); 
    */
    $scope.listSeason = data.season;
    $scope.listSeasonHead = Object.keys($scope.listSeason);
    // componentHandler.upgradeAllRegistered();
});