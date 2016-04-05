

angular.module('chat',['ngenter','luegg.directives', 'ngSanitize','angular-smilies']);

angular.module('chat').controller('ChatCtrl', function( $scope, $timeout ){
    $scope.items = [
        { username: 'system', content : 'welcome! :)' }
    ];

    $scope.submitName = function(){
        $scope.username = $scope.name;
    };


    $scope.submitMessage = function(){
        var newItem = { username: $scope.username, content: $scope.message};
        top.postMessage( newItem , '*');
        $scope.message = null;
    };



    window.addEventListener("message", function(e){
        $timeout(function(){
            $scope.items.push(e.data);
        },0)

    }, false);
});


