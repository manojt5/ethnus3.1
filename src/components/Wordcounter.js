import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  return (
    <div>
      <textarea
        placeholder="Type your text here..."
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="50"
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;
