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


  //basic enterprise/equity value questions
  .state('app.enterpriseEv', {
    url: '/enterpriseEv',
    views: {
      'menuContent': {
        templateUrl: 'templates/enterpriseEV.html',
        controller: 'enterpriseEvCtrl'
      }
    }
  })



  //advanced enterprise/equity value questions
  .state('app.advEnterpriseEv', {
    url: '/advEnterpriseEv',
    views: {
      'menuContent': {
        templateUrl: 'templates/advEnterpriseEV.html',
        controller: 'advEnterpriseEvCtrl'
      }
    }
  })



  //basic valuation questions
  .state('app.valuation', {
    url: '/valuation',
    views: {
      'menuContent': {
        templateUrl: 'templates/valuation.html',
        controller: 'valuationCtrl'
      }
    }
  })




  //advanced valuation questions
  .state('app.advValuation', {
    url: '/advValuation',
    views: {
      'menuContent': {
        templateUrl: 'templates/advValuation.html',
        controller: 'advValuationCtrl'
      }
    }
  })



  //basic dcf questions
  .state('app.dcf', {
    url: '/dcf',
    views: {
      'menuContent': {
        templateUrl: 'templates/dcf.html',
        controller: 'dcfCtrl'
      }
    }
  })



  //advanced dcf questions
  .state('app.advDcf', {
    url: '/advDcf',
    views: {
      'menuContent': {
        templateUrl: 'templates/advDcf.html',
        controller: 'advDcfCtrl'
      }
    }
  })




  //basic merger model questions
  .state('app.merger', {
    url: '/merger',
    views: {
      'menuContent': {
        templateUrl: 'templates/merger.html',
        controller: 'mergerCtrl'
      }
    }
  })


  //advanced merger model questions
  .state('app.advMerger', {
    url: '/advMerger',
    views: {
      'menuContent': {
        templateUrl: 'templates/advMerger.html',
        controller: 'advMergerCtrl'
      }
    }
  })




  //basic leveraged buyout questions
  .state('app.lbo', {
    url: '/lbo',
    views: {
      'menuContent': {
        templateUrl: 'templates/lbo.html',
        controller: 'lboCtrl'
      }
    }
  })



  //adv leveraged buyout questions
  .state('app.advLbo', {
    url: '/advLbo',
    views: {
      'menuContent': {
        templateUrl: 'templates/advLbo.html',
        controller: 'advLboCtrl'
      }
    }
  })




  //brain teaser questions
  .state('app.brainteaser', {
    url: '/brainteaser',
    views: {
      'menuContent': {
        templateUrl: 'templates/brainteaser.html',
        controller: 'brainteaserCtrl'
      }
    }
  })



  //analytical questions
  .state('app.analytical', {
    url: '/analytical',
    views: {
      'menuContent': {
        templateUrl: 'templates/analytical.html',
        controller: 'analyticalCtrl'
      }
    }
  })



  //background questions
  .state('app.background', {
    url: '/background',
    views: {
      'menuContent': {
        templateUrl: 'templates/background.html',
        controller: 'backgroundCtrl'
      }
    }
  })



  //career questions
  .state('app.career', {
    url: '/career',
    views: {
      'menuContent': {
        templateUrl: 'templates/career.html',
        controller: 'careerCtrl'
      }
    }
  })



  //commitment questions
  .state('app.commitment', {
    url: '/commitment',
    views: {
      'menuContent': {
        templateUrl: 'templates/commitment.html',
        controller: 'commitmentCtrl'
      }
    }
  })



  //culture questions
  .state('app.culture', {
    url: '/culture',
    views: {
      'menuContent': {
        templateUrl: 'templates/culture.html',
        controller: 'cultureCtrl'
      }
    }
  })



  //future questions
  .state('app.future', {
    url: '/future',
    views: {
      'menuContent': {
        templateUrl: 'templates/future.html',
        controller: 'futureCtrl'
      }
    }
  })



  //future questions
  .state('app.streWeak', {
    url: '/streWeak',
    views: {
      'menuContent': {
        templateUrl: 'templates/streWeak.html',
        controller: 'streWeakCtrl'
      }
    }
  })




    //future questions
    .state('app.team', {
      url: '/team',
      views: {
        'menuContent': {
          templateUrl: 'templates/team.html',
          controller: 'teamCtrl'
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
