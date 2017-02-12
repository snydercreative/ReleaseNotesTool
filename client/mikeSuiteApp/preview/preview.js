(function(app) {
	'use strict';
	
	app.controller('PreviewCtrl', function() {
		 
		var self = this;
		
		self.aceContent = sessionStorage.aceContent || '';		
		
	});

})(angular.module('mikeSuiteApp'));