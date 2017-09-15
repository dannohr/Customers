angular.module('app').controller('custDetailsCtrl', function ($scope, $stateParams, customerSrvc, $http) {
  
  

       $scope.getCustomersDetails = function(id) {
        customerSrvc.getCustomerDetail(id).then (function(response) {
          $scope.customersDetails = response.data[0];
          console.log(response.data[0])
          console.log(response.data[0]["main_location[town]"])
          $scope.city = response.data[0]["main_location[town]"];
    
        })
      }
      
      



      $scope.getCustomersDetails($stateParams.id)
  








       $scope.updateCustomer = function(id, lock_version, name) {
        customerSrvc.updateCustomer(id, lock_version, name).then (function(response) {
          $scope.customerUpdated = response;
          console.log(response)
          $scope.getCustomersDetails(response.id)
    
        })
      }






      $scope.addNewCustomer = function(name) {
        customerSrvc.addNewCustomer(name).then (function(response) {
          $scope.newCustomer = response;
          console.log(response)
          console.log(response.data.data.id)
          $scope.getCustomersDetails(response.data.data.id)
        })
      }
       
     
      
  })