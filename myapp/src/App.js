import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
    const [show,setShow] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then((req)=>{
            const xy = req.data;
            setShow(xy)
        }
        )
        .catch((err)=>setShow('faild vai'));
    },[])
    
  return (
    <div>
        {show.map((v,i)=> (
        <li key={i}>{v.uname}:-{v.pass}</li>
        ))}
    </div>
  );
}

export default App;
