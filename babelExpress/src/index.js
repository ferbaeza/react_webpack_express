import React from 'react';
import ReactDOM from 'react-dom';
const Index = () => {
    return <div>WELCOME TO REACT APP!</div>;
};
const Login=()=>{
    return(
        <form>
            <input type="text" placeholder="Put your name"></input>
        </form>
    )
}


ReactDOM.render(<Index />,document.getElementById('app'));
ReactDOM.render(<Login />,document.getElementById('login'));