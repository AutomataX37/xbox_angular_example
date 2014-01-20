// app/modules/profile/controllers.js
angular.module('profileApp', [])
.controller('profileCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.tabs=[];
	
	//Takes a profile name e.g. "Major Nelson" and will push a Profile object to a new tab in the tabs array
	$scope.addProfile = function(name){
		$scope.resetForm();
		$scope.tabs.push({"name": name, "pulling":true});

		$http.get('https://xboxapi.com/profile/'+name).success(function(data) 
		{			
			tempProfile = _.find($scope.tabs, function(data)
			{
				return data.name == name; 
			});
			
			angular.extend(tempProfile,{"profile":data, "pulling":false});
			
		})
		.error(function(data)
		{
			//_.findWhere($scope.tabs, {"name": name}).push("success": false, "message":"The call returned sucessfully", "pulling": false});	
		});

		
	}

	//Removes a tab from the array
	$scope.removeTab = function (index) {
		$scope.tabs.splice(index, 1);
	};

	//resets the profile textbox to empty
	$scope.resetForm = function()
	{
		$scope.name = "";
	}

	//Retuns an array of tab objects
	$scope.getTabs = function()
	{
		return $scope.tabs;
	}
}]);
