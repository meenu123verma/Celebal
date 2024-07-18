import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const db = firebase.firestore();

    try {
      const querySnapshot = await db.collection('yourCollection')
        .where('fieldToSearch', '>=', searchTerm.toLowerCase())
        .where('fieldToSearch', '<=', searchTerm.toLowerCase() + '\uf8ff')
        .get();

      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });

      setSearchResults(results);
    } catch (error) {
      console.error('Error searching documents: ', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{/* Render your search results here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
