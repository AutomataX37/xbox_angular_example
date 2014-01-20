// app/modules/profile/directives.js
//takes it's scope frop it's nested controller
angular.module('profileApp')
	.directive('profile', [function () {
		return {
			restrict: 'AE',
			templateUrl: 'app/modules/profile/views/profile-partial.html'
			
		};
	}])