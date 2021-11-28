import PropTypes from 'prop-types';
import { links } from '../../routes/links';
import {Link} from 'react-router-dom'
import styles from './Header.module.css';



const Header = () => {
  return (
      <div className={styles.header}>
          <div className="container">
                <div className={styles.header__inner}>
              <ul className={styles.list__link}>
                  {links.map(({ to, text },i) =>
                   <li key={i} className={styles.list__item}><Link className={styles.link} to={to}>{text}</Link></li>              
              )}
              </ul>
              </div>
          </div>
        
       </div>
  );
}


Header.propTypes = {
  setErrorApi: PropTypes.func
}
export default Header;