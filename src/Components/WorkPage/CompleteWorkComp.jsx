import { WorkCard } from '../WorkCard';
import img1 from '../../assets/homeWorkImg1.jpg'
import img2 from '../../assets/homeWorkImg2.png'
import img3 from '../../assets/homeWorkImg3.jpg'
import img4 from '../../assets/workImg4.jpg'
import img5 from '../../assets/workImg5.png'

export default function CompleteWorkComp() {
    const card1Techs = ['Android', 'Java','XD']
    const card2Techs = ['Flutter', 'Dart', 'Figma']
    const card3Techs = ['Html', 'Bootstrap', 'Js', 'Figma']
    const card4Techs = ['Flutter', 'Dart', 'Figma']
    const card5Techs = ['React', 'Telwind' ,'Figma']

    return(
        <div>
            <div className="flex flex-col mx-10 md:mx-20">
                <div className='flex flex-row justify-between' style={{alignItems: 'center'}}>
                    <span className="text-white text-[32px] font-medium font-['Fira Code']">#Projects</span>
                    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                    <span className="text-white text-base font-medium font-['Fira Code']">View All</span>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row justify-between mt-10'>
                        <WorkCard src={img1} heading='Food Ordering App' techs={card1Techs}  detail='Online Application For Food Ordering'/>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between mt-10'>
                        <WorkCard src={img2} heading='Restaurant Table Booking App' techs={card2Techs} detail='Online Application For Restaurant Table Booking'/>
                        <div className='mt-10 md:ml-10' />
                        <WorkCard src={img3} heading='Desk Article Website' techs={card3Techs} detail='Online Website For Selling Desk Articles'/>
                        <div className='mt-10 md:ml-10' />
                        <WorkCard src={img4} heading='Vastu Compass App' techs={card4Techs}  detail='Mobile Application For Vastu Sastra'/>
                    </div>
                    <div className='flex flex-row justify-between mt-10'>
                        <WorkCard src={img5} heading='Portfolio Website' techs={card5Techs}  detail='You are using it...'/>
                    </div>
                </div>
            </div>
        </div>
    );
}