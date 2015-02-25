var app = angular.module('sounder');

app.service('soundService', function($http, $q) {

    this.getUser = function(username) {

		var url = "http://api.soundcloud.com/users/" + username + "/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e";
		var deferred = $q.defer();

        $http({
        	method: 'GET', 
        	url: url
        })
        .then(function (data) {

        	deferred.resolve(data.data);
		});
		return deferred.promise;
    };

});