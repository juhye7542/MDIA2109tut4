import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    // title: "Custom Button",
    title: "My comps",
    component: CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick() {
    alert("cancel");
}

export const MyCustomButtonwithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputwithPlaceholder = () => <Input 
    placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

// export const PagewithCustomButtons = () => <div>
//     <Header 
//         color="#EDF"
//         text="Header1"
//         fontSize = {50}
//         onMouseOver = {H1Over}
//     />
//     <Header 
//         color="#BDB"
//         text="Header2"
//         fontSize = {30}
//         onMouseOver = {H2Over}
//     />
//     <Header 
//         color="#ADD"
//         text="Header3"
//         fontSize = {30}
//         onMouseOver = {H3Over}
//     />
//     <CustomButton 
//         color="#999"
//         text="Cancel" 
//         onClick = {CancelClick}
//         />
//     <CustomButton 
//         color="#3F5"
//         text="Okay"
//         onClick = {OkayClick}
//         />
//     <CustomButton 
//         color="#F3F"
//         text="Submit"
//         onClick = {SubmitClick}
//         />
//     <CustomButton 
//         text="Menu"
//         onClick = {MenuClick}
//         />
//     </div>

// function CancelClick() {
//     alert("cancel");
// }

// function OkayClick() {
//     alert("Okay");
// }

// function SubmitClick() {
//     alert("Submit");
// }

// function MenuClick() {
//     alert("Menu");
// }

// function H1Over() {
//     alert("mouse is over on header 1");
// }

// function H2Over() {
//     alert("mouse is over on header 2");
// }

// function H3Over() {
//     alert("mouse is over on header 3");
// }