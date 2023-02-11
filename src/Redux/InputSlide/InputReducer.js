import { colorToggole, DataCapture, Inputdelete, InputEnter, loadedData, statusTogolling, UpdateAll } from "./InpurtActionType";

const initialState = [
    { id: 1, Content: "My name is Abdullah ", color: 'red', status: false },
    { id: 2, Content: "My name is shakib ", color: 'red', status: true }
]
const initialStatew = [


]
function InputReducer(state = initialStatew, action) {
    switch (action.type) {
        case InputEnter: return [...state, { id: state.length + 1, Content: action.payload, color: 'green', }]
        case colorToggole: return state.map(e => { if (e.id === action.payload) { return { ...e, color: action.color } } else return e })
        case statusTogolling: return state.map(e => { if (e.id === action.payload) { return { ...e, status: !e.status } } else { return e } })
        case loadedData: return [...initialStatew, ...action.payload]
        case UpdateAll: return state;
        case Inputdelete: return state

        default: return state;

    }

}
export default InputReducer;