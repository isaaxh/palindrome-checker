import { useEffect, useState } from "react";
import "./App.css";

// get the word - done
// Split the word into an array - done
// have a reversed array of the same word - done
// Compare each characters - done
// improve the code

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);
  const [output, setOutput] = useState<string>();

  const checkPalindrome = (str: string) => {
    const strLength = str?.length;
    const midStr = Math.floor(strLength / 2);

    for (let i = 0; i < midStr; i++) {
      if (str[i] !== str[strLength - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  const displayOutput = () => {
    isPalindrome ? setOutput("Palindrome") : setOutput("not Palindrome");
  };

  const handleBtnClick = (text: string) => {
    setIsPalindrome(() => checkPalindrome(text));
  };

  useEffect(() => {
    displayOutput();
  }, [isPalindrome]);

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
        <div className='output'>{output}</div>
      </div>
      <div className='btn-container'>
        <button
          className='btn'
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
