(function () { 

	// Reference the squish-app module
	angular.module('squish-app')

	.service("PhotoService", PhotoService);

	function PhotoService ($http, APP_ID, REST_API_KEY) {

	  this.getPhotos = function() {
	  	var params = {
	  		headers : {
	  			"X-Parse-Application-Id" : APP_ID,
  				"X-Parse-REST-API-Key" : REST_API_KEY
	  		}
	  	};
	    return $http.get('https://api.parse.com/1/classes/photo/', params);
	  };
	
	}

})();