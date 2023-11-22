import { useState, ChangeEvent, FormEvent } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
export default function Register(){
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        phone:"",
        
        password:""
    });
   
    const handleInputChange =(evt: ChangeEvent<HTMLInputElement>)=>{
        setUserData({
            ...userData,
            [evt.target.name]:evt.target.value,
        })
    }
    const submitForm = (evt: FormEvent<HTMLFormElement>)=>{
        evt.preventDefault();
        console.log(userData)
    }
    return(
        <div className="h-screen flex-col flex justify-center items-center gap-6">
            
            <div className=" flex gap-3 flex-col">
                <h3 className="text-center font-bold text-2xl">Sign Up</h3>
            <form onSubmit={(evt)=>submitForm(evt)} className="flex flex-col gap-4">
                <input type="text" 
                name="name" 
                id="name" 
                value={userData.name} 
                onChange={(evt)=>handleInputChange(evt)} 
                className='border rounded-md border-slate-950 w-96 p-2  outline-none text-black'
                placeholder='Name'
                />
                <input type="email" 
                name="email" 
                id="email" 
                value={userData.email} 
                onChange={(evt)=>handleInputChange(evt)} 
                className='border  w-96 p-2 border-slate-950 rounded-md outline-none text-black'
                placeholder='Email'
                /> 
                
            <input type="text" 
                name="phone" 
                id="phone" 
                value={userData.phone} 
                onChange={(evt)=>handleInputChange(evt)} 
                placeholder='Phone Number'
                className='border  w-96 p-2 border-slate-950 rounded-md outline-none text-black' />
               
            <input type="password" 
                name="password" 
                id="password" 
                value={userData.password} 
                onChange={(evt)=>handleInputChange(evt)} 
                className='border  w-96 p-2 border-slate-950 rounded-md outline-none text-black'
                placeholder='Password'
                />
                <button type="submit" className="bg-black rounded-md p-3 cursor-pointer text-white hover:bg-slate-600">
                    Sign Up
                </button>
            </form>
            <h5 className="text-center">Or</h5>
                <button className='bg-red-600 rounded-md w-full p-2 text-white text-sm'>Sign Up With Google</button>
                <div className="self-center text-slate-500">

                <Link className='decoration-black text-black text-center hover:text-slate-600' to='/sign-in'>Sign In</Link> instead
                </div>
            </div>
        </div>
    )
}