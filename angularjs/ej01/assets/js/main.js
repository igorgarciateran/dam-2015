var todoApp = angular.module('todoApp', []);
todoApp.controller('TodoController', ['$scope', function($scope) {
    console.log($scope);
    var todos = [];

    todos.push({
        done: false,
        task: 'Aprender Angular JS'
    });
    todos.push({
        done: false,
        task: 'Aprender Ionic'
    });
    todos.push({
        done: true,
        task: 'Adorar JS'
    });

    $scope.todos = todos;

    $scope.addTodo = function() {
        todos.push({
            done: false,
            task: $scope.inputText
        });
        $scope.inputText = "";
    };



    $scope.deleteTodo = function() {
        todo.splice(2, 1);
    };

}]);
