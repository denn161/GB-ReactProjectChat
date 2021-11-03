
import React,{useState,useEffect}from 'react'


const Counter = () => {

    const [counter,setCounter]=useState(0)
    
    const changeCounter = () => {
        setCounter((prev)=>prev+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev)=>prev+1)
        },2000)

        console.log("mount") // монтирование


        return () => {
            clearInterval(interval)
            console.log("willOnmount") // размонтирование
        }

    }, [])


    // useEffect(() => {
    //     console.log("mount")
    //     //отрпавлять какие то запросы
    //     // ставить таймеры выполнять подписки на кие то события

    // },[])

    // useEffect(() => {
    //     console.log("mount+update")


    // })
    useEffect(() => {
        console.log("update + change counter")


    }, [counter])
    
 

  return (
      <>
          <p>{counter}</p>
          <button onClick={changeCounter}>Добавить</button>
    
      </>
  );
}

// export  class Counter extends React.Component {   
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             name: 'Alex'
            
//         }
//         console.log('constructor')
//     }

//     componentDidMount() {
//         console.log("didMount")
//     }

//     componentDidUpdate(prevProps,prevState) {
//         console.log("didUpdate",prevProps,prevState)
//     }

//     componentWillUnmount() {
//         console.log("willMount")
//     }
//     handleClick = () => {
//         this.setState(
//             (prevState) => ({ count: prevState.count + 1 }), () => {
//                 console.log(this.state.count)
//             }
//         );     
//     }

//     render() {
//         console.log("render")
//         return(  <div>
//             <p>{this.state.count}</p>
//              <h3>{this.state.name}</h3>

//             <button onClick={this.handleClick}>Добавить</button>
//         </div>)
        
//     }
// }




export default Counter;