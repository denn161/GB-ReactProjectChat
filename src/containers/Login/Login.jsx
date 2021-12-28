import { useState } from 'react';
import AuthForm from "../../components/AuthForm";
import { signUp } from '../../services/firebase';
import styles from './Login.module.css';

const Login = () => {

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [text,seTText] = useState('Регистрация')
  

  const handleClickSignUp = async (email, pass) => {
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
      <h1 className={styles.title}>Регистрация</h1>
      <AuthForm error={error}
                loading={loading}
                onSubmit={handleClickSignUp}
                text={text}/>
     
</div>
  );
}

export default Login;