import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  transition(){
    const btnSubmit=document.getElementById('btnSubmit'),
    left=document.getElementById('left');
    btnSubmit.addEventListener('click',(e)=>{
      e.preventDefault();
      left.classList.add('activo');
    });
  }

  render(){
    return (
      <div className="App">
        <div className="left" id="left">
          <div className="container-saludo">
            <span>Programando Ando</span>
          </div>
          <div className="container-block">
            <h1>Welcome Back</h1>
            <p>To keep conected with us please login with your personal info.</p>
            <button type="button" className="btnSubmit" name="btnSubmit" id="btnSubmit" onClick={this.transition}>SIGN IN</button>
          </div>
        </div>
        <div className="rigth">
          <div className="container-title">
              <h1>Create Acount</h1>
          </div>
          <div className="enlases-nav">
              <a href="facebook.com">f</a>
              <a href="google.com">G+</a>
              <a href="twiter.com">ln</a>
          </div>
          <div className="container-form">
            <h4>of use your email for registration</h4>
            <form className="form">
              <input className="cajas" placeholder="Name"></input><br/>
              <input className="cajas" placeholder="Email"></input><br/>
              <input className="cajas" placeholder="Password"></input><br/>
              <button id="btnSignUp" className="btnSignUp">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
