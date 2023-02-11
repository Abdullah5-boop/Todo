import React, { useState } from 'react';
import { connect } from 'react-redux';
import { colorToggoleType, DataCaptureType, deleteTodotype, statusTogollingType } from '../Redux/InputSlide/InputAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'


const LisTpage = ({ data, State, Colordispatch, statusDispatch, deleteDispatch,LoadData }) => {
    let red = "bg-red-500"
    let green = "bg-green-500"
    let yellow = "bg-yellow-500"
    const [redstate, setredstate] = useState(true)
    const [greenstate, setgreenstate] = useState(true)
    const [yellowstate, setyellowstate] = useState(true)

    const toggoleRed = (id, color) => {
        if (redstate) {

            Colordispatch(id, 'red')
        }


    }
    const toggolegreen = (id, color) => {
        if (greenstate) {

            Colordispatch(id, 'green')
        }
    }
    const toggolyellow = (id, color) => {
        if (yellowstate) {
            Colordispatch(id, 'yellow')
        }
    }

    const HnadleDone = (id, status) => {
        console.log(status)
        statusDispatch(id, !status)
    }

    const deleteTodo = (id) => {
        deleteDispatch(id)
        LoadData()

    }
    return (
        <div>
            <div className='flex flex-col items-start '>
                <div className='row py-5 lg:flex items-start justify-between'>
                    <div className='flex items-center '>
                        <div className='circle inline-block flex justify-center items-center contentContainer'
                            onClick={() => HnadleDone(data.id, data.status)}
                        >

                            <FontAwesomeIcon className={` check ${data.status ? "bg-green-500" : "hidden"} `} icon={faCheck} />
                        </div>
                        <h1 className='text-xl mx-5 '>{data.Content} </h1>
                    </div>
                    <div className='flex lg:justify-around justify-end w-full lg:w-1/6 items-center py-1'>
                        <div onClick={() => {
                            setgreenstate(p => !p)
                            toggolegreen(data.id, data.color)
                        }} className={`scircle ${data.color === 'green' ? "bg-green-400" : ""}`}></div>
                        <div onClick={() => {
                            setyellowstate(p => !p)
                            toggolyellow(data.id, data.color)
                        }} className={`scircle ${data.color === 'yellow' ? "bg-yellow-400" : ""}`}></div>
                        <div
                            onClick={() => {
                                setredstate(p => !p)
                                toggoleRed(data.id, data.color)
                            }} className={`scircle ${data.color === 'red' ? "bg-red-500" : ""}`}>

                        </div>
                        <div className={`trask `}>
                            <FontAwesomeIcon
                                onClick={() => deleteTodo(data.id)}
                                className={` taskicon`} icon={faXmark} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        State: state
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        Colordispatch: (id, color) => dispatch(colorToggoleType(id, color)),
        statusDispatch: (id, value) => dispatch(statusTogollingType(id, value)),
        deleteDispatch: (id) => dispatch(deleteTodotype(id)),
        LoadData: () => dispatch(DataCaptureType()),
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(LisTpage)