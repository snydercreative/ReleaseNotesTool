(function() {
	'use strict';

	angular.module('releaseNotesApp', ['ngMaterial', 'ngRoute'])
		.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey')
				.accentPalette('deep-orange');
			
			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: 'partials/home/home.html',
					controller: 'HomeCtrl'
				})
				.when('/editor', {
					templateUrl: 'partials/editor/editor.html',
					controller: 'EditorCtrl'
				})
				.when('/preview', {
					templateUrl: 'partials/preview/preview.html',
					controller: 'PreviewCtrl'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
})();