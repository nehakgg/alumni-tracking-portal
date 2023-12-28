import React, { useState } from 'react';

const Search = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState(''); 
  const [graduationYear, setGraduationYear] = useState('');
  const [roll, setRoll] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Add search logic here
    
    fetch(`http://localhost:5000/search/${username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data); // Handle the response from the server here
      })
      .catch((error) => {
        console.error(error);
      });
  };
    
  return (
    <div>
      <h2>User Search</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>

      {searchResult && (
        <div>
          <h3>Search Result</h3>
          <p>Username: {searchResult.username}</p>
          <p>Roll No.: {searchResult.roll}</p>

          <p>Email: {searchResult.email}</p>
          <p>Branch: {searchResult.branch}</p>
          <p>graduation Year: {searchResult.graduationYear}</p>

          {/* Add other user details here */}
        </div>
      )}
    </div>
  );
};

export default Search;
