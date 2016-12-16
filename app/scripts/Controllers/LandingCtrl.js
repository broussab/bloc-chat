(function() {
     function LandingCtrl() {
        this.heroTitle = "Let's Taco 'bout It!";
     }
 
     angular
         .module('blocChat')
         .controller('LandingCtrl', LandingCtrl);
 })();