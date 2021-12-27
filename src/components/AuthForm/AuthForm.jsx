
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = ({onSubmit, error, loading,text }) => {
  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  
     
    const changeEmail = (event) => {
        setEmail(event.target.value)
  }
  
    const changePass = (event) => {
        setPass(event.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
     
      onSubmit(email,pass)    
        setEmail('')
        setPass('')
    }
    
  return (
      <>
   <form onSubmit={handleSubmit} className={styles.form}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input value={email} onChange={changeEmail} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Введите почту'/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={pass} onChange={changePass}  type="password" className="form-control" id="exampleInputPassword1" placeholder='Введите пароль'/>
  </div>
   <button disabled={loading} type="submit" className="btn btn-primary">{text}</button>
          </form>
          {error&&<h4>{error}</h4>}
      </>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func
}
export default AuthForm;