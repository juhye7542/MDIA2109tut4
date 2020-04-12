import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';


// var welome = "welcome to my App!"

// function setWelcome(){
//     welcome = "Start with sending a message.";
//     document.querySelector("#welcome").innerText = welcome;
// }
//It is same as below lines that start with const ChatPage... 

const ChatPage = ({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const [msg, setMsg] = useState("Pls type something!");
    const [resp, setResp] = useState("Let me respond to you!");
    const [color, setColor] = useState("#e54");
    const [text, setText] = useState("Hello");

    return <div>
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={() => {setWelcome("Start with sending a message.");}}>
            <Chat msg={msg} name={"User 1"}/>
            <p />
            <Chat img={"https://cdn1.iconfinder.com/data/icons/robots-avatars-set/354/Robot_bot___robot_robo_bot_artificial_intelligence-512.png"} 
            backgroundColor="#0AF" msg={resp} name={"Chat Bot"}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                // if(val === "hi"){
                //     setResp("I love pie");
                // }
            }}/>
        </div>
        <div id="custom_button">
            <CustomButton text={text} color={color} onClick={()=>{
                setText("I love you!");
                setColor("#A4F");
            }} />
        </div>
    </div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say";
    }
}


ChatPage.defaultProps = {

}

export default ChatPage;