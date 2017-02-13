(function(app, showdown) {
	'use strict';
	
	app.controller('PreviewCtrl', function() {
		 
		var self = this,
			converter = new showdown.Converter(),
			aceContent = sessionStorage.aceContent || '';

		self.markdown = converter.makeHtml(aceContent);
	});

})(angular.module('releaseNotesApp'), showdown);


