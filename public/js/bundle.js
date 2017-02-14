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
				.otherwise({
					redirectTo: '/'
				});
		});
})();
(function(app) {
	'use strict';
	
	app.controller('EditorCtrl', function($scope) {
		var self = this,
			aceEditorSession;

		self.aceLoaded = function(editor) {
			editor.$blockScrolling = Infinity;
			aceEditorSession = editor.getSession();
			if (sessionStorage.aceContent)
				aceEditorSession.setValue(sessionStorage.aceContent);
		};

		self.aceChanged = function(editor) {
		};

		$scope.$on('$routeChangeStart', function(next, current) {
			sessionStorage.aceContent = aceEditorSession.getValue();
		});		 
	});

})(angular.module('releaseNotesApp'));
(function(app) {
	'use strict';
	
	app.controller('BaseCtrl', function($window, $location, $scope) {
		
		var self = this;

		self.currentNavItem = $location.path().toLowerCase().slice(1) || 'home';
	});
})(angular.module('releaseNotesApp'));
(function(app, showdown) {
	'use strict';
	
	app.controller('PreviewCtrl', function() {
		 
		var self = this,
			converter = new showdown.Converter(),
			aceContent = sessionStorage.aceContent || '';

		self.markdown = converter.makeHtml(aceContent);
	});

})(angular.module('releaseNotesApp'), showdown);



(function(app) {
	'use strict';

	app.controller('HomeCtrl', function() {

	});
	
})(angular.module('releaseNotesApp'));