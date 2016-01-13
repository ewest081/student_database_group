/**
 * Created by abrooksnagel on 1/12/16.
 */
var app = angular.module('myApp', []);

//Listens for events that happen in that section of the HTML
app.controller("assController", function($scope, $http){
    $scope.submitData = function(assignment) {
        return $http.post('/addAss', assignment);
    };

    //grabAss -  a whole bunch of code that searches our database and posts the requested information to the DOM

});
