'use strict';

/* Services */



angular.module('myApp.services', [])
 .service("myService",["$http",function($http){
 
 	var getTree = function(){
 		var folderUrl = "../server/data.json";
 		return $http.get(folderUrl);
 	};

 	var saveContent = function(content){
 		return $http.post("../server/dataservice.php",content);
 	}

 	return {
 		"getTree" : getTree,
 		"saveContent" :saveContent

 	}
 }])
