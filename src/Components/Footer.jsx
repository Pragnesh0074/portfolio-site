import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

export function Footer() {


    return (
        <div>
            <div class="w-auto h-auto border border-gray-400"></div>
            <div className="heading  flex flex-row justify-evenly py-5">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <span className="text-white text-base font-medium font-['Fira Code']" style={{color:'white'}}>Pragnesh Vagadiya</span>
                    </div>
                    <div className='mt-5'>
                        <span className="text-white text-base font-medium font-['Fira Code']" style={{color:'white'}}>Application and Web Developer</span>
                    </div>
                </div>
                <div class="mx-10 md:mx-0 w-auto h-auto flex-col justify-start items-start gap-3 inline-flex">
                    <div class="text-white text-2xl font-medium font-['Fira Code']">Media</div>
                    <div class="w-auto h-auto relative flex flex-row justify-between">
                        <Link to="https://www.instagram.com/codedemon.pv" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </Link>
                        <div className='ml-5' />
                        <div>
                            <a href="mailto:PragneshVagadiya0074@gmial.com">
                                <EmailIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}