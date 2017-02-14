(function() {
	'use strict';

	angular.module('releaseNotesApp', ['ngMaterial', 'ngRoute', 'ui.ace', 'ngSanitize'])
		.config(function($mdThemingProvider, $routeProvider, $locationProvider) {
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey')
				.accentPalette('deep-orange');
			
			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: 'partials/home/home.html',
					controller: 'HomeCtrl',
					controllerAs: 'home'
				})
				.when('/editor', {
					templateUrl: 'partials/editor/editor.html',
					controller: 'EditorCtrl',
					controllerAs: 'editor'
				})
				.when('/preview', {
					templateUrl: 'partials/preview/preview.html',
					controller: 'PreviewCtrl',
					controllerAs: 'preview'
				})
				.when('/settings', {
					templateUrl: 'partials/settings/settings.html',
					controller: 'SettingsCtrl',
					controllerAs: 'settings'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
})();