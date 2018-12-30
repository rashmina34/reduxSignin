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

export function RoleostRequest(data){
    return {
        type : ROLEPOST_REQUEST,
        data
    }
}

export function RolePostSuccess(role){
    return {
        type : ROLEPOST_SUCCESS,
        role

    }
}

export function RolePostFailure(error){
    return {
        type : ROLEPOST_FAILURE,
        error
    }
}

export function RoleUpdateRequest(data){
    return {
        type : ROLEUPDATE_REQUEST,
        data
    }
}

export function RoleUpdateSuccess(role){
    return {
        type : ROLEUPDATE_SUCCESS,
        role
    }
}

export function RoleUpdateFailure(error){
    return {
        type : ROLEUPDATE_FAILURE,
        error
    }
}

export function RoleDeleteRequest(data){
    return {
        type : ROLEDELETE_REQUEST,
        data
    }
}

export function RoleDeleteSuccess(role){
    return {
        type : ROLEDELETE_SUCCESS,
        role
    }
}

export function RoleDeleteFailure(error){
    return {
        type : ROLEDELETE_FAILURE,
        error
    }
}

export function fetchpost(posts){
    return {
        type : FETCH_POST,
        posts
    }
}