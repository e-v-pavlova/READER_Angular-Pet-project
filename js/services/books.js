app.factory('books', ['$http', function($http){
  return $http.get('./books.json')
  .success(function(data) {
     return data;
   })
   .error(function(data) {
     return err;
   });
}])