
import React from 'react'
import styles from "./navbar.module.css";
import {useNavigate} from "react-router-dom"
import { Link  } from 'react-router-dom';
import {BiSearchAlt2} from "react-icons/bi"
import {BsCartCheckFill} from "react-icons/bs";

import Login from "../Login/Login"
const Navbar=()=>
{

    const navigate = useNavigate();
    const GoToHomePage = () => {
        navigate("/")
    }
    return (
        
            
            <div className={styles.navbar} style={{backgroundColor:"rgb(255,255,255)",position:"sticky", top:"0px",zIndex:"1"}}>
            <div className={styles.imageDiv}>
                <img style={{cursor:"pointer"}} onClick={GoToHomePage} src="data:image/png;base64,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" alt="" 
                />
            </div>
            <div className={styles.links1}>
                
                <a href='Categories' className={styles.mainLink}>Categories</a>
                <a href='Brands' className={styles.mainLink}>Brands</a>
                <Link to="/Luxe" className={styles.mainLink}>Luxe</Link>
                <a href='Nykaa Fashion' className={styles.mainLink}>Nykaa Fashion</a>
                <a href='Beauty Advice' className={styles.mainLink}>Beauty Advice</a>
                
            </div>
           
            <div className={styles.inputDiv}>
                <button className={styles.searchIcon}><BiSearchAlt2/></button>
                <input  className={styles.inputSection} type="text" placeholder='Search For Nykaa' />
                
            </div>

                 <div className={styles.links2}>
                    
                <Login/>

                </div>
                <div className={styles.links2Icons} >

                    <BsCartCheckFill style={{fontSize:"18px"
                    
                    }}/>
                  
                </div>
        </div>
        
    )
}
export default Navbar;