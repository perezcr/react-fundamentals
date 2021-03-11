// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({onSubmitUsername}) {
  // Extra Credit 1
  // const userNameInputRef = React.useRef();

  // `event.preventDefault()` to prevent the default behavior of form submit (which refreshes the page).
  function handleSubmit(event) {
    // Prevent the default behavior of doing a post request to the same URL by doing a full-page refresh.
    event.preventDefault();
    // SyntheticEvent is actually not a real event from the browser, but it's a object that React creates for us that looks and behaves exactly like a regular event.
    // Most of the time, you won't know that you're interacting with a fake event or a SyntheticEvent from React.
    // You'll just assume that you're interacting with the native event.
    console.log(event);
    // If you need the native event then
    console.log(event.nativeEvent);

    // We can access to value at event.elements if the element has an id associated
    const value = event.target.elements.username.value;

    // Extra Credit 1
    // const value = userNameInputRef.current.value;
    onSubmitUsername(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Retrieved the value of the input in question by giving that input an ID associating that label  */}
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        {/* Extra Credit 1 */}
        {/* <input ref={userNameInputRef} id="username" type="text" /> */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
