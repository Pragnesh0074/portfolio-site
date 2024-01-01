import InfoComp from "../Components/AboutPage/InfoComp";
import { SkillCard } from "../Components/SkillCard";



export default function AboutPage() {

    const langs = ['C','C++','Java','Python','Dart',]
    const dbs = ['Sql','MySql','Sqlite','Mongo']
    const other = ['EJS','SCSS']
    const tools = ['VSCode', 'Figma','XD','Android Studio','Git']
    const fws = ['React','Bootstrape','TailWind','Flutter']

    return (
        <div>
            <InfoComp />
            <div className="flex flex-col mt-20 mx-10 md:mx-20">
                <div className="w-auto h-auto justify-start items-start inline-flex">
                    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
                    <div className="text-white text-[32px] font-medium font-['Fira Code']">skills</div>
                </div>
                <div className="flex flex-col md:flex-row mt-10">
                    <SkillCard type='Languages' names={langs} />
                    <div className="ml-5 mt-10 md:mt-0" />
                    <SkillCard type='Databases' names={dbs}/>
                    <div className="ml-5 mt-10 md:mt-0" />
                    <SkillCard type='Other' names={other}/>
                    <div className="ml-5 mt-10 md:mt-0" />
                    <SkillCard type='Tools' names={tools}/>
                    <div className="ml-5 mt-10 md:mt-0" />
                    <SkillCard type='Frameworks' names={fws}/>
                </div>
                <div className="w-auto h-auto justify-start items-start inline-flex mt-20">
                    <div className="text-purple-400 text-[32px] font-medium font-['Fira Code']">#</div>
                    <div className="text-white text-[32px] font-medium font-['Fira Code']">my-fun-fucts</div>
                </div>
                <div className="flex flex-col mt-10">
                    <div className="flex flex-row">
                        {factBox("I like winter more than summer")}
                        <div className="mr-5" />
                        {factBox("I like to play video games")}
                    </div>
                    <div className="flex flex-row mt-5">
                        {factBox("I am still in collage")}
                        <div className="mr-5" />
                        {factBox("I like to eat pizza")}
                    </div>
                </div>
            </div>
        </div>
    );
}

function factBox(fact) {
    return <div className="w-auto h-auto p-2 border border-gray-400 justify-start items-start gap-2.5 inline-flex">
        <div className="text-gray-400 text-base font-normal font-['Fira Code']">{fact}</div>
    </div>
}