(function () { 

	// Reference the squish-app module
	angular.module('squish-app')

	.directive('imageOnLoad', imageOnLoad)

	.controller('PhotoController', PhotoController);

	function PhotoController ($scope, PhotoService) {

		var i = Math.floor((Math.random() * 100) + 1);

		$scope.name = ((i % 2) == 0) ? "Connie" : "Dave";

		$scope.getAllPhotos = function () {
			
			$scope.photoSwitcher = 'loading';

			setTimeout(function () {
				var photoPromise = PhotoService.getPhotos();

				photoPromise.success(function (data) {
						$scope.photos = data.results;
						$scope.photoSwitcher = 'loaded';
				});
			}, 2000);
		};

	}

	function imageOnLoad () {
    return {
        restrict: 'A',
        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
              element.removeClass('spinner-hide');
              element.addClass('spinner-show');
              element.parent().find('span').remove();
          });
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
              element.addClass('spinner-hide');
              // element.parent().append('<span class="spinner"></span>');
          });
        }
    };
	}

})();