import React from 'react';
import Counter, {ChangeAll} from "./../counterAssgn/counter";

class App extends React.Component{

    constructor(){
        super();

        this.state = {
            value:'',
        }
    }

    incrementAll = () =>
    {
        this.setState({ value: 'inc'});
    }

    decrementAll = () =>
    {
        this.setState({ value: 'dec'});
    }

    render(){
        return(
            <div style={{border:'2px solid red', backgroundColor: 'yellow', margin:'auto', padding:'20px', width:'50%', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <h2>Counter Example</h2>
                <Counter value={this.state.value} />
                <Counter value={this.state.value} />
                <Counter value={this.state.value} />
                <ChangeAll incrementAll={this.incrementAll} decrementAll={this.decrementAll}/>
            </div>
        )
    }
}

export default App;