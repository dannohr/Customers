angular
    .module('app', ['ui.router'])
    
    .config(function($stateProvider, $urlRouterProvider, $httpProvider){
        
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $urlRouterProvider.otherwise('/')

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: '/js/home/home.html',
                controller: 'homeCtrl'
            })
            .state("customer", {
                url: "/customer/customer",   
                templateUrl: '/js/customer/customer.html',
                controller: 'customerCtrl'
            })

            .state("customerdetails", {
                url: "/customer/detail/:id",   
                templateUrl: '/js/customer/customerdetails.html',
                controller: 'custDetailsCtrl'
            })

            .state("product", {
                url: "/product/:product",   
                templateUrl: '/js/product/product.html',
                controller: 'productCtrl'
            })

            .state("info", {
                url: "/info",   
                templateUrl: '/js/info/info.html'
            })

            // Each State is a new page (view)
    })