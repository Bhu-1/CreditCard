import React, { useRef, useState} from "react";
import Button from "./Button";
import "./CardInfo.module.css";
const CardInfo = (props) => {
    const txtref1 = useRef('');
    const txtRef2 = useRef('');
    const txtRef3 = useRef('');
    const txtRef4 = useRef('');
    const [pasteClipboard, setPasteClipBoard] = useState('');
    
    const txtArray = [txtref1, txtRef2, txtRef3, txtRef4];
    

    const moveCursor = (event) => {
        if(event.target.value.length >= 16 ){
            setPasteClipBoard(event.target.value.substring(0,16));
            console.log(pasteClipboard);
            return;
        }
        if(txtref1.current.value.trim().length === 4 && txtRef2.current.value.trim().length <4){
            txtRef2.current.focus();
            return;
        }
        if(txtRef2.current.value.trim().length === 4 && txtRef3.current.value.trim().length <4){
            txtRef3.current.focus();
            return;
        }
        if(txtRef3.current.value.length === 4 && txtRef4.current.value.trim().length <4){
            txtRef4.current.focus();
            return;
        }
    }

    const moverCursorBackward = (event, index) => {
       if(event.key === "Backspace" || event.key === "Delete"){
           if(txtArray[index].current.value.length === 0 && index >0){
               txtArray[index-1].current.focus();
           }
       }
     else if(event.key === "Control"  ||  event.key ==="v"){
         let k = 0;
         while(index < 4){
             txtArray[index].current.value = pasteClipboard.substring(k, k+4);
             k=k+4
             index++;
         }
         txtArray[index-1].current.focus();
     }
    }
  return (
      <form>
        <input ref={txtref1} type="text"  onChange={moveCursor} onKeyUpCapture={(event) => moverCursorBackward(event,0)}/>
        <input ref={txtRef2} type="text"  onChange={moveCursor} onKeyUpCapture={(event) => moverCursorBackward(event,1)}/>
        <input ref={txtRef3} type="text"  onChange={moveCursor} onKeyUpCapture={(event) => moverCursorBackward(event,2)}/>
        <input ref={txtRef4} type="text" maxLength="4" onChange={moveCursor} onKeyUpCapture={(event) => moverCursorBackward(event,3)}/>
        <Button txtArr={txtArray} onclick={props.onclick}/>
      </form>
  );
};

export default CardInfo;
