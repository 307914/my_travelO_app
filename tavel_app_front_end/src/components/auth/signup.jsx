import { useAuth } from '../../context';
import { signupHandler } from '../../services';
import { emailregex, nameregex, numberregex, passwordregex } from '../../utils';
import './auth.css'
let isusernamevalid,
    isemailvalid,
    ispasswordvalid,
    isconfirmpasswordvalid,
    isnumbervalid
export const Signup = () => {

    const { number, username, email, password, conformpassword, authDispatch } = useAuth();
    console.log({ number, username, email, password, conformpassword });
    const handlesubmitform = (e) => {
        e.preventDefault();
        console.log({
            isconfirmpasswordvalid,
            isemailvalid,
            isnumbervalid,
            ispasswordvalid,
            isusernamevalid
        })
        if (isconfirmpasswordvalid &&
            isemailvalid &&
            isnumbervalid &&
            ispasswordvalid &&
            isusernamevalid
        ) {
            signupHandler(username, email, password, number)
        }
        authDispatch({
            type: "STATE_LOGIN"
        })
    }

    const handleusername = (e) => {
        isusernamevalid = nameregex(e.target.value);
        if (isusernamevalid) {
            console.log("valid name");
            authDispatch({
                type: "USERNAME",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid username");
        }
    }
    const handleemail = (e) => {
        isemailvalid = emailregex(e.target.value);
        if (isemailvalid) {
            console.log("valid email");
            authDispatch({
                type: "EMAIL",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid email");
        }

    }
    const handlenumber = (e) => {
        isnumbervalid = numberregex(e.target.value);
        if (isnumbervalid) {
            console.log("valid number")
            authDispatch({
                type: "NUMBER",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid number")
        }

    }

    const handlepassword = (e) => {
        ispasswordvalid = passwordregex(e.target.value)
        if (ispasswordvalid) {
            console.log("valid password")
            authDispatch({
                type: "PASSWORD",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid passwprd")
        }
    }

    const handleconfirmpassword = (e) => {
        isconfirmpasswordvalid = passwordregex(e.target.value)
        if (isconfirmpasswordvalid) {
            console.log("valid confirmpasswprd");
            authDispatch({
                type: "CONFIRM_PASSWORD",
                payload: e.target.value
            })
        }
        else {
            console.log("invalid conformedpasswprd")
        }
    }
    return (
        <div className='auth-modal-container d-flex align-center'>
            <form onSubmit={handlesubmitform}>
                <div className=" auth-modal-sl d-flex direction-column">
                    <div className="auth-user">
                        <label className='auth-label'>Mobile Number <span className="asterk">*</span></label>
                        <input type="number"
                            defaultValue={number}
                            maxLength="10"
                            requried
                            className="auth-input"
                            placeholder='Enter Mobile Number'
                            onChange={handlenumber}
                        />
                    </div>

                    <div className="auth-user ">
                        <label className='auth-label'>Name <span className="asterk">*</span></label>
                        <input type="text"
                            defaultValue={username}
                            className="auth-input"
                            placeholder='Enter name'
                            required
                            onChange={handleusername}
                        />
                    </div>

                    <div className="auth-user">
                        <label className='auth-label'>Email<span className="asterk">*</span></label>
                        <input type="email"
                            defaultValue={email}
                            className="auth-input"
                            required
                            placeholder='Enter Email'
                            onChange={handleemail}
                        />
                    </div>

                    <div className="auth-user">
                        <label className='auth-label'>Password <span className="asterk">*</span></label>
                        <input type="password"
                            defaultValue={password}
                            className="auth-input"
                            required
                            placeholder='Enter Password'
                            onChange={handlepassword}
                        />

                    </div>

                    <div className="auth-user">
                        <label className='auth-label'>Confirm Password<span className="asterk">*</span></label>
                        <input type="password"
                            defaultValue={conformpassword}
                            className="auth-input"
                            required
                            placeholder='Enter Password'
                            onChange={handleconfirmpassword}
                        />
                    </div>
                </div>
                <div className='btn-con'>
                    <button className="button btn-submit">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}