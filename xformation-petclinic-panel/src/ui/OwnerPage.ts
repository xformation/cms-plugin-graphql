import init  from '../domain/owner/OwnerPage/OwnerApp';

class OwnerPage{
    static templateUrl = '/partials/owner.html';
    /** @ngInject */
    constructor(){
        init();
    }
}

export {OwnerPage};