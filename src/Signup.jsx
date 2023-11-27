import React from "react";
import "./css/Signup.css"
import "./css/star.css"

import logo from "./img/logo_small.png";

var starClass = [];
var starStyle = [];

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function getRandomValue(max){
  return Math.floor(Math.random() * max);
}

const style = ['style1', 'style2', 'style3'];
const opacity = ['opacity1', 'opacity1', 'opacity1', 'opacity2', 'opacity3'];
const twinkle = [
  'twinkle1',
  'twinkle1',
  'twinkle1',
  'twinkle2',
  'twinkle2',
  'twinkle3',
  'twinkle4',
];

const rendering = () => {
    for(var i=0;i<70;i++){
        starClass.push("star " + style[getRandomValue(3)] + " " + opacity[getRandomValue(5)] + " "
        + twinkle[getRandomValue(7)]);

        starStyle.push({
            top: getRandomValue(windowHeight),
            left: getRandomValue(windowWidth)
        })
        
    }
};

const Signup=()=>{
    rendering();

    const combinedArray = starClass.map((item1, index) => ({
        item1,
        item2: starStyle[index],
    }));

    return(
        <>

        <div className="constelacao">
            {combinedArray.map((combinedItem, index) => (
            <span key={index} className={combinedItem.item1} style={combinedItem.item2}></span>
            ))}
        </div>
        

        <div className="logodiv">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="loginForm">
            <h1 className="label">회원가입</h1>
            <form method="post" action="Login.js">
                <div className="entryarea">
                    <input type="text" className="id" name="id" required/>
                    <div className="labelline">아이디</div>
                </div>
                <div className="entryarea">
                <input type="password" className="pwd" name="pwd" required/>
                <div className="labelline">비밀번호</div>
                </div>
                <div className="entryarea">
                <input type="password" className="pwdck" name="pwdck" required/>
                <div className="labelline">비밀번호 확인</div>
                </div>
                <div className="entryarea">
                    <input type="text" className="nick" name="nick" required/>
                    <div className="labelline">닉네임</div>
                </div>
                <div className="entryarea">
                    <input type="text" className="mail" name="mail" required/>
                    <div className="labelline">이메일</div>
                </div>
                <div className="entryarea">
                <input type="submit" value="Polaris 회원가입"/>
                </div>
            </form>
        </div>
        </>
    );

};

export default Signup;