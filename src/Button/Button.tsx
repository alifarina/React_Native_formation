import { View, Text,Pressable,ToastAndroid } from "react-native";
import styles from "./Button.styles";
import { useEffect, useState } from "react";

interface IButtonProps{
  children:string
  color: any
  bgColor : "blue"|"red"
  onButtonPressed : ()=>void
}
const Button: React.FC<IButtonProps>= ({children, color, bgColor, onButtonPressed=()=>{}}) => {
  //console.log(props)
  const [buttonBgColor,setButtonBgColor] = useState<string>(bgColor)
  useEffect(() => {
    console.log("useEffect called for button color ")

    setTimeout(() => {
      setButtonBgColor(bgColor)
      console.log("color back to origin ",bgColor)
    }, 1000);
  },[bgColor,buttonBgColor])
  return (
    <Pressable onPress={(evt)=>{
        //console.log(evt);
        //ToastAndroid.show("pressed", ToastAndroid.LONG);
        setButtonBgColor('grey')
        onButtonPressed()
    }} style={[styles.Button, {backgroundColor:buttonBgColor}]}>
      <Text style={[styles.text,{color:color}]}>{children}</Text>
    </Pressable>
  );
};
export default Button;


