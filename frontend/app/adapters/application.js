import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://homestead.app',
    namespace: 'api'
});
