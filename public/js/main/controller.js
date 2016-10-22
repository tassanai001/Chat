(function() {
    app.controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, mainService, searchEngineService) {
        $scope.activePage = 1;
        $scope.text = [];
        $scope.message = "";

        $scope.initMT = function() {
            var config = {
                apiKey: "AIzaSyAbClNhb0PEnFUvx7ViemGcOB268uRaNq8",
                authDomain: "chat-f9c5e.firebaseapp.com",
                databaseURL: "https://chat-f9c5e.firebaseio.com",
                storageBucket: "chat-f9c5e.appspot.com",
                messagingSenderId: "303533600371"
            };
            firebase.initializeApp(config);
            $scope.ref = firebase.database().ref().child("chat-f9c5e");
            $scope.list = $firebaseArray($scope.ref);
            $scope.list.$loaded()
                .then(function(message) {
                    console.log("Meaasge:", message);
                    $scope.message = message;
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
        };

        $scope.SubmitKeyword = function() {
            searchEngineService.addKeyword({
                keywords: $scope.inputkeywords
            }).then(function(result) {
                console.log(result);
            })
        }

        $scope.Submit = function(text) {
            $scope.list.$add({
                message: text
            }).then(function(value) {
                console.log("values: ", value);
            });
        }

    });
})();
