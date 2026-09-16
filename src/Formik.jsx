import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Formik = () => {
  const navigate = useNavigate()

    const passordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
     
     const checkDuplicatedEmail = async(email)=> {
      try {
      const check = await axios.get("http://localhost:9876/users")
      const existuser = check && check.data.find((user)=> user.email == email)
      if (existuser) {
        return existuser
      }
      
    } catch (error) {
      console.log(error.message);
      
    }
    }

   
    const formik = useFormik({

        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
           username:yup.string().trim().min(3,"username cannot be less than 3 characters").required("username is required"),
           email:yup.string().trim().email("write a valid email").required("email is required").test(
            "email already exist",
            async (value)=>{
             const result = await checkDuplicatedEmail(value)
             if (!result) {
              return true
             }
            }
           ),
           password:yup.string().trim().matches(passordregex, "password must contain uppercase letter,lowercase and a number.").min(6,"password must not be less than 6 character").required("password is required")

        }),
        onSubmit:(value)=>{
          console.log(value);
          axios.post("http://localhost:9876/users",value)
          .then((res)=>{
            console.log(res);
             navigate("/login")
          }).catch((err)=>{
            console.log(err);
            
          })
        }
    })

    console.log(formik.errors);
    console.log(formik.touched);
    
  return (
    <div>
         <form className='w-50 mx-auto px-3 py-3 shadow-md' onSubmit={formik.handleSubmit} action="">
               <h2>Form </h2>
            <div className='form-group mb-2'>
                 <input onBlur={formik.handleBlur} className='form-control' onChange={formik.handleChange} type="text" name='username' placeholder='Username'/>
                <small className='text-danger'>{formik.touched.username && formik.errors.username}</small>
            </div>

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

export default Formik