import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <input
	  className="rounded-xl text-xl px-4 placeholder:text-xl"
      type="search"
      value={searchTerm}
      onChange={handleSearch}
      placeholder="Search books..."
    />
  );
};

export default SearchBar;