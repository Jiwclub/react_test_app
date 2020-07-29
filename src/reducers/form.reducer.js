import { FORM_ACTION_ADD, FORM_ACTION_UPD, FORM_ACTION_REM, FORM_ACTION_SET } from "../constants/formConstan"
const items = localStorage.getItem("form_item");
const initialState = JSON.parse(items) || [];

export default (state = initialState, { type, payload }) => {
    console.log('initialState', payload);
    switch (type) {
        case FORM_ACTION_ADD:
            localStorage.setItem("form_item", JSON.stringify([...state, payload]))
            return [...state, payload]
        case FORM_ACTION_UPD:
            state[payload.id] = { ...state[payload.id], ...payload }
            localStorage.setItem("form_item", JSON.stringify([...state]))
            return [...state]
        case FORM_ACTION_REM:
            state.splice(payload, 1)
            localStorage.setItem("form_item", JSON.stringify([...state]))
            return [...state]
        default:
            return state
    }
}
