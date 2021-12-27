import PropTypes from 'prop-types';
import { links } from '../../routes/links';
import { useSelector } from 'react-redux'
import {selectorName} from '../../store/profile/selectors'
import {Link} from 'react-router-dom'
import styles from './Header.module.css';
import { logOut } from '../../services/firebase';
// import {auth} from '../../services/firebase';


const Header = () => {

  const { auth } = useSelector(selectorName)  

   const handleSignOut = async () => {
   try {
       await  logOut()
     } catch (error) {
       console.log(error.message)
       
     }    
  }  
 
  return (
      <div className={styles.header}>
          <div className="container">
                <div className={styles.header__inner}>
              <ul className={styles.list__link}>
                  {links.map(({ to, text },i) =>
                   <li key={i} className={styles.list__item}><Link className={styles.link} to={to}>{text}</Link></li>              
              )}
          </ul>
          <div className={styles.buttons}>
            {auth ? (<button onClick={handleSignOut} className='btn btn-danger'>SIGN OUT</button>)
              
              : (<>
                    <Link className={styles.header__button} to='/home'>
                <button className='btn btn-success'>SIGN IN</button>
                </Link>
              <Link className={styles.header__button} to='/login'>
                <button className='btn btn-success'>SIGN UP</button>
              </Link>
            
                </>
                
                
              
              
               )
            
            }
          </div>
        
              </div>
          </div>
        
       </div>
  );
}


Header.propTypes = {
  setErrorApi: PropTypes.func
}
export default Header;