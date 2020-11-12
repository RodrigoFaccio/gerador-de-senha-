import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  const [quant,setQuant] =React.useState();
  const [senha,setSenha] =React.useState();

  function gerador(){
    const randomPasswd = len =>{
      let password='';
      do{
        password+=Math.random().toString(36).substr(2);
        
  
      }while(password.length<len)
      password = password.substr(0,len)
      return password;
    }
setSenha(randomPasswd(quant));

  }
  
  return (
    
    <div className="Card">
      <h1>Gerar sua senha</h1>
      <form onSubmit={gerador}>
        <h5>Quantidade de caracteres </h5>
        <input  value={quant} onChange={(e)=>setQuant(e.target.value)}  />
      </form>

      <button onClick={gerador}>Gerar senha</button>
  <h3>Senha:</h3><h4>{senha}</h4>

    </div>
  );
}

export default App;
