import React,{useState} from 'react'
import '../styles/signInForm.css'

export default function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(email==='' || password === ''){
            setError(true);
        }
        else{
            setError(false);
            setSubmitted(true);
        }
    }

  return (
    <>
        <form className='formContainer'>
            <div className='inputWrapper usernameContainer'>
                <i class="bi bi-envelope-fill"></i>
                <input className='input' value={email} type='email' onChange={handleEmail} placeholder="Enter your Email id"></input>
             </div> 
            <div className='inputWrapper passwordConatiner'>
                <i class="bi bi-key-fill"></i>
                <input className='input' value={password} type='password' onChange={handlePassword} placeholder="Enter Password"></input>
            </div>
            <div className='signInButtonContainer'>
                <button className={`signInButton ${email&&password?``:`disable`}`} onClick={handleOnSubmit}>Login</button>
            </div>
        </form>
    </>
  )
}
