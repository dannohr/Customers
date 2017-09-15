angular.module('app').controller('mapCtrl', function($scope, $stateParams, customerSrvc, $http, $state){
    
     $scope.test = "Map testing."

    // $scope.newdata =
    
    customerSrvc.getAllCustomers().then (function(response) {
      $scope.cityState = response.data;
      // newdata = response.data;
      console.log($scope.cityState)
      // console.log(newdata)
      // return response
    })
    



     $scope.initialize = function() {
      var map = new google.maps.Map(document.getElementById('map_div'), {
         center: {lat: 32.8, lng: -96.8},
         zoom: 9
      });

      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
      });

      var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

 

   }    

    google.maps.event.addDomListener(window, 'load', $scope.initialize);


    var locations = [
      {lat: 32.948333, lng: -96.729852},
      {lat: 32.745964, lng: -96.997785}
     
    ]


  



})
    