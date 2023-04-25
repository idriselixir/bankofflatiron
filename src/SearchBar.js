import { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    props.onSearchChange(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;