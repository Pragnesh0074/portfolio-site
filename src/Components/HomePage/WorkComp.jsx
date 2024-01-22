import { WorkCard } from '../WorkCard';
import img1 from '../../assets/foodhub_img_1.jpg'
import img2 from '../../assets/ri_img_1.png'
import img3 from '../../assets/da_img_1.jpg'
import { useNavigate } from "react-router-dom";

export default function WorkComp() {

    let navigate = useNavigate();
    let contactPath = "/project";
    let viewAllPath = "/work";

    const fh_imgs = ['foodhub_img_1.jpg','foodhub_img_2.jpg']
    const ri_imgs = ['ri_img_1.png','ri_img_2.jpg']
    const da_imgs = ['da_img_1.jpg','da_img_2.jpg']

    const fh_desc = "A food delivery app is a type of software that connects consumers with local restaurants, grocery stores, and convenience stores. The apps allow customers to order food and have it delivered to their doorstep."
    const ri_desc = "Table booking app is an elegant mobile application that allows users to book a restaurant table online. Users can search for a nearby restaurant for breakfast, lunch, dinner, or just for a cup of coffee."
    const da_desc = "An e-commerce website that allows people to buy and sell desk article products and over the internet."

    const fhTechs = ['Android', 'Java','XD']
    const riTechs = ['Flutter', 'Dart', 'Figma']
    const daTechs = ['Html', 'Bootstrap', 'Js', 'Figma']
    
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

    function viewAllFun() {
        navigate(viewAllPath);
    }

    
    return (
        <div className="flex flex-col justify-center md:mx-20">
            <div className='flex flex-row justify-between mx-5 md:ml-0' style={{alignItems: 'center'}}>
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#Projects</span>
                <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                <span className="text-white text-base font-medium font-['Fira Code']" onClick={viewAllFun}>View All</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between mt-10 mx-5 md:mx-0'>
                <WorkCard src={img1} heading='FoodHub' techs={fhTechs}  detail='Online Application For Food Ordering' clickFun={() => {clickFun('FoodHub', fh_imgs , fh_desc, fhTechs)}}/>
                <div className='mt-10 md:ml-10' />
                <WorkCard src={img2} heading='ReservIt' techs={riTechs} detail='Online Application For Restaurant Table Booking' clickFun={() => {clickFun('ReservIt', ri_imgs, ri_desc, riTechs)}}/>
                <div className='mt-10 md:ml-10' />
                <WorkCard src={img3} heading='Desk Article Website' techs={daTechs} detail='Online Website For Selling Desk Articles' clickFun={() => {clickFun('Desk Articles', da_imgs, da_desc, daTechs)}}/>
            </div>
        </div>
    );
}