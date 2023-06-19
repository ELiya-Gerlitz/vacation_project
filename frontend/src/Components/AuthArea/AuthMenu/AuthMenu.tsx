import { NavLink } from "react-router-dom";
import "./AuthMenu.css";
import UserModel from "../../../Models/UserModel";
import { useEffect, useState } from "react";
import { AuthStore } from "../../../Redux/AuthState";

function AuthMenu(): JSX.Element {
 const [user, setUser]=useState<UserModel>()

    useEffect(()=>{
        setUser(AuthStore.getState().user)

        const unsubscribe = AuthStore.subscribe(() =>
         setUser(AuthStore.getState().user)
    )
        return ()=> unsubscribe()
    },[])
  
    return (
        <div className="AuthMenu top-header-right">
            {!user && <>
            <span>Hello Guest </span>
            &nbsp; &nbsp;
            <NavLink to={"/auth/login"}>  Login &nbsp; / </NavLink> &nbsp;
            <NavLink to={"/auth/register"}>Register </NavLink>    
            </>}

            {user && <>
                <span>Hello {user.firstName} {user.lastName}</span> &nbsp;&nbsp;&nbsp;
                <NavLink to={"/logout"} > Logout</NavLink>
            </>}
        </div>
    );
}

export default AuthMenu;