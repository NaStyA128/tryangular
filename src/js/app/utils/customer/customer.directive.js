(function() {
    'use strict';

    angular.module('customer')
        .directive('customer', function(){
            return {
                restrict: "E",
                templateUrl: "/templates/customer.html",
                link: function(scope, element, attr){
                    scope.customer = {
                        name: "World",
                    }
                    element.bind('click', function(){
                        if (window.confirm('What?')){
                            console.log(element.text());
                        }
                    });
                }
            }
        });
})();