angular.module('todo', ['ionic'])

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

.controller('TodoCtrl', function($scope) {
    $scope.tasks = [
        { title: 'Collect coins' },
        { title: 'Eat mushrooms' },
        { title: 'Get high enough to grab the flag' },
        { title: 'Find the Princess' }
    ];
});

