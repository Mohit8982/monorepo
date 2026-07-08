const FilterSidebar = () => {
  return (
    <aside className="filtersSidebar">
      <h2>Filters</h2>

      <div className="filterSection">
        <h3>Brand</h3>

        <label>
          <input type="checkbox" />
          Apple
        </label>

        <label>
          <input type="checkbox" />
          Samsung
        </label>

        <label>
          <input type="checkbox" />
          Vivo
        </label>

        <label>
          <input type="checkbox" />
          Oppo
        </label>
      </div>

      <div className="filterSection">
        <h3>RAM</h3>

        <label>
          <input type="checkbox" />4 GB
        </label>

        <label>
          <input type="checkbox" />6 GB
        </label>

        <label>
          <input type="checkbox" />8 GB
        </label>
      </div>

      <div className="filterSection">
        <h3>Price</h3>

        <label>
          <input type="checkbox" />
          Under ₹10,000
        </label>

        <label>
          <input type="checkbox" />
          ₹10,000 - ₹20,000
        </label>

        <label>
          <input type="checkbox" />
          Above ₹20,000
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
