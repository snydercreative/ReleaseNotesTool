(function(app) {
	'use strict';
	
	app.controller('BaseCtrl', function($window, $location, $scope) {
		
		var self = this;

		self.currentNavItem = $location.path().toLowerCase().slice(1) || 'home';
	});
})(angular.module('mikeSuiteApp'));