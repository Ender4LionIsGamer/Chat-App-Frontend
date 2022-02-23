import React from 'react';import logo from './logo.svg';import './App.scss';import socketClient  from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
function App() {
    var socket = socketClient (SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
});

    return (
        <div classname="App"></div>

            <header classname="App-header"></header>

                <img src="{logo}" classname="App-logo" alt="logo">
                <p></p>        
                Edit <code>src/App.js</code> and save to reload.  
               <p></p>‍
               
                   className="App-link"
                   href="https://reactjs.org"
                   target="_blank"
                   rel="noopener noreferrer"
                >
‍
                   Learn React
‍
              
‍
            
‍
        
    );
‍
}

export default App;
