/* global angular */
(function() {
  "use strict";
  angular.module("my-app").controller("stuffCtrl", function($scope) {
    $scope.message = "Hello";

    $scope.reviews = [
      {
        text: "AngularJS is the best thing since sliced bread! It's Bad-ass!",
        rating: 5,
        reviewer: "Burton Wax"
      },
      {
        text: "I love AngularJS, especially when I'm programming!",
        rating: 4,
        reviewer: "Emily Post"
      },
      {
        text: "AngularJS is bad, use React instead!",
        rating: 1,
        reviewer: "Angela Pearson"
      }
    ];

    $scope.addReview = function(inputReviewText, inputReviewRating, inputReviewName) {
      if (inputReviewText) {
        var newReview = {
          text: inputReviewText,
          rating: inputReviewRating,
          reviewer: inputReviewName
        };
        $scope.reviews.push(newReview);
        $scope.newReviewText = "";
        $scope.newReviewRating = "";
        $scope.newReviewName = "";
      }
    };

    $scope.deleteReview = function(inputIndex) {
      $scope.reviews.splice(inputIndex, 1);
    };

    $scope.isPositiveReview = function(inputReview) {
      return inputReview.text.indexOf("bad") === -1;
    };

    window.$scope = $scope;
  });
})();