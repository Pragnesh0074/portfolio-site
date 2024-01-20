import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export  function ContactComp() {

    return (
        <div className="flex flex-col md:mx-20">
            <div className='flex flex-row mx-10 md:mx-0' style={{alignItems: 'center'}}>
                <span className="text-white text-[32px] font-medium font-['Fira Code']">#contacts</span>
                <div style={{ width: "450px", backgroundColor: "#6F38C5", height: "3px" }} className='ml-5 mr-20' />
            </div>
            <div className='mainBlock mt-10 flex flex-col md:flex-row justify-between mx-10 md:mx-0'>
                <div className='leftSubBlock flex flex-col' style={{color:'white'}}>
                    <div class="w-auto text-gray-400 text-base font-medium font-['Fira Code']">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</div>
                </div>
                <div>
                <div className="mt-10 md:mt-0 w-auto h-auto p-4 border border-gray-400 flex-col justify-start items-start gap-4 inline-flex">
                    <div className="text-white text-base font-semibold font-['Fira Code']">Message me here</div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="justify-start items-center gap-[5px] inline-flex">
                                <div className="w-8 h-8 relative">
                                    <LocalPhoneIcon />
                                </div>
                                <div className="text-gray-400 text-base font-normal font-['Fira Code']">+91 9624720074</div>
                            </div>
                            <div className="justify-start items-center gap-[5px] inline-flex">
                                <div className="w-8 h-8 relative">
                                    <InstagramIcon />
                                </div>
                                <div className="text-gray-400 text-base font-normal font-['Fira Code']">@pragnesh_308 - personal</div>
                            </div>
                            <div className="justify-start items-center gap-[5px] inline-flex">
                                <div className="w-8 h-8 relative">
                                    <InstagramIcon />
                                </div>
                                <div className="text-gray-400 text-base font-normal font-['Fira Code']">@codedemon.pv - work</div>
                            </div>
                            <div className="justify-start items-center gap-[5px] inline-flex">
                                <div className="w-8 h-8 relative">
                                    <EmailIcon />
                                </div>
                                <div className="text-gray-400 text-base font-normal font-['Fira Code'] ">PragneshVagadiya0074 @gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}