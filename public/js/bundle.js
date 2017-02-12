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
(function(app) {
	'use strict';
	
	app.controller('BaseCtrl', function($location) {
		
		var self = this;

		self.currentNavItem = $location.path().toLowerCase().slice(1) || 'home';

	});

})(angular.module('releaseNotesApp'));
(function(app) {
	'use strict';
	
	app.controller('EditorCtrl', function() {
		 
	});

	if (document.querySelector('#editor')) {
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/chrome");
		editor.getSession().setMode("ace/mode/markdown");
	}
})(angular.module('releaseNotesApp'));
(function(app) {
	'use strict';

	app.controller('HomeCtrl', function() {

	});
	
})(angular.module('releaseNotesApp'));
(function(app) {
	'use strict';
	
	app.controller('PreviewCtrl', function() {
		 
	});

})(angular.module('releaseNotesApp'));