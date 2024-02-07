//Users will be able to access their profiles here
//They can also see their listings on this page
import { useState, ChangeEvent, FormEvent, useRef } from "react";
import react from "../assets/react.svg";
import { Link } from "react-router-dom";
// import axios from "axios";
import { AiOutlineHome } from "react-icons/ai";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [file, setFile] = useState<File | null>(null)
  const fileRef = useRef<HTMLImageElement | unknown | any>(undefined);

  //We will also fetch the pr
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };
  const submitForm = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(userData);
    try {
      console.log(file)
    } catch (error) {}
  };
  const ChangeImage = (evt:React.ChangeEvent<HTMLInputElement>)=>{
    if (!evt.target.files) return;
    setFile(evt.target.files[0])
  }
  const LogOut = async () => {
    console.log("You are trying to logout");
  };
  const DeleteAccount = async () => {
    console.log("You are trying to delete an account");
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="mt-10 flex items-center flex-col gap-8">
        <Link to="/" className="flex items-center gap-1 hover:text-yellow-700 hover:underline">
          <AiOutlineHome className='text-2xl' /> <span>Go Home</span>
        </Link>
        <input type="file" ref={fileRef} onChange={(evt)=>ChangeImage(evt)} hidden name="" id="" />
        <img src={react} className="h-16 w-16 cursor-pointer" onClick={()=>fileRef.current.click()} alt="" />
        <form
          onSubmit={(evt) => submitForm(evt)}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            id="name"
            value={userData.name}
            onChange={(evt) => handleInputChange(evt)}
            className="border rounded-md border-slate-950 w-96 p-2  outline-none text-black"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={(evt) => handleInputChange(evt)}
            className="border  w-96 p-2 border-slate-950 rounded-md outline-none text-black"
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            id="phone"
            value={userData.phone}
            onChange={(evt) => handleInputChange(evt)}
            placeholder="Phone Number"
            className="border  w-96 p-2 border-slate-950 rounded-md outline-none text-black"
          />

          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={(evt) => handleInputChange(evt)}
            className="border  w-96 p-2 border-slate-950 rounded-md outline-none text-black"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-black rounded-md p-3 cursor-pointer text-white hover:bg-slate-600"
          >
            Update Details
          </button>
        </form>
        <div className="flex justify-between items-center w-full ">
          <h2
            onClick={DeleteAccount}
            className="bg-red-200 text-red-800 rounded-md cursor-pointer"
          >
            Delete Account
          </h2>
          <h2
            onClick={LogOut}
            className="rounded-md cursor-pointer bg-yellow-200 text-yellow-800"
          >
            Sign Out
          </h2>
        </div>
        <Link
          to="/my-listings"
          className="bg-green-200 text-green-800 rounded-md cursor-pointer"
        >
          My listings
        </Link>
      </div>
    </div>
  );
};

export default Profile;
