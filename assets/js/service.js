var parkoService = angular.module('parkoService', []);

parkoService.factory('Authentication', [function () {
    return {
        ValidatePage: function () {
            var user = localStorage.getItem("parkoUid");
            if (user == null) {
                document.location.href = "/login.html";
            }
            return;
        }
    }
}]);