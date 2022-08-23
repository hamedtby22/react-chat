import React,{useState,useEffect,useContext} from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
//components
import Navbar from './Navbar';

//context
import { AuthContext } from '../context/AuthContextProvider';

//styles
import styles from './Chats.module.css'

const Chats = () => {

    const [loading,setLoading]=useState(true);

    const user=useContext(AuthContext)

    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "73b173cc-bf62-4318-96c2-950075466b99",
                "user-name": user.email,
                "user-secret":user.uid
            }
        })
        .then (() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email",user.email);
            formdata.append("username",user.email);
            formdata.append("secret",user.uid);
            getFile(user.photoURL)
            .then(avatar => {
                formdata.append("avatar",avatar,avatar.name)
                axios.post("https://api.chatengine.io/users", formdata, {
                    headers: {
                        "private-key": "65e667c3-0ab3-4d8e-afdb-c02b70ea8d01"
                    }
                })
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            })  
        })
    },[user,navigate])

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data],"userPhoto.jpg",{type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        navigate("/");
    }
    if(!user || loading) return "Loading..."
    return (
        <div className={styles.container} >
            <Navbar logouthandler={logoutHandler} />
            <ChatEngine
                height="calc(100vh - 66px)"
                projectID="80bf104e-40fb-49c1-985a-a424ded4646a"
                userName={user.email}
                userSecret={user.uid}
             />
        </div>
    );
};

export default Chats;