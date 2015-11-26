app.factory('rest', ['$http', function($http) {

    var urlPadrao = "http://localhost:8080/Restful/resources/"

    return {
        listar: function () {
            return $http.get(urlPadrao + "aluno/listar");
        },

        salvar: function (aluno) {
            if (aluno.id)
                return $http.put(urlPadrao + "aluno/editar", aluno);
             else
                return $http.post(urlPadrao + "aluno/adicionar", aluno);
        },

        apagar: function (id) {
            return $http.delete(urlPadrao + "aluno/apagar/" + id);
        }
     }


}]);