'use strict';

angular.module('terminator')
    .controller('PlayListController', [
        '$timeout',
        'PlayListService',
        function ($timeout, PlayListService) {
            var self = this;
            self.playLists = PlayListService.get();

            self.addNewPlayList = function () {
                self.playLists = PlayListService.add();
            };

            self.editPlayList = function (item) {
                console.log(item);
                self.currentPlayList = item;
                console.log(self.currentPlayList);
            };

            self.addStep = function () {
                PlayListService.addStep(self.currentPlayList);
                PlayListService.save(self.playLists);
            };

            self.callAPI = function (item) {
                console.log('callAPI');
                console.log(item);
                PlayListService.callAPI(item);
            };

            self.runSteps = function (playList) {
                angular.forEach(playList.steps, function (value, key) {
                    $timeout(function () {
                        PlayListService.callAPI(value.hand);
                    }, 500 * value.order, true, value.hand);
                });
            };

            self.save = function () {
                PlayListService.save(self.playLists);
            };
        }]);
