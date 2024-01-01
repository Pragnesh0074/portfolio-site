import CompleteWorkComp from "../Components/WorkPage/CompleteWorkComp";
import SmallProjectComp from "../Components/WorkPage/SmallProjectComp";


export default function WorkPage() {
    return (
        <div>
            <div className="w-[183px] h-[77px] relative mt-10 mx-10 md:mx-20">
                <div className="w-[174px] h-[42px] left-0 top-0 absolute justify-start items-start inline-flex">
                    <div className="text-purple-400 text-[32px] font-semibold font-['Fira Code']">/</div>
                    <div className="text-white text-[32px] font-semibold font-['Fira Code']">projects</div>
                </div>
                <div className="left-0 top-[56px] absolute text-white text-base font-normal font-['Fira Code']">List of my projects</div>
            </div>
            <div className="mt-20"/>
            <CompleteWorkComp />
            <div className="mt-20"/>
            <SmallProjectComp />
        </div>
    );
}