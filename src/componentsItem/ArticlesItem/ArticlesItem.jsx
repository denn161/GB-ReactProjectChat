import PropTypes from 'prop-types';
import styles from './ArticlesItem.module.css';


const ArticlesItem = ({ date }) => {
    

    return (
        
        <ul>
            {date.map(({ id, title }) =>
           <li className={styles.articles__item} key={id}>{title}</li>
        )}

        </ul>
    
  );
}

ArticlesItem.propTypes = {
  date: PropTypes.array
}
export default ArticlesItem;