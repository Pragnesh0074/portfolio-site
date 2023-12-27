import img from '../../assets/img2.png'

export  function SkillsComp() {
    return (
        <div>
            <div className="heading  flex flex-col">
                <div className='flex flex-row' style={{alignItems: 'center'}}>
                    <span className="text-white text-[32px] font-medium font-['Fira Code']">#Skills</span>
                    <div style={{ width: "450px", backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                </div>
                <div className='mainBlock flex flex-row justify-center'>
                    <div>
                        <img src={img} alt='Img Not Found' className='h-auto max-w-full'/>
                    </div>
                    <div className='leftSubBlock flex flex-col' style={{color:'white'}}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}