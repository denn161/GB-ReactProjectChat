import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import { toggleCheckbox } from '../../store/profile/actions';
import styles from './Profile.module.css';


const Profile = () => {
 
  // const {checkbox,name} = useSelector(state => state)
  const checkbox = useSelector(state => state.checkbox);
  const name = useSelector(state=>state.name)
  const dispatch =useDispatch()


  const handleChange = () => {
    dispatch(toggleCheckbox)
  }

  return (

    <div className={styles.container}>
     <h1 className={styles.title}>
      Profile
      </h1>
      <input id="input-check" type="checkbox" checked={checkbox} onChange={handleChange}/>
      <label htmlFor="input-check">{checkbox ? "Скрыть текст" : name}</label>

      {checkbox && <div style={{width:"50%",textAlign:"center",backgroundColor:"purple",padding:"20px",borderRadius:"20px",margin:"0 auto"}}><p style={{color:"orange",fontSize:"24px",fontWeight:"700"}}>Здесь будет информация о профиле и элементы,что бы зарегистрироваться на сайте!</p></div> }
    </div>
   
  );
}


Profile.propTypes = {
  setErrorApi: PropTypes.func
}
export default Profile;