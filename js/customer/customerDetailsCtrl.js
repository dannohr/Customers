angular.module('app').controller('custDetailsCtrl', function ($scope, $stateParams, customerSrvc) {
  
  
       $scope.customerdetailstest = "Test from customer detail page"
  

       $scope.getCustomersDetails = function(id) {
        customerSrvc.getCustomerDetail(id).then (function(response) {
          $scope.customersDetails = response.data[0];
          console.log(response.data)
    
        })
      }
       
      $scope.getCustomersDetails($stateParams.id)

      
       
  })