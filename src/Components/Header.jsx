import './Header.css';

function Header() {
    return (
        <div className='heading flex flex-row justify-between pt-8 pb-2'>
            <div className="text-white text-base font-bold font-['Fira Code']">Pragnesh Vagadiya</div>
            <div className='navLinks flex flex-row'>
                <h3 className="mx-2">Home</h3>
                <h3 className="mx-2">Work</h3>
                <h3 className="mx-2">About</h3>
                <h3 className="mx-2">Contact</h3>
            </div>
        </div>
    );
}

export default Header;