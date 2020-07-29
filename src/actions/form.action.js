import { FORM_ACTION_ADD, FORM_ACTION_REM, FORM_ACTION_UPD, FORM_ACTION_SET } from "../constants/formConstan";

export const formSet = (payload) => ({
    type: FORM_ACTION_SET,
    payload
})

export const formAdd = (payload) => ({
    type: FORM_ACTION_ADD,
    payload
})

export const formUpd = (payload) => ({
    type: FORM_ACTION_UPD,
    payload
})

export const formRem = (payload) => ({
    type: FORM_ACTION_REM,
    payload
})

export const add = (payload) => {
    console.log('payload...', payload);
    return dispatch => {
        dispatch(formAdd(payload))
    }
}

export const update = (payload) => {
    return dispatch => {
        dispatch(formUpd(payload))
    }
}

export const remove = (payload) => {
    return dispatch => {
        dispatch(formRem(payload))
    }
}

export const setItems = (payload) => {
    console.log('setItems..', payload);
    return dispatch => {
        dispatch(formSet(payload))
    }
}