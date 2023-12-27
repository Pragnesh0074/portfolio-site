import Header from "../Components/Header";
import MainComp from "../Components/HomePage/MainComp";
import { SkillsComp } from "../Components/HomePage/SkillsComp";
import WorkComp from "../Components/HomePage/WorkComp";
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <Header />
            <div className="mt-20"/>
            <MainComp />
            <div className="mt-20"/>
            <WorkComp />
            <div className="mt-20"/>
            <SkillsComp />
        </div>
    );
}

export default HomePage;