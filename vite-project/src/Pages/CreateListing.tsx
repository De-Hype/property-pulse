//Users will be able to create their listings here

const CreateListing = () => {
  return (
    <div>
      <h3>Create A Listing</h3>
      <form className="">
        <div className="">
          <input type="text" name="name" id="name" placeholder="Name" />
          <textarea
            name="description"
            id="description"
            cols="30"
            placeholder="Description"
            rows="10"
          ></textarea>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
          <div className="flex items-center">
            <div className="flex items-center">
              <input type="checkbox" name="rent" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="sell" id="sell" />
              <span>Sales</span>
            </div>
          </div>
          <div className="flex items-center">
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
            type="text"
            name="location"
            id="location"
            placeholder="Country"
          />
          <input type="number" placeholder="Price" name="price" min="25" max="10000" id="" />
          <input type="number" name="years" placeholder="Years" min="1" max="10" id="" />
        </div>
        <div className=""></div>
      </form>
    </div>
  );
};

export default CreateListing;
