//Users will be able to access their profiles here
//They can also see their listings on this page
import { useState, ChangeEvent, FormEvent } from "react";
const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
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
    } catch (error) {
    }
  };
  return (
    <div>
      <img src="" className="" alt="" />
      <form onSubmit={(evt) => submitForm(evt)} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={(evt) => handleInputChange(evt)}
          className="border  w-96 p-2 border-slate-950 rounded-md outline-none text-black"
          placeholder="Email"
        />

      </form>
    </div>
  );
};

export default Profile;
