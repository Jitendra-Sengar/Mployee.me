import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim()); // Trim to avoid spaces-only issues
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="w-5 h-5 text-subtext" />
          </div>
          <input
            type="text"
            className="bg-white border border-border text-heading text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="py-2.5 px-4 text-sm font-medium text-white bg-primary rounded-lg hover:bg-opacity-90 focus:ring-2 focus:outline-none focus:ring-primary/50 transition duration-150"
        >
          Search
        </button>
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="text-subtext text-sm px-3 py-2 border border-border rounded-lg hover:bg-gray-100 transition"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
