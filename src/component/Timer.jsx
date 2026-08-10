import {useState, useEffect} from 'react'

const Timer = () => {
    const [time,setTime] = useState(new Date ());

    useEffect(() =>{
        const timer = setInterval(() =>{
            setTime(new Date());
        },1000);

        return () =>{
            clearInterval(timer);
        }
    },[])
  return (
    <div>
        <h3>Current time</h3>
        <h2>{time.toLocaleTimeString()}</h2>
    </div>
  )
}

export default Timer