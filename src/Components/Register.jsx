import React, { useState } from 'react'
import foto1 from  '../imige/2.jpg'
import './Register.scss';

export default function Login(offAdd) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [text1, setText1] = useState("");



  return (
    <div className='RegisterSayt'>
      <div className="text_img">
        <div className="text">
          <h1>Welcome to Pizza Fleet!</h1>
          <div className="input_log">
              <h3>First Name *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(first);
              }} >
                <input type="text"  placeholder='username' value={first} onChange={(e) => {
                  setFirst(e.target.value);
                }} />
              </form>
              <h3>Last Name *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(last);
              }} >
                <input type="text"  placeholder='name' value={last} onChange={(e) => {
                  setLast(e.target.value);
                }} />
              </form>
              <h3>Username *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(username);
              }} >
                <input type="Email"  placeholder='surname' value={username} onChange={(e) => {
                  setUsername(e.target.value);
                }} />
              </form>
              <h3>Email address *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(address);
              }} >
                <input type="Email"  placeholder='email' value={address} onChange={(e) => {
                  setAddress(e.target.value);
                }} />
              </form>
              <h3>Password *</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(pass);
              }} >
                <input type="password" placeholder='password' value={pass} onChange={(e) => {
                  setPass(e.target.value);
                }}  />
              </form>
              <form onSubmit={(e) => {
                e.preventDefault();
                offAdd(text1);
              }} >
                <p className='p'><input  type="checkbox" value={text1} onChange={(e) => {
                  setText1(e.target.value);
                }}  /> Keep me logged in</p>
              </form>
              <button>Login</button>
          </div>
        </div>
        <div className="foto">
            <img src={foto1} alt="2" width="550px"  />
        </div>
      </div>
    </div>
  )
}

