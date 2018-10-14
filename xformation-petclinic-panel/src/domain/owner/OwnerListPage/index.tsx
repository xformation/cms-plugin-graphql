import {default as OwnerListPage} from './OwnerListPage';

import {_default} from 'grafana/app/core/core_module';
_default.directive('ownersList', [
    'reactDirective',
    (reactDirective:Function) => {
        return reactDirective(OwnerListPage, ['change', 'database', 'execute', 'query', 'request']);
    },
]);

