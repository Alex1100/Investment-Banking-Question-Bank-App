// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    cache: false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  //homepage
  .state('app.homepage', {
    url: '/homepage',
    views: {
      'menuContent': {
        templateUrl: 'templates/homepage.html'
      }
    }
  })

  //understanding banking questions
  .state('app.understandingbanking', {
    url: '/understandingbanking',
    views: {
      'menuContent': {
        templateUrl: 'templates/understandingbanking.html',
        controller: 'UBCtrl'
      }
    }
  })

  //warren bufett style questions
  .state('app.warrenbuffett', {
    url: '/warrenbuffett',
    views: {
      'menuContent': {
        templateUrl: 'templates/warrenbuffett.html',
        controller: 'WBCtrl'
      }
    }
  })

  //why banking questions
  .state('app.whybanking', {
    url: '/whybanking',
    views: {
      'menuContent': {
        templateUrl: 'templates/whybanking.html',
        controller: 'WhyBCtrl'
      }
    }
  })

  //failure questions
  .state('app.failure', {
    url: '/failure',
    views: {
      'menuContent': {
        templateUrl: 'templates/failure.html',
        controller: 'FailureCtrl'
      }
    }
  })

  //outside the box questions
  .state('app.outsidethebox', {
    url: '/outsidethebox',
    views: {
      'menuContent': {
        templateUrl: 'templates/outsidethebox.html',
        controller: 'outsidetheboxCtrl'
      }
    }
  })

  //outside restructuring/distressed M&A questions
  .state('app.restructdistress', {
    url: '/restructdistress',
    views: {
      'menuContent': {
        templateUrl: 'templates/restructdistress.html',
        controller: 'restructdistressCtrl'
      }
    }
  })


  //accounting questions
  .state('app.accounting', {
    url: '/accounting',
    views: {
      'menuContent': {
        templateUrl: 'templates/accounting.html',
        controller: 'accountingCtrl'
      }
    }
  })


  //advanced accounting questions
  .state('app.accountingadvanced', {
    url: '/accountingadvanced',
    views: {
      'menuContent': {
        templateUrl: 'templates/accountingadvanced.html',
        controller: 'accountingAdvancedCtrl'
      }
    }
  })


  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/homepage');
});
