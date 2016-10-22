(function(){
    app.controller('mainCtrl', function ($scope,mainService,searchEngineService) {
        $scope.activePage = 1; // Home
        $scope.initMT = function() {
            mainService.GetSample().then(function (data) {
                $scope.testData = data;
            });
        };

        $scope.SubmitKeyword = function(){
            searchEngineService.addKeyword({keywords:$scope.inputkeywords}).then(function(result){
                console.log(result);
            })
        }
    });
})();
