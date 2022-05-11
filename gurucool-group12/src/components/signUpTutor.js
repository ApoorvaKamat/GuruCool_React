import React, {useState} from 'react'
import PasswordStrengthBar from "react-password-strength-bar";
import '../styles/signUpStudent.css'

export default function SignUpTutor() {
    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [confirmPswd, setConfirmPswd] = useState('');
    const [subjects, setSubjects] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [pswdError, setPswdlError] = useState(false);
    const [pwdCompError, setPwdCompError] = useState(false);
    const [continueNext,setContinueNext] = useState(false);


    const emailPattern = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]');
    const pwdPattern = new RegExp("[a-z0-9A-Z][A-Za-z\d@$!%*?&]{6,}") ;



    const handleFirstName= (e) =>{
        setFirstName(e.target.value);
    }

    const handleLastName= (e) =>{
        setLastName(e.target.value);
    }

    const handleEmail= (e) =>{
        setEmail(e.target.value);
        if(emailPattern.test(e.target.value)){
            setEmailError(false)
        }
        else{
            setEmailError(true);
        }
        
    }

    const handlePassword= (e) =>{
        setPassword(e.target.value);
        if(pwdPattern.test(e.target.value)){
            setPswdlError(false)
        }
        else{
            setPswdlError(true);
        }
    }
    const handleSubjects = (e) => {
        setSubjects(e.target.value);
    }
    const handleProfilePic = (e) => {
        setProfilePic(e.target.value);
    }

    const handleConfirmPswd= (e) =>{
        setConfirmPswd(e.target.value);
        setPwdCompError(!(password===e.target.value))
    }


    const shouldEnableSubmitButton =() =>{
        return subjects && firstName && lastName && email && password &&password===confirmPswd;
    }

    const shouldEnableNextButton =() =>{
        return firstName && lastName && email && password &&password===confirmPswd;
    }

    const handleOnNext = (e) => {
        e.preventDefault();
        if(!shouldEnableNextButton()){
            //setError(true);
            return;
        }
        else{
            //setError(false);
            setContinueNext(true);
        }
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!(shouldEnableSubmitButton())){
            //setError(true);
            return;
        }
        else{
            //setError(false);
            setSubmitted(true);
        }
    }
    const handleOnBackClick = () =>{
        setContinueNext(false);
    }

  return (
    <div className='formContainer'>
       {!continueNext && 
        <>
                <div className='inputWrapper firstNameContainer'>
                    <i class="bi bi-person-plus-fill"></i>
                    <input className='input' value={firstName} type='text' onChange={handleFirstName} placeholder="Enter First Name"></input>
                </div>
                <div className='inputWrapper'>
                    <i class="bi bi-person-plus-fill"></i>
                    <input className='input' value={lastName} type='text' onChange={handleLastName} placeholder="Enter Last Name"></input>
                </div>
            <div className='inputWrapper'>
                <i class="bi bi-envelope-fill"></i>
                <input className='input' value={email} type='email' onChange={handleEmail} placeholder="Enter Email Id"></input>
            </div>
            <div className={`errorDiv ${email&&emailError?'visible':'hidden'}`}><i class="bi bi-exclamation-lg"></i>Invalid Valid Email address</div>
            <div className='inputWrapper customMarginTop'>
                <i class="bi bi-key-fill"></i>
                <input className='input' value={password} type='password' onChange={handlePassword} placeholder="Enter Password"></input>
            </div>
            {!password&&<div className='errorDiv hidden'>hello</div>}
            {password && pswdError && 
                <div className={`errorDiv visible`}>
                    <i class="bi bi-exclamation-lg"></i>
                    Invalid Password format.
                    </div>
            }
            {password && !pswdError &&
            <PasswordStrengthBar
            password={password}
            shortScoreWord="Too Short"
            scoreWords={["Fair", "Fair", "Good", "Strong", "Excellent"]}
            className={`errorDiv visible`}
            /> 
            }
            <div className='inputWrapper customMarginTop'>
                <i class="bi bi-key-fill"></i>
                <input className='input' value={confirmPswd} type='password' onChange={handleConfirmPswd} placeholder="Enter Password again"></input>
            </div>
            <div className={`errorDiv ${confirmPswd&&pwdCompError?'visible':'hidden'}`}><i class="bi bi-exclamation-lg"></i>Passwords Dont Match</div>
            <div className='signInButtonContainer customMarginTop'>
                <button className={`signInButton ${shouldEnableNextButton()?``:`disable`}`} onClick={handleOnNext}><i class="bi bi-caret-right-fill"></i></button>
            </div>
        </>
       }
       {
           continueNext && 
                <>
                <div className='inputWrapper firstNameContainer'>
                    <i class="bi bi-bookmark-check-fill"></i>
                    <input className='input' value={subjects} type='text' onChange={handleSubjects} placeholder="Enter Subjects you wish to teach"></input>
                </div>
                <div className='inputWrapper'>
                    <i class="bi bi-person-plus-fill"></i>
                    <input className='input' value={profilePic} type='text' onChange={handleProfilePic} placeholder="Insert Profile Pic"></input>
                </div>
                <div className='signInButtonContainer customMarginTop'>
                <button className={`signInButton ${shouldEnableSubmitButton()?``:`disable`}`} onClick={handleOnSubmit}>Submit</button>
                <button className={`signInButton backButton`} onClick={handleOnBackClick}><i class="bi bi-caret-left-fill"></i></button>
                </div>
                
                </>

       }
    </div>
  )
}
