import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e) => {
    if(e.key === "Enter") {
        const query = e.target.value;
        if(location.pathname === "/blogs") {
            setSearchParams({ ...Object.fromEntries(searchParams), search: query });
        } else {
            navigate(`/blogs?search=${query}`);
        }
    }
  };

  return (
    <div className="bg-gray-100 p-2 outline-none rounded-full flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        type="text"
        placeholder="Search a Blog..."
        className="bg-transparent outline-none"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
