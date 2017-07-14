angular.module('myApp', [])
  .controller('TestController', ['$scope', '$http', ($scope, $http) => {
    console.log('Controller is loaded');

    let errorHandler = response => {
      console.log(response)
    };

    $scope.average = 0;
    $scope.rating = "";
    let result = [];

    $scope.submit = () => {
      console.log("Submit trigered");
      //I have disabled security in the browser to make it work
      $http.get('https://api.zonky.cz/loans/marketplace?rating=' + $scope.rating)
        .then(response => {
          result = response.data
          //I've noticed that in the response you get results from a different rating as well so for this case I am implementing this filter
          let k = result.filter(x => x.rating === $scope.rating);
          $scope.average = k.reduce((total, x) => total + x.amount, 0) / k.length;
        }).catch(errorHandler)
    };
    $scope.set = x => $scope.rating = x;
  }]);
