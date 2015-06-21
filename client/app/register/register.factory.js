'use strict';

  //  This gets the current logged in teacher. It's magic. :)

  angular.module('dashboardApp').factory('RegisterFactory', ['$http','$q', function($http,$q) {

  	var factory = {

	    // find a suitable name based on the meta info given by each provider
	    //

	    // Simple POST request example (passing data) :
		createAccount: function(data) {
			console.log('data', data);
		$http.post('https://api.stormpath.com/v1/directories/6VFZ4hteKGxO6ELSCHmz5w/accounts', {msg:
			{
			  "username" : "jlpicard",
			  "email" : "capt@enterprise.com",
			  "givenName" : "Jean-Luc",
			  "surname" : "Picard",
			  "password" : "uGhd%a8Kl!"
			}
		}).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
		}

  	}

  	return factory;

  }]);
