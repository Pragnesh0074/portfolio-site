import './Header.css';

function Header() {
    return (
        <div className='flex flex-col md:flex-row justify-evenly pt-8 pb-2 ml-10 md:ml-0'>
            <div className="text-white text-base font-bold font-['Fira Code']">Pragnesh Vagadiya</div>
            <div className='navLinks flex flex-row mt-5 md:mt-0' >
                <h3 className="mx-0 md:mx-2" style={{color:'white'}}>Home</h3>
                <h3 className="mx-2" style={{color:'white'}}>Work</h3>
                <h3 className="mx-2" style={{color:'white'}}>About</h3>
                <h3 className="mx-2" style={{color:'white'}}>Contact</h3>
            </div>
        </div>
    );
}

export default Header;