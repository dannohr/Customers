angular.module('app').controller('custDetailsCtrl', function ($scope, $stateParams, customerSrvc, $http) {
  
  

       $scope.getCustomersDetails = function(id) {
        customerSrvc.getCustomerDetail(id).then (function(response) {
          $scope.customersDetails = response.data[0];
          console.log(response.data[0])
          $scope.address = response.data[0]["main_location[street_address]"];
          $scope.city = response.data[0]["main_location[town]"];
          $scope.state = response.data[0]["main_location[county_province_state]"];
          $scope.zip = response.data[0]["main_location[postcode]"];
          $scope.phone = response.data[0]["main_location[telephone]"];
    
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
       


      $scope.save = function(id) {
              
        if(typeof id === 'undefined') {  //Will be undefined if there was not an existing customer to edit
          customerSrvc.addNewCustomer($scope.customersDetails.name).then (function(response) {
            $scope.newCustomer = response;
            console.log(response)
            console.log(response.data.data.id)
            $scope.getCustomersDetails(response.data.data.id)
          })



        } else {
          console.log("Update Existing Customer")
          customerSrvc.updateCustomer(id, $scope.customersDetails.lock_version, $scope.customersDetails.name).then (function(response) {
            $scope.customerUpdated = response;
            console.log(response)
            $scope.getCustomersDetails(response.id)
      
          })
        }

     }

     
      
  })