import Link from 'next/link';
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {FaSmileWink} from 'react-icons/fa';
import './index.css';

function ClickIndex(){
    document.querySelector("#mainapp").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)

    // if(confirm("Are you srue?")){
    //     //move to ChatPage
    //     Router.push("/ChatPage");
    // }
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    <Link href="/ChatPage"><button>Chats!</button></Link>
    <FaSmileWink  color="#FBC"/>
    <Link href="/Contact"><button>Contact Me</button></Link>
</div>

export default Index;