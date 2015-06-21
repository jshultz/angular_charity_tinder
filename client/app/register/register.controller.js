'use strict';

angular.module('dashboardApp')
  .controller('RegisterCtrl', function ($scope, RegisterFactory) {
    $scope.message = 'Hello';

    $scope.submit = function(formModel){

    	RegisterFactory.createAccount(formModel)


    	console.log('formModel', formModel)
    }
  });
