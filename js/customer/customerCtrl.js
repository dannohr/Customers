angular.module('app').controller('customerCtrl', function($scope,  $stateParams, customerSrvc){
    
      $scope.customertest = "Test message from customer service"
      $scope.custsearch = ""
      
      $scope.customers = [];
      $scope.customerDetail = [];
           

      customerSrvc.getAllCustomers().then (function(response) {
        $scope.customers = response.data;
        console.log($scope.customers)
      })


      $scope.getAllCustomers = function() {
        $scope.custsearch = ''  //clear customer filter input on webpage
        customerSrvc.getAllCustomers().then (function(response) {
          $scope.customers = response.data;
          console.log($scope.customers)
          
        })
      }
      
    
    
      $scope.getCustomers = function(custsearch) {
        customerSrvc.getCustomers(custsearch).then (function(response) {
          $scope.customers = response.data;
          // console.log($scope.customers)
        })
      }


      $scope.deleteCustomer = function(id, lock_version) {
        customerSrvc.deleteCustomer(id, lock_version).then (function(response) {
          //$scope.customers = response.data;
          // console.log($scope.customers)
        })
      }        
        
      console.log(customerSrvc.allCustomers)
    })
    