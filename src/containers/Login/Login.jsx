import styles from './Login.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthForm from "../../components/AuthForm";
import { signUp } from '../../services/firebase';
import { useState } from 'react';



const Login = () => {

  const [error, setError] = useState()
  const [loading,setLoading] = useState(false)

  const handleOnSubmit = async (email, pass) => {
           setLoading(true)
      try {
           await signUp(email,pass)
      } catch (error) {
        setError(error.message)
     
        console.log(error.message)        
      } finally {
        setLoading(false)
      }
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title} >Регистрация</h1>
      <AuthForm error={error} loading={loading} onSubMit={handleOnSubmit} />
       <Link className={styles.link} to='/'>Sign In</Link>
</div>
  );
}


Login.propTypes = {
  setErrorApi: PropTypes.func
}
export default Login;