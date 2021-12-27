
// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import AuthForm from "../../components/AuthForm";
import { Link } from "react-router-dom";
import { logIn } from '../../services/firebase';
import { useState } from 'react';



const HomePage = () => {

  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)  
  const [text,seTText] = useState('Войти')
 

  const handleClickSignIn = async (email, pass) => {
    setLoading(true)   
  
      try {
        await logIn(email,pass)
      } catch (error) {
        setError(error.message)
     
        console.log(error.message)        
      } finally {
        setLoading(false)
      }
  }

  return (
    <div className={styles.home__container}>
    <h1 className={styles.title}>
    Для тех кто уже в чате
      </h1>
      <AuthForm error={error} loading={loading} onSubmit={handleClickSignIn} text={text}/>
      <Link className={styles.home__link} to='/login'>Регистрация</Link> 
    </div>

   
  );
}


// HomePage.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default HomePage;