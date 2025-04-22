import React, { useState } from 'react';
import './styles/App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
      <div className="App">
        <SearchBar
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search here..."
        />
        <p>Search Value: {searchValue}</p>
      </div>
  );
}

export default App;