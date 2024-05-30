import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  
}

function Message(props){
  return(
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
)
}
export default App;
