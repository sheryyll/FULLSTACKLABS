import React from 'react';
import IssueTable from './IssueTable';

function App(){
  const issues = [
    {id: 1, title: "login button issue", description: "login button not working effectively", status: "open"},
    {id: 2, title: "signup button issue", description: "signup button not working effectively", status: "closed"},
    {id: 3, title: "logout button issue", description: "logout button not working effectively", status: "open"},
  ];

  return(
    <div>
      <h1>Issue Table</h1>
      <IssueTable issues={issues} />
    </div>
  )
}

export default App;