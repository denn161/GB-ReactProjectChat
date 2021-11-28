

// import PropTypes from 'prop-types';
// import styles from './HomePage.module.css';


import { useDispatch } from "react-redux";
import { signInProfile } from "../../store/profile/actions";



const HomePage = () => {

  const dispatch = useDispatch();
 


  const handleClickSign = () => {
    dispatch(signInProfile())
  }

  return (
    <>
    <h1>
    HomePage
      </h1>
      
    <button onClick={handleClickSign} className="btn btn-success">SIGN IN</button>
    </>

   
  );
}


// HomePage.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default HomePage;