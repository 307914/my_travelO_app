import { X } from "react-bootstrap-icons"
import './authmodal.css'
import { Login } from "../auth/login"
import { useAuth, useUserdata } from "../../context"
import { Signup } from "../auth/signup"
import { useEffect } from "react"
import { useNavigate } from "react-router"
export const AuthModal = () => {
    const { openform, authDispatch } = useAuth();

    const handleClick = () => {
        authDispatch({
            type: "LOGIN",
        })
    }

    const handlesignupclick = () => {
        authDispatch({
            type: "SIGNUP"
        })
    }
    const handleclosebtn = () => {
        authDispatch({
            type: "IS_AUTHOPEN"
        })
    }
    return (
        <div className="auth-modal d-flex ">
            <div className="auth-page-modal shadow">
                <div className="auth-btns d-flex">
                    <button className={`button btn-auth ${openform === 'login' ? 'auth-selected-btn' : ""}`} onClick={handleClick}>
                        <span>Login</span>
                    </button>
                    <button className={`button btn-auth ${openform === 'signup' ? 'auth-selected-btn' : ""}`} onClick={handlesignupclick}>
                        <span>Signup</span>
                    </button>
                    <button className="button btn-auth" onClick={handleclosebtn}>
                        <span className="x-span"><X size={30} /></span>
                    </button>
                </div>
                <div>
                    {openform === "login" ? <Login /> : openform === "signup" ? <Signup /> : ""}
                </div>
            </div>
        </div>
    )

}