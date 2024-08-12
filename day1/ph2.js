function alertMsg()
{
    alert("check the console output");
}
function fun(){
    let age=18;
    let name="Kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responsiveValue=null;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responsiveValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age+" "+name+" "+setStatus+" "+userDefault+" "+responsiveValue);
}
function Details(){
    return(
        <div>
            <button onClick={alertMsg}>click</button>
            <button onClick={fun}>Display</button>
        </div>
    );
};
export default Details;