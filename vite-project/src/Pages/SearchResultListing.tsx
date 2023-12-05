const SearchResultListing = () => {
  const handleSearch = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-center  bg-slate-600 py-3 ">
        <form
          onSubmit={(ev) => handleSearch(ev)}
          className="w-2/3 flex text-white  "
        >
          <input
            type="text"
            placeholder="Search listings"
            className="px-3 w-2/3 h-full py-2 bg-transparent border outline-none "
            name=""
            id=""
          />

          <button
            className="cursor-pointer px-4  border bg-yellow-600 "
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex">
        <div className="w-11">
          <div className="flex gap-2">
            <h3>Type</h3>
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
          </div>
          <div className="flex gap-2">
          <h3>Property Type</h3>
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
          </div>
        </div>
        <div className="w-full bg-red-400">Lover</div>
      </div>
    </div>
  );
};

export default SearchResultListing;
