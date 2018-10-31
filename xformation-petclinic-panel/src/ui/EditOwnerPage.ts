import init  from '../domain/owner/UpdateOwnerPage/EditOwnerApp';

class EditOwnerPage{
    static templateUrl = '/partials/editowner.html';
    /** @ngInject */
    constructor(){
        init();
    }
}

export {EditOwnerPage};