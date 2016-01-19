(function () { 
	var squish_app = angular.module('squish-app', [])

	.controller('AppCtrl', AppCtrl);

	function AppCtrl($scope) {

		var i = Math.floor((Math.random() * 100) + 1);

		$scope.name = ((i % 2) == 0) ? "Connie" : "Dave";

		$scope.getAllPhotos = function() {

		}
	}

})();