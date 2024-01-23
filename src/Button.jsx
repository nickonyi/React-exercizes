function Button({color="white",backgroundColor="black",fontSize=12,text="Bofya kidude",handleClick}){
   const buttonStyle = {
    color:color,
    fontSize:fontSize + 'px',
    backgroundColor:backgroundColor
   }
    return (
        <button onClick={()=> {handleClick('https://www.youtube.com/')}} style={buttonStyle}>{text}</button>
    )
}



export default function ButtonList(){
   const handleButtonClick = (url)=> {
    window.location.href = url;
   }
   
    return (
    <div>
   <Button handleClick={handleButtonClick}/>
    <Button />
    <Button />
    </div>
 
   )
}