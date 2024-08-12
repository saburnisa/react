import React from "react"

class Toggle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={showMessage:false};
    }
    toggle=()=>{
        this.setState((prevState)=>({showMessage:!prevState.showMessage,}))

    };

    
    
    render(){
        return(
            <div>
                
                <button onClick={this.toggle}>{this.state.showMessage?'Hide Component' : 'Show Component'}</button>
                {
                    this.state.showMessage&&(<div>
                        <p>Hi!How are you</p>
                        </div>
                        )
                }

            </div>
        )
    }
}
export default Toggle;