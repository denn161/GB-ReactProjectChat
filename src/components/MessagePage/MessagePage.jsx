
import PropTypes from 'prop-types';
// import styles from './MessagePage.module.css';


const MessagePage = ({ messages }) => {
    
  return (     
       
              <div className="messages__container">
                  <ul className="messages__list">
                      {messages.map(({ id, name, message }) =>
                        <li key={id} style={{
                          margin: 10,
                          border:"2px solid green",
                          marginLeft:"auto",
                          width: "fit-content",
                          padding: 10,borderRadius:10                        }}>
                              <span>{name}</span>
                              <p>{message}</p>
                          </li>

                      )}
                  </ul>
          </div>
       
      
  );
}


MessagePage.propTypes = {
  messages: PropTypes.array

}
export default MessagePage;