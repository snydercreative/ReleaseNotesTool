(function(app) {
	'use strict';
	
	app.controller('BaseCtrl', function($location) {
		
		var self = this;

		self.currentNavItem = $location.path().toLowerCase().slice(1) || 'home';

	});

})(angular.module('releaseNotesApp'));