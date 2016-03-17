'user strict';


angular.module('terminator').component('config', {
    templateUrl:'app/common/components/configTemplate.html',
    controller:['ConfigService', ConfigController],
    bindings:{

    }
});

function ConfigController(ConfigService){
    var self = this;

    self.settings = ConfigService.get();

    self.saveSettings = function () {
        ConfigService.save(self.settings);
    }
}