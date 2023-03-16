import React, { useState } from 'react'
import foto1 from  '../imige/2.jpg'
import './Login.scss';

export default function Login(onAdd) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

  return (
    <div className='loginSayt'>
      <div className="text_img">
        <div className="text">
          <h1>Welcome back to Pizza Fleet!</h1>
          <div className="input_log">
              <h3>Email address *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                onAdd(email);
              }} >
                <input type="Email"  placeholder='sommene@example.com' value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }} />
              </form>
              <h3>Password *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                onAdd(password);
              }} >
                <input type="password" placeholder='********' value={password} onChange={(e) => {
                  setPassword(e.target.value);
                }}  />
              </form>
              <form onSubmit={(e) => {
                e.preventDefault();
                onAdd(text);
              }}  >
                <p className='p'><input  type="checkbox" value={text} onChange={(e) => {
                  setText(e.target.value);
                }}  /> Keep me logged in</p>
              </form>
              <button onClick={(e) => {
                
              }} >Login</button>
          </div>
        </div>
        <div className="foto">
            <img src={foto1} alt="2" width="550px"  />
        </div>
      </div>
    </div>
  )
}
