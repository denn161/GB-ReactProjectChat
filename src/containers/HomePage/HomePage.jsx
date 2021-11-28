

// import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import { useDispatch } from "react-redux";
import AuthForm from "../../components/AuthForm";
import { Link } from "react-router-dom";
import { signInProfile } from "../../store/profile/actions";
import { logIn } from '../../services/firebase';
import { useState } from 'react';



const HomePage = () => {

  const [error, setError] = useState()
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();


  const handleClickSign = () => {
    dispatch(signInProfile())
  }

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
      <AuthForm error={error} loading={loading} onSubMit={handleClickSignIn}/>
      <Link className={styles.home__link} to='/login'>Регистрация</Link>
    <button onClick={handleClickSign} className="btn btn-success">SIGN IN</button>
    </div>

   
  );
}


// HomePage.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default HomePage;