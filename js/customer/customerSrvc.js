angular.module('app').service('customerSrvc', function($http) {

    var baseUrl = "https://secure.workbooks.com/crm/organisations.api?";
    var apiKey = 'api_key=49591-ebf97-35abc-82f3f-e2179-97b60-eb671-5832c&client=api&api_version=1';
    var columns= '&_select_columns=["name","id","lock_version"]'
    var testurl = 'https://cors-anywhere.herokuapp.com/https://secure.workbooks.com/crm/organisations.api?api_key=49591-ebf97-35abc-82f3f-e2179-97b60-eb671-5832c&client=api&api_version=1'
    var testurl2 = 'https://secure.workbooks.com/crm/organisations.api?api_key=49591-ebf97-35abc-82f3f-e2179-97b60-eb671-5832c&client=api&api_version=1'
    var filterNameHead = '&_filter_json=[["name","ct","'
    var filterNameTail = '"]]'
    var filterIdHead = '&_filter_json=[["id","eq","'
    var filterIdTail = '"]]'
    var url = ''
    var self = this;
 
    
    // Return all customers
    this.getAllCustomers = function() {
        return $http.get(baseUrl + apiKey).then(function(response){
          self.customers = response.data
          return self.customers

      })
    };

    // Return customers filtered by name
    this.getCustomers = function(filterStr) {
        console.log("Filter in service: " + filterNameHead + filterStr + filterNameTail)
        return $http.get(baseUrl + apiKey + columns + filterNameHead + filterStr + filterNameTail).then(function(response){
          self.customers = response.data
          return self.customers
      })
    };

    // Return customers info for one ID
    this.getCustomerDetail = function(id) {
      console.log("Detail for ID: " + id + " (from service)")
      // console.log(baseUrl + apiKey + columns + filterIdHead + id + filterIdTail)
      return $http.get(baseUrl + apiKey + columns + filterIdHead + id + filterIdTail).then(function(response){
        self.customerDetail = response.data
        return self.customerDetail
    })
  };

})


