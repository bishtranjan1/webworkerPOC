(function() {
  'use strict';

  angular
    .module('webworkerPoc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$scope) {
    var vm = this;
    var w; 

   function startWorker() {
    if(typeof(Worker) !== "undefined") {
            if(typeof(w) == "undefined") {
                w = new Worker("app/main/iterateWorker.js");
            }
            w.onmessage = function(event) {
                vm.webworkerData = event.data;
                $scope.$apply();
            };
        } else {
                vm.webworkerData = "web worker not supported"
         }
    }

    vm.stopWorker=function() { 
        w.terminate();
        w = undefined;
    }



   vm.getData=function(type){
     
    if(type==="worker"){
     startWorker();
    }
    else{
        var result=0,j,i;
       for(i=0;i<100000;i++){
            for(j=0;j<1000;j++){


            
                      result+=Math.floor((Math.random() * 10));
                  }


          }
         vm.nonwebworkerData = result;
    }
   }

   
  }
})();
