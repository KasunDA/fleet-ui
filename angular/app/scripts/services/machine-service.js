'use strict';

/**
 * @ngdoc service
 * @name fleetuiApp.machineService
 * @description
 * # machineService
 * Service in the fleetuiApp.
 */
angular.module('fleetuiApp')
  .service('machineService', function machineService($resource) {
    return $resource('/api/v1/machines', {
      id: '@id'
    });
  });
