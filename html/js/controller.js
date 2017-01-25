app.controller('infoCtrl',function($scope, $rootScope){
    $scope.main = jsonInfo;
    $rootScope.Title = $scope.main.Title;
});

app.controller('playerCtrl', function($scope, $sce, $timeout){
    $scope.totalSeasons = jsonS1.totalSeasons;
    
    //Videogular START
    var controller = this;
    controller.state = null;
    controller.API = null;
    controller.currentVideo = 0;

    controller.onPlayerReady = function(API) {
        controller.API = API;
    };

    controller.onCompleteVideo = function() {
        controller.isCompleted = true;

        controller.currentVideo++;

        if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

        controller.setVideo(controller.currentVideo);
    };

    controller.videos = setSourcesV2(jsonS1.Episodes);

    controller.config = {
        preload: "none",
        autoHide: false,
        autoHideTime: 3000,
        autoPlay: false,
        sources: controller.videos[0].sources,
        theme: {
            url: "bower_components/videogular-themes-default/videogular.min.css"
        },
        plugins: {
            poster: "media/img/videogular.png"
        }
    };

    controller.setVideo = function(index) {
        controller.API.stop();
        controller.currentVideo = index;
        controller.config.sources = controller.videos[index].sources;
        $timeout(controller.API.play.bind(controller.API), 100);
    };
    //Videogular END

    $scope.getIndexVideo = function(nom) {
        let index = 0;
        angular.forEach(controller.videos, function(value,key){
            if (value.Title==nom){
                index = key;
            };
        });
        return index;
    };
});

var setSourcesV1 = function(infoSerie) {
    result = [];
    angular.forEach(infoSerie, function(value, key){
        src = [];
        angular.forEach(value, function(value, key){
            src.push(value);
        });
        result.push("{sources:["+src+"]}");
    });
    return result;
};

var setSourcesV2 = function(episodes) {
    result = [];
    angular.forEach(episodes, function(episode, index){
        result.push(episode);
    });
    return result;
};