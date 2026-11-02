import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer()
{
    return(
        <>
            <footer className="card-footer">
                <a href=""><FaTwitterSquare /></a>
                <a href=""><FaSquareFacebook /></a>
                <a href=""><FaInstagramSquare /></a>
                <a href=""><FaLinkedin /></a>
                <a href=""><FaSquareGithub /></a>
            </footer>
        </>
    )
}
export default Footer