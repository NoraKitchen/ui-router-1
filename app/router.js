angular.module("my-app")
    .config(function($stateProvider){
        
        $stateProvider.state("home", {
            url: "",
            templateUrl: "app/components/home.html"
        })
        
        $stateProvider.state("view2", {
            url: "/view2",
            templateUrl: "app/components/view2.html"
        })
        
    })