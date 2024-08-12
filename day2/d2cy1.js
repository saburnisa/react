const Smile=()=>{
    const imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vsp-1ItVsHjjIAvy1_TjsQkDmhscfUZAng&s";
    const sty={
        backgroundColor: 'lightblue',
        width:'300px',
        height:'350px',
        padding:'100px',
        border:'1px solid blue'
    };
    return(
        <center>
            <div style={sty}>
              <h1><b><center>Smile Component</center></b></h1>
              <p stylr={{height:"100px"}}><center>It is a functional component</center></p>
              <center><img src={imgurl} alt='Not found'height="100px"weight="100px"></img></center>
            </div>
        </center>
    )
}
export default Smile;