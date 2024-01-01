import img from '../../assets/img3.png'

export default function InfoComp() {

    return (
        <div>
            <div className="flex flex-col mx-10 md:mx-20">
                <div className='flex flex-row' style={{alignItems: 'center'}}>
                    <div className="w-[175px] h-[75px] relative">
                        <div className="w-[174px] h-[42px] left-0 top-0 absolute justify-start items-start inline-flex">
                            <div className="text-purple-400 text-[32px] font-semibold font-['Fira Code']">/</div>
                            <div className="text-white text-[32px] font-semibold font-['Fira Code']">about-me</div>
                        </div>
                        <div className="left-0 top-[56px] absolute text-white text-base font-normal font-['Fira Code']">Who am i?</div>
                    </div>
                </div>
                <div className='mainBlock flex flex-col md:flex-row justify-between mt-10'>
                    <div className='rightSubBlock flex flex-col' style={{color:'white'}}>
                        <div className="w-auto max-w-[515px] text-gray-400 text-base font-normal font-['Fira Code'] leading-relaxed">Hello, i’m Pragnesh!<br/><br/>I’m a self-taught mobile application and web developer based in Rajkot, Gujrat, India. I can develop any type of responsive mobile application and websites from scratch and raise them into modern user-friendly web experiences. <br/><br/>Transforming my creativity and knowledge into a full fuctional product has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</div>
                    </div>
                    <div className='mt-10 md:mt-0'>
                        <img src={img} alt='Img Not Found' className='h-auto max-w-full'/>
                    </div>
                </div>
            </div>
        </div>
    );
}