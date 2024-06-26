import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";


export default function ProjectPage() {

    const params = useLocation();
    const [mainImg, setMainImg] = useState(params.state.imgs[0]);


    return (
        <div className="mx-20">
            <div className='flex flex-row justify-between' style={{alignItems: 'center'}}>
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='mr-10' />
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#{params.state.name}</span>
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='ml-10' />
            </div>
            <div className="mt-10">
                <div className="flex justify-center">
                    <img src={require('../assets/'+mainImg)} alt='' className='h-auto md:h-3/5 max-w-full md:w-3/5 rounded-xl'/>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <div className="flex flex-row align-item-center">
                    {
                        params.state.imgs.map((item, index) => {
                            if(index % 2 === 1) {
                                return <img src={require('../assets/'+item)} alt='' className='max-h-20 max-w-20 md:max-h-48 md:max-w-48 rounded-xl flex ml-5' onClick={() => setMainImg(item)}/>
                            }
                            else {
                                return <img src={require('../assets/'+item)} alt='' className='max-h-20 max-w-20 md:max-h-48 md:max-w-48 rounded-xl flex' onClick={() => setMainImg(item)}/>
                            }
                        })
                    }
                </div>
            </div>
            <div className="mt-20 mx-0 md:mx-20">
                <div className="w-auto text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed">Desciption :- </div>
                <div className="w-auto text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed mt-5">{params.state.desc}</div>
                <div className="w-auto justify-start items-start gap-2 inline-flex md:flex mt-5 text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed">
                    Used Technologies :-
                </div>
                <div className="w-auto justify-start items-start gap-2 inline-flex md:flex mt-5 text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed">
                    {
                        params.state.techs.map((item) => {
                            return <div className="text-base md:text-2xl text-gray-400 font-normal font-['Fira Code']">{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}