import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component: CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const PagewithCustomButtons = () => <div>
    <Header 
        color="#EDF"
        text="Header1"
        fontSize = {50}
        onMouseOver = {H1Over}
    />
    <Header 
        color="#BDB"
        text="Header2"
        fontSize = {30}
        onMouseOver = {H2Over}
    />
    <Header 
        color="#ADD"
        text="Header3"
        fontSize = {30}
        onMouseOver = {H3Over}
    />
    <CustomButton 
        color="#999"
        text="Cancel" 
        onClick = {CancelClick}
        />
    <CustomButton 
        color="#3F5"
        text="Okay"
        onClick = {OkayClick}
        />
    <CustomButton 
        color="#F3F"
        text="Submit"
        onClick = {SubmitClick}
        />
    <CustomButton 
        text="Menu"
        onClick = {MenuClick}
        />
    </div>

function CancelClick() {
    alert("cancel");
}

function OkayClick() {
    alert("Okay");
}

function SubmitClick() {
    alert("Submit");
}

function MenuClick() {
    alert("Menu");
}

function H1Over() {
    alert("mouse is over on header 1");
}

function H2Over() {
    alert("mouse is over on header 2");
}

function H3Over() {
    alert("mouse is over on header 3");
}