angular.module('myApp', []).controller('myCtrl', function ($scope, $filter){
	$scope.qty = 1;
	$scope.cost = 5.73;
	$scope.result = function() {
		var total = $scope.qty * $scope.cost;
		return $filter('currency')(total, '£');
	};
});
