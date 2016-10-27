(function(){
    'use strict';

    angular
        .module('blogDetail')
        .component('blogDetail', {
            templateUrl: '/templates/blog-detail.html',
            controller: function(Post, $http, $location, $routeParams) {
                var vm = this;
                Post.query(function(data) {
                    vm.notFound = true;
                    vm.comments = [];
                    angular.forEach(data, function(post) {
                        if (post.id == $routeParams.id) {
                            vm.notFound = false;
                            vm.post = post;
                            console.log(vm.post);
                            if (post.comments) {
                                vm.comments = post.comments;
                            }
                            resetReply();
                        }
                    });
                });


                vm.deleteComment = function(comment) {
                    vm.$apply(
                        vm.comments.splice(comment, 1)
                    );
                    // someResource.$delete()
                }

                vm.addReply = function() {
                    console.log(vm.reply);
                    vm.comments.push(vm.reply);
//                    vm.post.comments.push("abc");
//                    post.$save();
                    resetReply();
                }

                function resetReply() {
                    vm.reply = {
                        'id': vm.comments.length + 1,
                        'text': ''
                    }
                }

                if (vm.notFound) {
                    console.log('Not found');
                    //change location
                    $location.path("/");
                }

//                $scope.vm = vm;
            }
        });
})();