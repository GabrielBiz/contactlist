var myApp = angular.module('myApp', [])

myApp.controller('AppCtrl', function ($scope, $http) {

    function refresh () {
        $http.get("/contactlist").success(function (response) {
            $scope.contactList = response
            $scope.contact = ""
        })
    }

    refresh()

    $scope.addContact = function () {
        $http.post('/contactlist', $scope.contact).success(function (response) {
            refresh()
        })
    }

    $scope.remove = function (id) {
        $http.delete('/contactlist/' + id).success(function (response) {
            refresh()
        })
    }

    $scope.edit = function (id) {
        $http.get('/contactlist/' + id).success(function (response) {
            $scope.contact = response
        })
    }

    $scope.update = function () {
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
            refresh()
        })
    }

    $scope.deselect = function () {
        $scope.contact = ""
    }
})