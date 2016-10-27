(function() {
    'use strict';

    angular
        .module('tryNav')
        .directive('tryNav', tryNav);

    function tryNav (Post, $location) {
        return {
            restrict: "E",
            templateUrl: "/templates/nav.html",
            link: function(scope, element, attr) {
                scope.items =Post.query();

                scope.selectItem = function($item, $model, $label) {
                    $location.path("/blog/" + $item.id);
                    scope.searchQuery = "";
                }

                scope.searchItem = function() {
                    console.log(scope.searchQuery);
                    $location.path("/blog/").search("q", scope.searchQuery);
                    scope.searchQuery = "";
                }

            }
        }
    }

})();