import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
    return (
        <div>
            <div class="w-auto h-auto border border-gray-400"></div>
            <div className="heading  flex flex-row justify-evenly py-5">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <span className="text-white text-base font-medium font-['Fira Code']" style={{color:'white'}}>Pragnesh Vagadiya</span>
                    </div>
                    <div>
                        <span className="text-white text-base font-medium font-['Fira Code']" style={{color:'white'}}>Application and Web Developer</span>
                    </div>
                </div>
                <div class="mx-10 md:mx-0 w-auto h-auto flex-col justify-start items-start gap-3 inline-flex">
                    <div class="text-white text-2xl font-medium font-['Fira Code']">Media</div>
                    <div class="w-auto h-auto relative flex flex-row justify-between">
                        <InstagramIcon />
                        <div className='ml-5' />
                        <EmailIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}