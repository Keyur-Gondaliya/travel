import React, { useEffect, useState } from "react";

export default function Continent(props) {
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = React.useRef(null);

  const [list, setList] = useState([...new Set(props.list)]);
  function onChange(event) {
    // if (!showSuggestions)
    setShowSuggestions(true);
    setInput(event.target.value);
    if (event.target.value) {
      setList(
        list.filter((customers) =>
          customers.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setList([...new Set(props.list)]);
    }
    console.log(list);
  }
  function focusInput() {
    inputRef.current.focus();
  }
  function selectSuggestion(item) {
    setInput(item);
    setShowSuggestions(false);
    focusInput();
  }

  return (
    <>
      <div class="form-group">
        <label for="exampleInputPassword1">Continent:</label>
        <input
          class="form-control ml-0"
          id="exampleInputPassword1"
          placeholder="Continent"
          ref={inputRef}
          type="text"
          value={input}
          onChange={onChange}
        />
        {showSuggestions ? (
          <div className="container">
            {list.map((item) => (
              <div className="item" onClick={() => selectSuggestion(item)}>
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}
