import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'

const Login = () => {
    const passordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
     
    const formik = useFormik({
         initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object({
           email:yup.string().trim().email("write a valid email").required("email is required"),
           password:yup.string().trim().matches(passordregex, "password must contain uppercase letter,lowercase and a number.").min(6,"password must not be less than 6 character").required("password is required")
        }),
        onSubmit:async(value)=>{
          console.log(value);
          const {email, password} = value
         const response = await axios.get("http://localhost:9876/users")
        console.log(response);
            const existuser = response && response.data.find((user)=> user.email == email)
            if (existuser && existuser.password == password) {
              return  alert("login successful")
            }
            return alert("invalid user")
        }
    })


  return (
    <div>
        <h1>Login page</h1>
          <form className='w-50 mx-auto px-3 py-3 shadow-md' onSubmit={formik.handleSubmit} action="">
               <h2>Login page </h2>
            <div className='form-group mb-2'>
                 <input onBlur={formik.handleBlur}  className='form-control ' onChange={formik.handleChange} type="email" name='email' placeholder='Email' />
               <small className='text-danger'>{formik.touched.email && formik.errors.email}</small>
            </div>

            <div className='form-group mb-2'>
              <input onBlur={formik.handleBlur}  className='form-control' onChange={formik.handleChange} type="password" name='password' placeholder='Password' />
             <small className='text-danger'>{formik.touched.password && formik.errors.password}</small>
            </div>
            

             <button className='btn btn-dark' type='submit'>register</button>
        </form>  
    </div>
  )
}

export default Login