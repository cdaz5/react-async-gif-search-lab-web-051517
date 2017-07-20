import React from 'react';

const GifSearch = ({ fireFetch, updateSearchTerm }) =>
  <form onSubmit={fireFetch}>
    <input type='text' onChange={updateSearchTerm}/>
    <button type='submit'>Search</button>
  </form>





export default GifSearch
