import img from '../../assets/img2.png'
import { SkillCard } from '../SkillCard';

export  function SkillsComp() {

    const langs = ['C','C++','Java','Python','Dart',]
    const dbs = ['Sql','MySql','Sqlite','Mongo']
    const other = ['EJS','SCSS']
    const tools = ['VSCode', 'Figma','XD','Android Studio','Git']
    const fws = ['React','Bootstrape','TailWind','Flutter']

    return (
        <div className="flex flex-col mx-10 md:mx-20 ">
            <div className='flex flex-row' style={{alignItems: 'center'}}>
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#skills</span>
                <div style={{ width: "450px", backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
            </div>
            <div className='mainBlock flex flex-col mt-10 md:flex-row mt-10 justify-between'>
                <div>
                    <img src={img} alt='Img Not Found' className='h-auto max-w-full'/>
                </div>
                <div className='leftSubBlock' style={{color:'white'}}>
                    <div className='flex flex-col mt-10 md:flex-row md:mt-0'>
                        <div className='flex flex-col'>
                            <SkillCard type='Languages' names={langs} />
                        </div>
                        <div className='flex flex-col md:ml-5 mt-10 md:mt-0'>
                            <SkillCard type='Databases' names={dbs}/>
                            <div className='mt-5' />
                            <SkillCard type='Other' names={other}/>
                        </div>
                        <div className='flex flex-col md:mx-5 mt-10 md:mt-0'>
                            <SkillCard type='Tools' names={tools}/>
                            <div className='mt-5' />
                            <SkillCard type='Frameworks' names={fws}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}