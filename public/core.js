var isPalindrome = angular.module('isPalindrome', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $scope.checkPalindrome = function() {
        $http.post('/api/ispalindrome', $scope.formData)
            .success(function(data) {
                alert('Is a palindrome');
            })
            .error(function(data) {
                alert('Is not a palindrome.');
            });
    };
}
