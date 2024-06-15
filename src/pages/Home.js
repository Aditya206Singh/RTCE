import React ,{useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from  'react-hot-toast';
import {useNavigate} from 'react-router-dom';
const Home  = () => {
    const navigate=useNavigate();
    const [roomId,setRoomId]=useState('');
    const [userName,setUsername]=useState('');
    const createNewRoom=(e)=>{
        e.preventDefault();
        const id=uuidv4();
        setRoomId(id);
        toast.success('Created a new room');

    };
    useEffect(()=>{
        debugger;
    });
    const joinRoom=()=>{
        if(!roomId || !userName){
            toast.error('Room ID and username is required');
            return ;

        }
        
    //Redirect
    navigate('/editor/${roomID}',{
       state: {
        userName,
       } ,
    });

    };
    const handleInputEnter=(e)=>{
        console.log('event',e.code);
        if(e.code==='Enter'){
            joinRoom();
        }
    }
  return (
    <div className="homePageWrapper">
<div className="formWrapper">
    <img 
    className='homePageLogo'
     src="/code-sync.png" 
     alt="code-sync-logo"/>
    <h4 className="mainLabel">Paste invitation Room ID</h4>
    <div className="inputGroup">
        <input 
        type="text" 
        className="inputBox" 
        placeholder="ROOM ID"
        onChange={(e)=>setRoomId(e.target.value)}
        value={roomId}
        onKeyUp={handleInputEnter}
        />
        <input
        type="text"
        className='inputBox'
        placeholder='USERNAME'
        onChange={(e)=>setUsername(e.target.value)}
        value={userName}
        onKeyUp={handleInputEnter}
        />
        <button className='btn joinBtn' onClick={joinRoom}>join</button>
        <span className='createInfo'>
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
                new room
            </a>
        </span>
    </div>
    </div>  
    <footer>
        <h4>Build with ❤️ by 
             <a href="https://www.linkedin.com/in/aditya-singh-65a879232/"> Aditya Singh</a></h4>
        </footer> 
    </div>
  )
}

export default Home 
