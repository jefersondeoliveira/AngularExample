app.controller('matriculaController',['$scope', 'rest', function($scope, rest){

    $scope.listar = function () {
        rest.listar().then(function (resposta) {
            $scope.alunos = resposta.data;
            console.log($scope.alunos);
        }, function (erro) {

        });
    };

    $scope.salvar = function () {
        $scope.form.submitted = true;
        if ($scope.form.$valid) {
            rest.salvar($scope.aluno).then(function (resposta) {
                    $scope.listar();
                    $scope.limpar();
                    $scope.form.submitted = false;
                    alert("Aluno salvo com sucesso.");
                }, function (erro) {
                    alert("Erro ao salvar aluno");
            });
        }

    };

    $scope.limpar = function () {
        $scope.aluno = {};
    };

    $scope.apagar = function (aluno) {

        var isApagar = confirm("Deseja apagar o aluno " + aluno.nome + " ?");

        if(isApagar) {
            rest.apagar(aluno.id).then(function (resposta) {
                    $scope.listar();
                }, function (erro) {
                    alert("Erro ao apagar aluno");
            });
        }


    };

    $scope.editar = function (aluno) {
        $scope.aluno = angular.copy(aluno);
    };




}]);