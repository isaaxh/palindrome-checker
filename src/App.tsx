import { useEffect, useState } from "react";
import "./App.css";

// get the word - done
// Split the word into an array
// have a reversed array of the same word
// Compare each characters

const App = () => {
  const [inputText, setInputText] = useState<string>();
  const [textArr, setTextArr] = useState<string[] | undefined>([]);
  const [reversedArr, setReversedArr] = useState<string[] | undefined>([]);

  const splitTextToArray = (text: string | undefined) => {
    const textArray = text?.split("");

    setTextArr(textArr);
    reverseTextArray(textArray);
  };

  const reverseTextArray = (textArr: string[] | undefined) => {
    const reversedArr: string[] = [];

    textArr?.forEach((char) => {
      reversedArr.unshift(char);
    });

    setReversedArr(reversedArr);
  };

  const handleBtnClick = (text: string | undefined) => {
    splitTextToArray(text);
  };

  useEffect(() => {
    console.log(reversedArr);
  }, [reversedArr]);

  return (
    <div className='container'>
      <div className='question-container'>
        <h1 className='title'>Palindrome Checker</h1>
        <div className='input-container'>
          <input
            className='input-text'
            type='text'
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Enter a text here...'
          />
        </div>
      </div>
      <div className='output-container'>
        <h1 className='title'>Output</h1>
        <div className='output'></div>
      </div>
      <div className='btn-container'>
        <button
          className='btn-reverse'
          type='button'
          onClick={() => handleBtnClick(inputText)}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default App;
