// Basic Forms

import * as React from 'react';

// Extra Credit 2
function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.username.value;

    onSubmitUsername(value);
  }

  function handleChange(event) {
    const {value} = event.target;
    const isLowerCase = value === value.toLowerCase();
    setError(isLowerCase ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
