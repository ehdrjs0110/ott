import React from "react";
import "./css/Login.css"
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

const Login=()=>{
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
            <h1 className="label">로그인</h1>
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
                <input type="submit" value="로그인"/>
                </div>
            </form>
            <div className="plus">
                <span><a href="#">아이디/비밀번호 찾기</a> | <a href="Signup">회원가입</a></span>
            </div>
        </div>
        </>
    );

};

export default Login;