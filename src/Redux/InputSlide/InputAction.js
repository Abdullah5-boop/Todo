import { colorToggole, DataCapture, deleteTodo, Inputdelete, InputEnter, loadedData, statusTogolling, UpdateAll } from "./InpurtActionType"

export const InputEnterType = (value) => {

    return {
        type: InputEnter,
        payload: value,
        status: false
    }
}
export const InputDeleteType = (id) => {
    return {
        type: Inputdelete,
        Payload: id
    }
}
export const colorToggoleType = (id, color) => {
    return {
        type: colorToggole,
        payload: id,
        color: color,
    }
}

export const statusTogollingType = (id, value) => {
    return {
        type: statusTogolling,
        payload: id,
        value: value
    }
}
export const DataCaptureType = (value) => {
    return {
        type: DataCapture,
        payload: value
    }
}
export const loadedDataType = (value) => {
    return {
        type: loadedData,
        payload: value
    }
}
export const UpdateAllType = () => {
    return {
        type: UpdateAll
    }
}
export const deleteTodotype = (id) => {
    return {
        type: deleteTodo,
        payload: id
    }
}