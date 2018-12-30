import {
    ROLEPOST_REQUEST,
    ROLEPOST_SUCCESS,
    ROLEPOST_FAILURE,

    ROLEUPDATE_REQUEST,
    ROLEUPDATE_SUCCESS,
    ROLEUPDATE_FAILURE,
    
    ROLEDELETE_REQUEST,
    ROLEDELETE_SUCCESS,
    ROLEDELETE_FAILURE,
    FETCH_POST

} from './constant'

const initialState = ({
    requesting: false,
    success: false,
    error: null,
    shouldRedirect: false,
    isRolePosted: false,
    isRoleUpdated: false,
    isRoleDeleted: false
})

function roleReducer(state = initialState, action){
    switch(action.type){

        case ROLEPOST_REQUEST:
        let rolepostreq = {
            requesting: true,
            success: false,
            error: null,
            isRolePosted:false,
        };
        return rolepostreq

        case ROLEPOST_SUCCESS:
        let rolepostsucc = {
            requesting: false,
            success: true,
            error: null,
            isRolePosted:true,
        };
        return rolepostsucc;
    
        case ROLEPOST_FAILURE:
            let rolepostfailed = {
                requesting: false,
                success: false,
                error: action.error.message,
                isRolePosted:false,
            };
            return rolepostfailed

        case ROLEUPDATE_REQUEST:
        let roleupdatereq = {
            requesting: true,
            success: false,
            error: null,
            isRoleUpdated:false,
        };
        return roleupdatereq

        case ROLEUPDATE_SUCCESS:
        return[
            ...state.filter(data => data.id !== action.data.id),
            Object.assign({}, action.data)]
        
    
        case ROLEUPDATE_FAILURE:
        let roleupdatefailed = {
            requesting: false,
            success: false,
            error: action.error.message,
            isRoleUpdated:false,
        };
        return roleupdatefailed

        case ROLEDELETE_REQUEST:
        let roledeletereq = {
            requesting: true,
            success: false,
            error: null,
            isRoleDeleted:false,
        };
        return roledeletereq;

        case ROLEDELETE_SUCCESS:
        let roledeletesucc= {
            requesting: false,
            success: true,
            error: null,
            isRoleDeleted:true,
        };
        return roledeletesucc;

        case ROLEDELETE_FAILURE:
        let roledeletefailed = {
            requesting: false,
            success: false, 
            error: action.error.message,
            isRoleDeleted:false,
        };
        return roledeletefailed;

        case FETCH_POST:
        let fetchpost = {
            requesting: false,
            fetched: true
        };
        return fetchpost;

        default:
            return state;

    }
}

export default roleReducer;