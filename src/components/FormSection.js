import React, { useState } from 'react';

const FormSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('AdvertisementJournal');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="formsection">
      <form method="get" action="/search" className="search_form">
        <label style={{ color: 'white', fontWeight: 'bold' }}>Select Category:</label>
        <select
          name="category"
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="AdvertisementJournal">Advertisement Journal</option>
          <option value="AdvertisementNewspaper">Advertisement Newspaper</option>
          <option value="ArticleJournal">Article Journal</option>
          <option value="ArticleNewspaper">Article Newspaper</option>
          <option value="BookHistorical">Book Historical</option>
          <option value="BookTechnical">Book Technical</option>
          <option value="PhotographCommercial">Photograph Commercial</option>
          <option value="PhotographPersonal">Photograph Personal</option>
          <option value="SalesBrochure">Sales Brochure</option>
          <option value="SalesRecord">Sales Record</option>
        </select>
        <div className="d-flex">
          <input
            type="text"
            name="search"
            placeholder="Search item by title"
            aria-label="Search"
            className="form-control me-1"
          />
          <button type="submit" className="btn btn-success">Search</button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;
