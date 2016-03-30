/**
 * Created by odyssefs on 24.03.16.
 */
angular.module('ContactsApp')
    .factory('Contact', function($resource){
       return $resource('/api/contact/:id', {id: '@id'},{
           'update' :{method:'PUT'}
       })
    });