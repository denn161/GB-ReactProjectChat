
import ArticlesList from '../../components/ArticlesList';
import styles from './ArticlesPage.module.css';


const ArticlesPage = () => {
    return (
      <>
<h1 className={styles.title}>Articles of Planats</h1>
<ArticlesList/>
      </>
   
  );
}



export default ArticlesPage;