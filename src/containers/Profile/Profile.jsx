
import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import styles from './Profile.module.css';
import {changeValueStore, signOutProfile } from '../../store/profile/actions';
import { selectorName } from '../../store/profile/selectors';


const Profile = () => {

  const {name,names}= useSelector(selectorName)

  const dispatch = useDispatch()
  
  const [value, setValue] = useState('')

  const changeValue = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();   
    if (value) {
   dispatch(changeValueStore(value))
 
      
    }   
    setValue('')
  }

  const handleSignOut = () => {
    dispatch(signOutProfile())
  }
 
  return (

    <div className={styles.container}>
     <button onClick={handleSignOut} className='btn btn-danger'>SIGN_OUT</button>
      
      <form onSubmit={handleSubmit}>
      <p>{name}</p>  
        <input type="text" value={value} onChange={changeValue} />
         <button>Добавить</button>
      </form>
      <ul>
        {names.map((item,i) =>
            <li key={i}>{item}</li>
          )}
      </ul>
    </div>   
  );
}

export default Profile;




 /* <h1 className={styles.title}>
      Profile
      </h1>
      <input id="input-check" type="checkbox" checked={checkbox} onChange={handleChange}/>
      <label htmlFor="input-check">{checkbox ? "Скрыть текст" : name}</label>

      {checkbox && <div style={{ width: "50%", textAlign: "center", backgroundColor: "purple", padding: "20px", borderRadius: "20px", margin: "0 auto" }}><p style={{ color: "orange", fontSize: "24px", fontWeight: "700" }}>Здесь будет информация о профиле и элементы,что бы зарегистрироваться на сайте!</p></div>} */


// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   names:state.profile.names
// })

// const mapDispatchToProps =(dispatch)({
//  setValue:(value)=>dispatch(changeValueStore(value)) ,
//  
// })


// export default connect(mapStateToProps,mapDispatchToProps)( Profile);