import img from '../../assets/img3.png'
import { FlatButton } from '../../Components/FlatButton'

export  function AboutComp() {

    return (
        <div className="flex flex-col md:mx-20">
            <div className='flex flex-row mx-10 md:mx-0' style={{alignItems: 'center'}}>
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#about-me</span>
                <div style={{ width: "450px", backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
            </div>
            <div className='mainBlock flex flex-col md:flex-row justify-between mt-10 mx-10 md:mx-0'>
                <div className='rightSubBlock flex flex-col' style={{color:'white'}}>
                    <div className="w-auto text-gray-400 text-base font-normal font-['Fira Code'] leading-relaxed">Hello, i’m Pragnesh!<br/><br/>I’m a self-taught mobile application and web developer based in Rajkot, Gujrat, India. I can develop any type of responsive mobile application and websites from scratch and raise them into modern user-friendly web experiences. <br/><br/>Transforming my creativity and knowledge into a full fuctional product has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</div>
                    <div className="w-full h-auto mt-10 justify-start items-start gap-2.5 inline-flex">
                        <FlatButton stateProp="default" text="View" type="primary" />
                    </div>
                </div>
                <div className='mt-10 md:mt-0 md:mr-20'>
                    <img src={img} alt='Img Not Found' className='h-auto max-w-full'/>
                </div>
                
            </div>
        </div>
    );
}