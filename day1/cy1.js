function check(){
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"}
    const object2={name:"Kabil"}
    if(name1===name2)
        console.log("Primitive");
    else if(object1===object2)
        console.log("Reference");
}
const check1=()=>
{
    return(
    
        <button onClick={check}>click</button>
    )
};
export default check;