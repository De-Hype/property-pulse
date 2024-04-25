import { useState } from "react";

const Newsletter = () => {
  const [input, setInput] = useState("");
  const handleNewsletterSubmit =(e:any)=>{
    e.preventDefault();
    console.log(input)
  }
  return (
    <div className="sm:mt-4 bg-slate-50 px-20 tab:px-5 gap-4 py-14  ">
      <div className="flex items-center flex-col gap-3">
        <h5 className="text-center text-[#7065F0] text-base font-semibold">No Spam Promise</h5>
        <h3 className="text-center text-2xl font-bold">Are you a landlord?</h3>
        <p className="text-center text-sm text-slate-500">
          Discover ways to raise your home's value and get listed. No Spam.
        </p>
        <form onSubmit={handleNewsletterSubmit} className="bg-white px-3 py-3 flex min-w-[600px] rounded-sm tab:flex-col tab:bg-inherit tab:gap-3 tab:min-w-full">
          <input
            type="text"
            name="newsletter"
            id="newsletter"
            placeholder="Enter your email address"
            onChange={(e)=>setInput(e.target.value)}
            className=" bg-inherit text-[#080614] w-full outline-none py-2 px-4 tab:bg-white tab:py-4 tab:rounded-lg tab:border tab:border-[#7065F0]"
          />
          <input type="button" className="bg-[#7065F0] rounded-lg text-white font-medium px-5 py-2 tab:py-3" value="Submit" />
        </form>
        <p className="text-center text-xs text-slate-500">
          Join <span className="text-purple-500 text-[13px]">10,000+</span> other landlords in our estatary community{" "}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
