import "./nav.scss"
import { useState, useRef, useEffect } from "react";
const Navbar = () =>{
    const [navOpen, setnavOpen] = useState(false)
    const myRef =useRef(0)

    useEffect(()=>{
        if(navOpen === true && window.innerWidth===480){
        myRef.current.style.display = "flex"
        myRef.current.style.flexDirection="column"
        }else if(navOpen === false && window.innerWidth===480){
        myRef.current.style.display = "none"
        }else if(navOpen === true && window.innerWidth > 480){
            myRef.current.style.display = "flex"
            
        }
    },[navOpen])
    const myStyle= ()=>{
        setnavOpen(prev => !prev)
    
    }


    return(
        <>
        <nav id="navbar">
            <a href="#" onClick={myStyle} id="toggle-link" >
                <span id="bar"></span>
                <span id="bar"></span>
                <span id="bar"></span>
            </a>
            <ul ref={myRef} > 
            <li id="about"><a href="">ABOUT</a></li>
            <li id="projects"><a href="">PROJECTS</a></li>
            <li id="skills"><a href="">SKILLS</a></li>
            <li id="contact"><a href="">CONTACT</a></li>
            </ul>
        </nav>

    
        </>
    )
};

export default Navbar;