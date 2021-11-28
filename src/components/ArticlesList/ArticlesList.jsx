
import PropTypes from 'prop-types';
import {useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ArticlesItem from '../../componentsItem/ArticlesItem';
import { getArticles } from '../../store/fetchs/articles/actions';
import { selectArticlesList} from '../../store/fetchs/articles/selectors';
import Spinner from '../Spinner';
import styles from './ArticlesList.module.css';

const ArticlesList = () => {
      
  const dispatch = useDispatch()

  const {articles,loading,error,errorText} = useSelector(selectArticlesList)
  

    
    const reloadingApi = useCallback( () => {
        dispatch(getArticles())
  },[dispatch])
    
    useEffect(() => {
    reloadingApi()    
      
          
    },[reloadingApi])

    return (
        
     <div className={styles.articles__wrapper}>
        
             {loading?(<Spinner/>):
            error ?
                (
                    <>
           <button onClick={()=>reloadingApi()} className='btn btn-success'>Загрузить статьи</button>
             <ArticlesItem date={articles} />
                    </>                    
                )
              :(<p>{errorText}</p>)  }
        
        </div>  
  );
}


ArticlesList.propTypes = {
  setErrorApi: PropTypes.func
}
export default ArticlesList;