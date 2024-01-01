import { WorkCard } from '../WorkCard';
import img1 from '../../assets/homeWorkImg1.jpg'
import img2 from '../../assets/homeWorkImg2.png'
import img3 from '../../assets/homeWorkImg3.jpg'

export default function WorkComp() {
    const card1Techs = ['Android', 'Java','XD']
    const card2Techs = ['Flutter', 'Dart', 'Figma']
    const card3Techs = ['Html', 'Bootstrap', 'Js', 'Figma']
    return (
        <div className="flex flex-col justify-center md:mx-20">
            <div className='flex flex-row justify-between mx-5 md:ml-0' style={{alignItems: 'center'}}>
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#Projects</span>
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                <span className="text-white text-base font-medium font-['Fira Code']">View All</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-10 mx-5 md:mx-0'>
                <WorkCard src={img1} heading='Food Ordering App' techs={card1Techs}  detail='Online Application For Food Ordering'/>
                <div className='mt-10 md:ml-10' />
                <WorkCard src={img2} heading='Restaurant Table Booking App' techs={card2Techs} detail='Online Application For Restaurant Table Booking'/>
                <div className='mt-10 md:ml-10' />
                <WorkCard src={img3} heading='Desk Article Website' techs={card3Techs} detail='Online Website For Selling Desk Articles'/>
            </div>
        </div>
    );
}