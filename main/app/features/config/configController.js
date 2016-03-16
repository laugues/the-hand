'use strict';

angular.module('terminator')
    .controller('ConfigController', [
        'ConfigService',
        function (ConfigService) {
            var self = this;

            self.settings = ConfigService.get();

            self.saveSettings = function () {
                ConfigService.save(self.settings);
            }
        }]);
