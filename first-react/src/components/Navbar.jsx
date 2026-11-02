import reactLogo from '../assets/react.svg'

export default function Navbar()
{
    return(
        <header className='Header'>
            <nav className="Navbar">
                <img src={reactLogo} alt="" width="40" className='Logo'/>
                <p className='title'>ReactFacts</p>
            </nav>
        </header>
    )
}