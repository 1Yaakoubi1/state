  const  Handlealert=(fname)=>{alert(`Hello ${fname}`)}

function Fullname(props){
    const State = {color : "Bleu"}
    return(
        <>
        <h1 style={State} id="fname">{props.fname}</h1>
        <button onClick={ ()=>    Handlealert((props.fname))  }  >click me !</button>
</>
        
    )
}
 
export default Fullname