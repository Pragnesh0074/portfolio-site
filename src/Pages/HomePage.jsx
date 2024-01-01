import { AboutComp } from "../Components/HomePage/AboutComp";
import { ContactComp } from "../Components/HomePage/ContactComp";
import MainComp from "../Components/HomePage/MainComp";
import { SkillsComp } from "../Components/HomePage/SkillsComp";
import WorkComp from "../Components/HomePage/WorkComp";

function HomePage() {
    return (
        <div>
            <MainComp />
            <div className="mt-20"/>
            <WorkComp />
            <div className="mt-20"/>
            <SkillsComp />
            <div className="mt-20"/>
            <AboutComp />
            <div className="mt-20"/>
            <ContactComp />
        </div>
    );
}

export default HomePage;