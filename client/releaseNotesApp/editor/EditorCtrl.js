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