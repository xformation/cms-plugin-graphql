import {default as OwnerListPage} from './OwnerListPage';

var coreModule = require('grafana/app/core/core_module');
// import coreModule from 'grafana/app/core/core_module';
coreModule.directive('ownersList', [
    'reactDirective',
    (reactDirective:Function) => {
        return reactDirective(OwnerListPage, ['change', 'database', 'execute', 'query', 'request']);
    },
]);

