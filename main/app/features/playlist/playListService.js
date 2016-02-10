'user strict';

angular.module('terminator')
    .factory('PlayListService', ['$http', 'PlayList', 'Step', 'ConfigService', function ($http, PlayList, Step, ConfigService) {

        var PlayListService = {
            get: _get,
            add: _add,
            save: _save,
            addStep: _addStep,
            callAPI: _callAPI
        };

        function _get() {
            var playlists = angular.fromJson(localStorage.playlists);
            if (!playlists) {
                playlists = [];
            }
            return playlists;
        }

        function _add() {
            var playlists = _get();
            playlists.push(PlayList.build('my PlayList ' + playlists.length));
            _save(playlists);
            return playlists;
        }

        function _save(playlists) {
            localStorage.playlists = angular.toJson(playlists);
        }

        function _addStep(playlist) {
            playlist.steps.push(Step.buildFromLastStep(playlist.steps.length+1, playlist.steps[playlist.steps.length-1].hand));
        }

        function _callAPI(hand) {
            var settings = ConfigService.get();
            var url = settings.url + '?';

            for (var finger in hand) {
                url += settings.handParams[finger] + '=' + hand[finger] + '&';
            }

            /*if (typeof(hand.thumb) !== 'undefined') {
                url += settings.handParams.thumb + '=' + hand.thumb + '&';
            }
            if (typeof(hand.index) !== 'undefined') {
                url += settings.handParams.index + '=' + hand.index + '&';
            }
            if (typeof(hand.major) !== 'undefined') {
                url += settings.handParams.major + '=' + hand.major + '&';
            }
            if (typeof(hand.ringFinger) !== 'undefined') {
                url += settings.handParams.ringFinger + '=' + hand.ringFinger + '&';
            }
            if (typeof(hand.auricular) !== 'undefined') {
                url += settings.handParams.auricular + '=' + hand.auricular;
            }*/

            $http.get(url)
                .then(function(response) {
                });
        }

        return PlayListService;
    }]);