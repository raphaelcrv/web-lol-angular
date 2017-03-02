(function() {
  'use strict';

  angular
    .module('webLol')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
