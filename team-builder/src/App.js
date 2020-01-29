import React, {useState} from 'react';
import Form from './components/Form';
import FormList from './components/FormList';
import './App.css';


function App() {

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Steven M.',
      email: 'StevenM@lambda.com',
      role: 'Front End Web Dev.'
    }
  ]);

  const addNewTeamMember = member => {
    const newMembers = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      jobTitle: member.role
    };
    setTeamMembers([...teamMembers, newMembers])
  }

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewTeamMember={addNewTeamMember} />
      <FormList teamMembers={teamMembers} />

    </div>
  );
}

export default App;
