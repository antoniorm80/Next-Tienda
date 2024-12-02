const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input type="text" name="min" id="" placeholder="min price" className="text-xs rounded-2xl pl-2 w-60 ring-1 ring-gray-400" />
        <input type="text" name="max" id="" placeholder="max price" className="text-xs rounded-2xl pl-2 w-60 ring-1 ring-gray-400" />
          {/* TODO: Filter Categories */}
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>       
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All filters</option>          
        </select>
      </div>
      <div className="">
      <select
          name=""
          id=""
          className="py-2 px-6 pl-2 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-600"
        >
           <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>        
        </select>

      </div>
    </div>
  );
};

export default Filter;
