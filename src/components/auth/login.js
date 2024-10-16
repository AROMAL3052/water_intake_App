import React from 'react'
import "../../App.css"
import BasicExample from '../navbar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../../UserReducer'
import checkGuest from '../mainAuth/gustAuth'
import { login } from '../../UserReducer'

const Login = () => {
    const [b,setB]=useState(true)
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [msg,setMsg]=useState()
    
    const users=useSelector((state)=>state.users)
    const navigate=useNavigate()
    const dispatch=useDispatch()



    const handleSubmit=(event)=>{
        event.preventDefault();

        users.map((user) => {
            if (user.email === email && user.password === password) {
    
              setB(true); 
              dispatch(setUser(user.email))
              dispatch(login())
              navigate('/home')
    
            }else{
                setMsg("wrong user name or password")

            }
            return null;
          });
          
    

        

   
        
    }


  return (
    <div>
        <BasicExample/>
     <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
              <form onSubmit={handleSubmit}>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input
                      type="text"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit">
                    Login
                  </button>
                  </form>
                </div>

                <div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default checkGuest(Login)
