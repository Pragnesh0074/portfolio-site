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
                <div>
                    <img src={require('../assets/'+mainImg)} alt='' className='h-auto max-w-full rounded-xl'/>
                </div>
            </div>
            <div className="mt-10 flex justify-center">
                <div className="flex flex-row">
                    {
                        params.state.imgs.map((item) => {
                            return <img src={require('../assets/'+item)} alt='' className='max-h-20 max-w-20 md:max-h-48 md:max-w-48 rounded-xl ml-5' onClick={() => setMainImg(item)}/>
                        })
                    }
                </div>
            </div>
            <div className="mt-20 heading">
                <div className="w-auto text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed">Desciption :- {params.state.desc}</div>
                <div className="self-stretch justify-start items-start gap-2 inline-flex mt-5">
                    <div className="w-auto text-gray-400 text-base md:text-2xl font-normal font-['Fira Code'] leading-relaxed">Used Technologies :- </div>
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