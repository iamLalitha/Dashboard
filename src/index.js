import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//strict mode is used to identify any deprecated tags are there or not. it just to check.
//the below line removes the strict mode. it is same as like above code lines from 6-10. 
//the below code jus removes the stirct mode.
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
