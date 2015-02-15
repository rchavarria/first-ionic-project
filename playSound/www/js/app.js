angular.module('playSound', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ExampleController', function($scope, $cordovaMedia) {

    var media;

    $scope.word = {
        thumbnail: 'img/small-dog.jpg',
        thumbnailTitle: 'Dog',
        thumbnailDescription: 'Wouf! Wouf!',
        image: 'img/dog.jpg',
        imageDescription: 'Help your kid to say that in English',
        audio: '/android_asset/www/audio/some-demo.mp3'
    };

    $scope.play = function (src) {
        if (media) {
            $scope.stop();
        }

        media = $cordovaMedia.newMedia(src);
        media.play();
    };

    $scope.stop = function () {
        if (!media) {
            return;
        }

        media.stop();
        media.release();
    };
 
});
