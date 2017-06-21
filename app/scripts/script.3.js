app.controller('loadJsonCtrl', function($rootScope, $scope, $http, $filter){
    /* ONLY FOR JSON FILE
    $http.get("../../media/config.3.json").then(function(response) {
        var myData = response.data;
        */
        var myData = data;
        $rootScope.title = $filter('filter')(myData,{section: 'title'});
        $rootScope.img = myData.filter(x => x.section=='img')[0].link;
        $rootScope.summary = $filter('filter')(myData,{section: 'summary'})[0].synopsis;
        //$rootScope.infos = myData.filter(x => x.section=='info');
        $rootScope.infos = myData;
        $rootScope.seasons = $filter('filter')(myData,{section: 'episode'});
    /*
    });
    */
});

