import React from 'react'
import "../../App.css"
import BasicExample from '../navbar'
import { useState } from 'react'
import { addUser } from '../../UserReducer'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [cpassword,setCpassword]=useState()
    const [msg,setMsg]=useState()
    const users=useSelector((state)=>state.users)
    const dispatch = useDispatch();

  

    const handleSubmit=(event)=>{
        event.preventDefault();
        if (password !== cpassword){
            setMsg('password do not match')
            
        }
        else{
        dispatch(addUser({id: users[users.length-1].id+1 ,email,password}))
        navigate('/login')
        }
    }

  return (
    <>
 <BasicExample/>
 <div className='p-5 m-5'>
<div className='text-center'>
     <h2 className='mb-3'>SignUp</h2>

</div>

 
<section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        
                        className="form-control form-control-lg"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        onChange={(e) => setCpassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Repeat your password
                      </label>
                    </div>


                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
      
    </>
  )
}

export default Signin
