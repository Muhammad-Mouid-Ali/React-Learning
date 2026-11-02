import myPic from '../assets/myPic.jpeg'
import { MdEmail } from "react-icons/md";

function Info(){
    return (
        <>
            <img src={myPic} alt="" className='card-img'/>
            <div>
                <h1 className='card-name'>Muhammad Mouid Ali</h1>
                <h3 className='card-title'>Junior Software Developer</h3>
                <p className='card-website'><a href="">m.mouidali.com</a></p>
            </div>
            <div className='btn-container'>
            <button className='email-btn'>
                <MdEmail /> Email
            </button>
            </div>
        </>
    )
}

export default Info