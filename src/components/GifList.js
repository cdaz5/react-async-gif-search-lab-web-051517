import React from 'react';

const GifList = ({ gifs }) =>
  <ul>
    {gifs.map((gif, index) => <li><iframe src={gif.embed_url} /></li>)}
  </ul>



export default GifList;
