//Users will be able to create their listings here

const CreateListing = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-3xl mt-6 text-yellow-950">Create A Listing</h3>
      <div className=" flex items-center justify-center">
        <form className="flex m-auto w-screen gap-6  px-8 mt-6">
          <div className="flex w-1/2 flex-col gap-5">
            <input
              type="text"
              className=" rounded border outline-none py-2 px-3"
              name="name"
              id="name"
              placeholder="Name"
            />
            <textarea
              name="description"
              id="description"
              cols="30"
              placeholder="Description"
              rows="10"
              className=" rounded max-h-40 border outline-none py-2 px-3 resize-none"
            ></textarea>
            <input
              type="text"
              name="address"
              id="address"
              className="border rounded outline-none py-2 px-3"
              placeholder="Address"
            />
            <div className="flex items-center  justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="rent" id="rent" />
                <span>Rent</span>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" name="sell" id="sell" />
                <span>Sales</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" name="School" id="school" />
                <span>School</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="houses" id="houses" />
                <span>Houses</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="hotels" id="hotels" />
                <span>Hotels</span>
              </div>
            </div>
            <input
              className="border rounded outline-none py-2 px-3"
              type="text"
              name="location"
              id="location"
              placeholder="Country"
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-semibold">$</span>
                <input
                  type="number"
                  className="border rounded outline-none py-2 px-3"
                  placeholder="Price"
                  name="price"
                  min="25"
                  max="10000"
                  id=""
                />
              </div>
              <input
                type="number"
                className="border rounded outline-none py-2 px-3"
                name="years"
                placeholder="Years"
                min="1"
                max="10"
                id=""
              />
            </div>
          </div>
          <div className=" flex w-1/2 flex-col gap-5">
            <div className="flex rounded justify-between items-center border px-1">
              <input type="file" name="images" id="images" />
              <button
                className="py-3 px-4 border rounded border-yellow-800 hover:bg-yellow-700 hover:text-white"
                type="button"
              >
                Upload
              </button>
            </div>
            <button
              className="bg-yellow-500 text-white font-semibold py-2 rounded text-xl hover:transition hover:bg-yellow-200 hover:text-slate-800"
              type="submit"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateListing;
