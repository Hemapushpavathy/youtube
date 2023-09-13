// App.js

import { useState } from 'react';
import { Form } from './Component/Form';
import { Youtube } from './Component/Youtube';
import './Component/Form.css';

 

function App() {
  const [youtubeLink, setYoutubeLink]=useState(null);
  const [input, setInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [keyword, setKeyword] = useState('');

  const handleVideoSubmit = (e) => {
    e.preventDefault();
    setYoutubeLink(input);
    setInput('');
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // You can perform actions based on the selected language here
  };

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    // setSearchKeyword(keyword);
    setKeyword('');
  };
  return (
    <div className="container">
      <Form setYoutubeLink={setYoutubeLink} />
      <br></br>
      <Youtube youtubeLink={youtubeLink}/>
      <div className='form-container'> 
      <Notes/>
      <form className='custom-form' onSubmit={handleKeywordSubmit}>
        <div className='right-section'>
          <label className='form-label'>Search Keyword</label>
          <input
            type='text'
            className='custom-input'
            placeholder='Enter your keyword'
            required
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword || ''}
          />
        <button type='submit' className='custom-button1'>
          Search
        </button>
        <textarea  placeholder='Result' style={{width:"100%"}}/>

        </div>

      </form>
      </div>
    </div>
  );
}

export default App;
function Notes() {
  const [notes, setNotes] = useState(''); // State for notes
  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  // Function to download notes as a text file
  const downloadNotes = () => {
    const element = document.createElement("a");
    const file = new Blob([notes], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "notes.txt";
    document.body.appendChild(element);
    element.click();
  };

  return <div className='notes-section'>
  <label className='form-label'>Notes</label><br/>
  <textarea
  rows={10}
  cols={80}
    className='custom-textarea'
    placeholder='Enter your notes here'
    onChange={handleNotesChange}
    value={notes}
  />
  <button onClick={downloadNotes} className='custom-button2'>
    Download
  </button>
</div>
}