var app = angular.module('myApp', ['ngSanitize']);

app.controller('jsonInfoCtrl', function($scope, $http) {
    /* ONLY FOR JSON FILE
    $http.get("../../media/config.2.json").then(function(response) {
        $scope.myData = response.data.info;
    });
    */
    $scope.myData = data.info;
});

app.controller('jsonSeasonCtrl', function($scope, $http, $sce) {
    /* ONLY FOR JSON FILE
    $http.get("../../media/config.2.json").then(function(response) {
        $scope.listSeason = response.data.season;
        
    */
    $scope.listSeason = data.season;
        var listSeasonHead = Object.keys($scope.listSeason);


        createheader = function(listName) {
            var result = "<div class=\"mdl-tabs mdl-js-tabs\"><div class=\"mdl-tabs__tab-bar\">";
            angular.forEach (listName, function(name) {
                result += "<a href=\"#tab"+name+"\" class=\"mdl-tabs__tab\" ng-click=\"console.log(1)\">Season "+name+"</a>";
            });
            result += "</div></div>";
            return result;
        };

        $scope.tabHeaderString = createheader(listSeasonHead);
        $scope.tabHeader = $sce.trustAsHtml($scope.tabHeaderString);


        var loadContent = function(name) {
            var result = "<div class=\"mdl-tabs__panel\" id=\"tab"+name+"\"><table>";
            angular.forEach ($scope.listSeason[name], function(episode) {
                result += "<tr><td>{{ episode.number }}</td><td>{{ episode.name }}</td><td>{{ episode.time }}</td></tr>";
            });
            result += "</table></div>";
            return result;
        };
    /*
    });
    */
});

