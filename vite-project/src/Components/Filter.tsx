import { useState } from "react";

const Filter = () => {
    const [priceInput, setPriceInput] = useState(100)
  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-gray-200 h-screen grid place-items-center">
      <div className="bg-white px-5 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-center">Type:</h3>
            <div className="flex items-center gap-3 justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="rent" id="rent" />
                <span>Rent</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" name="sell" id="sell" />
                <span>Sales</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-center">Property Type:</h3>
            <div className="flex items-center gap-3 justify-between">
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="School" id="school" />
                <span>School</span>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="houses" id="houses" />
                <span>Houses</span>
              </div>
              <div className="flex gap-1 items-center">
                <input type="checkbox" name="hotels" id="hotels" />
                <span>Hotels</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h3 className="font-bold">Price:</h3>
            <div className="flex items-center gap-3 justify-between">
                <label htmlFor="min-price">$10</label>
              <input type="range"  onChange={(e)=>setPriceInput(Number(e.target.value))} value={priceInput} name="" min={10} max={10000} id="" />
                <label htmlFor="min-price">$10,000</label>
            </div>
            <input type="number" value={priceInput} onChange={(e)=>setPriceInput(Number(e.target.value))} name="price" id="price" min={10} max={1000} className="border outline-none py-2 px-4 w-full rounded-sm" />
          </div>
        </div>
        
        <div className="w-full flex items-center justify-between mt-3 gap-5">
            <button type="button" className="border w-1/2 border-blue-950 px-6 rounded-md font-medium text-lg outline-none text-blue-950 py-2">Reset</button>
            <button type="button" className="bg-blue-950 w-1/2 px-6 rounded-md font-medium text-lg outline-none text-white py-2">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
