import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { InputEnter } from '../Redux/InputSlide/InpurtActionType';
import { DataCaptureType, InputEnterType, UpdateAllType } from '../Redux/InputSlide/InputAction';
import LisTpage from './LisTpage';
import './page.css'
const Page = ({ state, InputTxt, LoadData, AllComplete }) => {



    const [txt, settxt] = useState('')
    const UploadToDo = (e) => {
        e.preventDefault();
        InputTxt(txt);
        document.getElementById('name').value = ''
        console.log(state)
    }
    useEffect(() => {

        LoadData()

    }, [])
    return (
        <div className='  shadow-lg mt-20 '>
            <h1 className='lg:text-5xl text-2xl mb-10 font-bold'>Add your work </h1>
            <section className='maincontainer'>
                <div className="w-full lg:max-w-[60vw] h-screen m-auto ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4 flex">
                            <input id='name' onChange={(e) => settxt(e.target.value)} className="shadow appearance-none border rounded w-full h-12 py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="write your work" />
                            <button onClick={(e) => UploadToDo(e)} className='p-2 border'>add</button>
                        </div>
                        {
                            state.InputSlide.map((e, index) => <LisTpage data={e} key={index}></LisTpage>)
                        }
                        {/* <LisTpage ></LisTpage> */}
                        <section className='btnlist flex lg:justify-end justify-start'>
                            <button className='mx-2 font-bold'  onClick={(e) => {
                            
                                AllComplete()}} >All complete </button> 
                           
                        </section>
                    </form>
                </div>
            </section>

        </div>
    );
};

// export default Page;
const mapDispatchToProps = (dispatch) => {
    return {
        InputTxt: (text) => dispatch(InputEnterType(text)),
        LoadData: () => dispatch(DataCaptureType()),
        AllComplete: () => dispatch(UpdateAllType())
    }
}
const mapStateToProps = (State) => {
    return { state: State }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);