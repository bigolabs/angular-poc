'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services', 'ui.sortable'])
  .controller('MyCtrl2', ['$scope','myService',function($scope,myService){
  
  	$scope.file = {};
  	$scope.getFile = function(filename,folderName){
  		//$scope.file[filename] = $scope.file[filename] || $scope.folders;
  		var currentFolder= $scope.folders.filter(function(folder){
          return folder.name === folderName;
      })[0];

       $scope.currentFile = currentFolder.files.filter(function(file){
          return file.name === filename;
       })[0];

  	}

    myService.getTree().success(function(response){
      $scope.folders = response;
    });


  	$scope.addNewStep = function(){
  		if($scope.currentFile){
  			$scope.currentFile.steps.push({column1:"",column2:""});	
  		}
  		
  	};

    $scope.save = function(){
      myService.saveContent($scope.folders);
    }

  }]);