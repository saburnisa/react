
const Practise=()=>
{
    const sl={
        backgroundColor: 'lightblue',
        color:'darkblue',
        padding:'10px',
        border:'1px solid blue',
    };
    return(
        <div style={sl}>
            <h1 style={{color:"green"}}>Inline style in Jsx Example</h1>
            <p style={{color:"darkblue",fontSize:"16px"}}>This is a paragraph with inline styles applied</p>
        </div>
    )
}
export default Practise;