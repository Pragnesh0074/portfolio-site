import SmallProjectCard from "../SmallProjectCard";


export default function SmallProjectComp() {

    const p1 = ['Android','Java','XD']
    const p2 = ['Flutter','Dart','Figma']

    return (
        <div>
            <div className="flex flex-col mx-10 md:mx-20">
                <div className='flex flex-row' style={{alignItems: 'center'}}>
                    <span className="text-white text-[32px] font-medium font-['Fira Code']">#small-projects</span>
                    <div style={{ width: "450px", backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
                </div>
                <div className='flex flex-col md:flex-row justify-evenly mt-10'>
                    <div className="flex flex-col justify-between">
                        <SmallProjectCard name='QR Generator and Scanner' techs={p1} desc='Mobile application for qr generator and scanner for items management'/>
                        <div className="mt-10" />
                        <SmallProjectCard name='Whatsapp Clone' techs={p2} desc='Perfect Fully Functional Clone of Whatsapp'/>
                    </div>
                    <div className="flex flex-col justify-between mt-10 md:mt-0">
                        <SmallProjectCard name="Let's Explore" techs={p2} desc='Mobile application for traveller to find their directions and all nearby places and all information about it'/>
                    </div>
                </div>
            </div>
        </div>
    );
}