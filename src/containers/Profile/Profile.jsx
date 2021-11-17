
import React,{useState} from 'react'
import PropTypes from 'prop-types';
import {useDispatch } from 'react-redux';
import styles from './Profile.module.css';
import { changeArrayStoreNames,changeValueStore } from '../../store/profile/actions';
import { useSelector } from 'react-redux';



const Profile = () => {


  const {name,names}= useSelector(state=>state)

  const dispatch = useDispatch()
  
  const [value, setValue] = useState('')

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (value) {
  dispatch(changeValueStore(value))
   dispatch(changeArrayStoreNames(value))
    }
   
    setValue('')

  }

 
  return (

    <div className={styles.container}>
     {/* <h1 className={styles.title}>
      Profile
      </h1>
      <input id="input-check" type="checkbox" checked={checkbox} onChange={handleChange}/>
      <label htmlFor="input-check">{checkbox ? "Скрыть текст" : name}</label>

      {checkbox && <div style={{ width: "50%", textAlign: "center", backgroundColor: "purple", padding: "20px", borderRadius: "20px", margin: "0 auto" }}><p style={{ color: "orange", fontSize: "24px", fontWeight: "700" }}>Здесь будет информация о профиле и элементы,что бы зарегистрироваться на сайте!</p></div>} */}
      
      <form onSubmit={handleSubmit}>
      <p>{name}</p>  
        <input type="text" value={value} onChange={changeValue} />
         <button>Добавить</button>
      </form>
      <ul>
        {names.map((item) =>
            <li key={item}>{item.name}</li>
          )}
      </ul>
    </div>
   
  );
}


Profile.propTypes = {
  setErrorApi: PropTypes.func
}
export default Profile;