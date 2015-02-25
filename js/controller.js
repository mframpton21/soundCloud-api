var app = angular.module('sounder');

app.controller('MainController', function($scope, soundService, $sce) {

	$scope.test = "Hello World";

	$scope.getUser = function() {

    	soundService.getUser($scope.searchText)
    	.then(function (data) {

    		console.log(data);
        	$scope.userData = data;
        	$scope.searchText = '';

    	});        
    };

	$scope.play = function(track_url) {
		console.log(track_url);
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      		$scope.$apply($scope.iFrame = $sce.trustAsHtml(oEmbed.html));
    	});     
    };

});