import { WorkCard } from '../WorkCard';
import img1 from '../../assets/foodhub_img_1.jpg'
import img2 from '../../assets/ri_img_1.png'
import img3 from '../../assets/da_img_1.jpg'
import img4 from '../../assets/vastu_compass_img_1.jpg'
import img5 from '../../assets/workImg5.png'
import img6 from '../../assets/ms_img_1.jpg'
import { useNavigate } from "react-router-dom";

export default function CompleteWorkComp() {

    let navigate = useNavigate();
    let contactPath = "/project";

    const fh_imgs = ['foodhub_img_1.jpg','foodhub_img_2.jpg']
    const ri_imgs = ['ri_img_1.png','ri_img_2.jpg']
    const da_imgs = ['da_img_1.jpg','da_img_2.jpg']
    const vc_imgs = ['vastu_compass_img_1.jpg']
    const pf_imgs = ['workImg5.png']
    const ms_imgs = ['ms_img_1.jpg','ms_img_2.jpg']

    const fh_desc = "A food delivery app is a type of software that connects consumers with local restaurants, grocery stores, and convenience stores. The apps allow customers to order food and have it delivered to their doorstep."
    const ri_desc = "Table booking app is an elegant mobile application that allows users to book a restaurant table online. Users can search for a nearby restaurant for breakfast, lunch, dinner, or just for a cup of coffee."
    const da_desc = "An e-commerce website that allows people to buy and sell desk article products and over the internet."
    const vc_desc = "The Vastu Compass by AppliedVastu app is designed to facilitate accurate measurement of directions based on Vastu Shastra principles."
    const pf_desc = "A portfolio website where you can see my all work, achievements, skills, and experiences."
    const ms_desc = "A mobile application use for charity work and woman wellfair. By application provide digital platform for charity orgnization and homeworking womans."

    const fhTechs = ['Android', 'Java','XD']
    const riTechs = ['Flutter', 'Dart', 'Figma']
    const daTechs = ['Html', 'Bootstrap', 'Js', 'Figma']
    const vcTechs = ['Flutter', 'Dart', 'Figma']
    const pfTechs = ['React.Js', 'Tailwind', 'Figma']
    const msTechs = ['Android', 'Firebase', 'Figma']
    
    function clickFun(name, imgs, desc, techs) {
        navigate(contactPath, {
            state: {
                name : name,
                imgs : imgs,
                desc : desc,
                techs : techs
            }
        });
    }

    return(
        <div>
            <div className="flex flex-col mx-10 md:mx-20">
                <div className='flex flex-row justify-between' style={{alignItems: 'center'}}>
                    <span className="text-white text-[32px] font-medium font-['Fira Code']">#Projects</span>
                    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                    <span className="text-white text-base font-medium font-['Fira Code']">View All</span>
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-10'>
                    <WorkCard src={img1} heading='Food Ordering App' techs={fhTechs}  detail='Online Application For Food Ordering' clickFun={() => {clickFun('FoodHub', fh_imgs , fh_desc, fhTechs)}}/>
                    <div className='mt-10 md:ml-10' />
                    <WorkCard src={img2} heading='Restaurant Table Booking App' techs={riTechs} detail='Online Application For Restaurant Table Booking' clickFun={() => {clickFun('ReservIt', ri_imgs, ri_desc, riTechs)}}/>
                    <div className='mt-10 md:ml-10' />
                    <WorkCard src={img3} heading='Desk Article Website' techs={daTechs} detail='Online Website For Selling Desk Articles' clickFun={() => {clickFun('Desk Articles', da_imgs, da_desc, daTechs)}}/>
                </div>
                <div className='flex flex-col md:flex-row justify-between mt-10'>
                    <WorkCard src={img4} heading='Vastu Compass App' techs={vcTechs}  detail='Mobile Application For Vastu Sastra' clickFun={() => {clickFun('Vastu Compass App', vc_imgs, vc_desc, vcTechs)}}/>
                    <div className='mt-10 md:ml-10' />
                    <WorkCard src={img5} heading='Portfolio Website' techs={pfTechs}  detail='You are using it...' clickFun={() => {clickFun('Code Demon Portfolio', pf_imgs, pf_desc, pfTechs)}}/>
                    <div className='mt-10 md:ml-10' />
                    <WorkCard src={img6} heading='MeSakshama' techs={msTechs}  detail='Online Application For Charity Org. And Woman Wellfair' clickFun={() => {clickFun('MeSakshama', ms_imgs, ms_desc, msTechs)}}/>
                </div>
            </div>
        </div>
    );
}