import React,{ useContext } from "react";
import { AuthContext } from "../AuthContext";


function Nav() {
    
    const authToken = useContext(AuthContext)
    
    return (
        <div className="navBar">
            { authToken[0] ? <p>Token: {authToken}</p> : ""}       
        </div>
    )

}
export default Nav;

