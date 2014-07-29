app.controller('MainController', function ($scope, Poller) {
    $scope.Streams = Poller.data;
});

app.run(function (Poller) { });

app.factory('Poller', function ($http, $timeout) {
    var data = { response: {}, calls: 0 };
    var poller = function () {
        $http.jsonp('https://api.twitch.tv/kraken/search/streams?q=%22guild%20wars%202%22&callback=JSON_CALLBACK').then(function (r) {
            data.response = r.data;
            data.calls++;
            $timeout(poller, 15000);
        });
    };
    poller();
    return {
        data: data
    };
});