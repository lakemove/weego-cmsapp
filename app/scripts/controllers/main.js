'use strict';

/**
 * @ngdoc function
 * @name cmsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cmsAppApp
 */
angular.module('cmsAppApp')
  .controller('MainCtrl', function ($scope) {

	$('#tools a').click(function() {
		console.log('sdf');
		$('#tools').find('li').removeClass('select');
		$(this).children('li').addClass('select');
	})
	$('.carousel').carousel();
	// $('#citynavaffix').affix();
  });

