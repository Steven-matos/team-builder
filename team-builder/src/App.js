import React, {useState} from 'react';
import Form from './components/Form';
import FormList from './components/FormList';
import './App.css';


function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Steven M.',
      jobTitle: 'Front End Web Dev.'
    }
  ]);

  const addNewTeamMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      jobTitle: member.jobTitle
    };
    setTeamMembers([...teamMembers, newMembers])
  }



  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form />
      <FormList teamMembers={teamMembers} />

    </div>
  );
}

export default App;
