import "./App.css";

const App = () => {
  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Palindrome Checker</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
            placeholder='Enter a text here...'
          />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'></div>
      </div>
      <div className='btn-container'>
        <button className='btn-reverse' type='button'>
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
