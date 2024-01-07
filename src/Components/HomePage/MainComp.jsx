import { FlatButton } from '../FlatButton';
import img1 from '../../assets/img1.png';
import { useNavigate } from "react-router-dom";


function MainComp() {

    let navigate = useNavigate();
    let contactPath = "/contact"; 
    
    function clickFun() {
        navigate(contactPath);
    }

    return (
        <div className='mx-10 md:ml-0 flex flex-col md:flex-row justify-center'>
            <div className='leftSubBlock flex flex-col' style={{color:'white'}}>
                <p className="[font-family:'Fira_Code-SemiBold',Helvetica] font-semibold text-transparent text-[32px]">
                    <span className="text-[#ffffff]">Pragnesh is a </span>
                    <span className="text-[#c778dd]">mobile application developer</span>
                    <span className="text-[#ffffff]"> and </span>
                    <span className="text-[#c778dd]"><br/>full-stack developer</span>
                </p>
                <p className="mt-5 [font-family:'Fira_Code-Regular',Helvetica] font-normal text-gray text-[16px]">
                    <span>
                        He crafts responsive websites where technologies meet creativity
                    </span>
                </p>
                <div className='mt-10'>
                    <FlatButton stateProp="default" text="Contact me!!" type="primary" clickFun={clickFun} />
                </div>
            </div>
            <div className='mt-10 md:mt-0'>
                <img src={img1} alt='Img Not Found' className='h-auto max-w-full'/>
            </div>
        </div>
    );
}

export default MainComp;