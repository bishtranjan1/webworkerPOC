(function() {
  'use strict';

  angular
    .module('webworkerPoc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
