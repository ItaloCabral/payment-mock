import React from 'react';
import { GlobalStyles } from 'styles';
import { Router } from 'router';
import { GlobalProvider } from 'contexts';

function App() {
  return (
    <>
      <GlobalProvider>
        <GlobalStyles />
        <Router />
      </GlobalProvider>
    </>
  );
}

export default App;
