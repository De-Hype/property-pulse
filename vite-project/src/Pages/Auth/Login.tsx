import { useState, ChangeEvent, FormEvent } from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';

export default function Login(){
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const handleInputChange =(evt: ChangeEvent<HTMLInputElement>)=>{
        setUserData({
            ...userData,
            [evt.target.name]:evt.target.value,
           
        })
    }
    const submitForm = async (evt: FormEvent<HTMLFormElement>)=>{
        evt.preventDefault();
        console.log(userData)
        try {
            // const result:Object = await axios.post(`${}/register`, userData)
            //Will have to show a message depending
        } catch (error) {
            //Will Have to show a no internet connection error message here
        }
    }
    return(
        <div className="h-screen flex-col flex justify-center items-center gap-6">

            <div className=" flex gap-3 flex-col">
            <form onSubmit={(evt)=>submitForm(evt)} className="flex flex-col gap-4">

                <input type="email" 
                name="email" 
                id="email" 
                value={userData.email} 
                onChange={(evt)=>handleInputChange(evt)} 
                className='border  w-96 p-2 border-slate-950 rounded-md outline-none text-black'
                placeholder='Email'
                />
               
                <input type="password" 
                name="password" 
                id="password" 
                value={userData.password} 
                onChange={(evt)=>handleInputChange(evt)} 
                className='border  w-96 p-2 border-slate-950 rounded-md outline-none text-black'
                placeholder='Password'
                />
                <button type="submit" className="bg-black rounded-md p-3 cursor-pointer text-white hover:bg-slate-600">
                    Sign In
                </button>
            </form>
            <h5 className="text-center">Or</h5>
                <button className='bg-red-600 rounded-md w-full p-2 text-white text-sm'>Sign In With Google</button>
                <div className="self-center text-slate-500">
                    <Link className='decoration-black text-black text-center hover:text-slate-600' to='/register'>Sign Up</Link> instead
                </div>
            </div>
        </div>
    )
}