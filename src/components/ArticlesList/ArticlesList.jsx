
import PropTypes from 'prop-types';
import {useEffect, useState } from 'react'
import{urlApi} from '../utils/constants'
import ArticlesItem from '../../componentsItem/ArticlesItem';
import Spinner from '../Spinner';
import styles from './ArticlesList.module.css';

const ArticlesList = () => {
      
   
    const [articles, setArticles] = useState([]);

    const [error, setError] = useState(true)

    const [loading, setLoading] = useState(null)
     
    
    const reloadingApi = async () => {
        try {
            setLoading(true)
            const response = await fetch(urlApi)
            if (!response.ok) {
                throw new Error('not ok', response.status)
                 
            }
            const result = await response.json()
            setArticles(result)
            setLoading(false)
              
          
        } catch (error) {
          setError(false)
           console.log(error.message)
        }
     finally {
        setLoading(false)
    }
  }
    
    useEffect(() => {
     reloadingApi()    
      
          
    },[])


    return (
        
     <div className={styles.articles__wrapper}>
        
             {loading?(<Spinner/>):
            error ?
                (
                    <>
           <button onClick={reloadingApi} className='btn btn-success'>Загрузить статьи</button>
             <ArticlesItem date={articles} />
                    </>                    
                )
              :(<p>Что то пошло не так</p>)  }
        
        </div>  
  );
}


ArticlesList.propTypes = {
  setErrorApi: PropTypes.func
}
export default ArticlesList;