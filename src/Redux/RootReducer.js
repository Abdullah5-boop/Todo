import { combineReducers } from "redux";
import InputReducer from "./InputSlide/InputReducer";
//  const rootReducer=combineReducers({
//     counter:counterReducer,
//     dynamicCounter:dynamicReduce
// })
const rootReducer = combineReducers({
    InputSlide: InputReducer
})
export default rootReducer