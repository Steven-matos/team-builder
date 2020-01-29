import React, {useState} from 'react';

const Form = ({ addNewTeamMember}) => {

    const [info, setInfo] = useState({
        name: '',
        email: '',
        jobTitle: ''
    })

    const handleChange = e => {
        setInfo({ ...info, [e.target.name]: e.target.value})
    }

    const sumbitForm = e => {
        e.preventDefault();
        addNewTeamMember(info);
        setInfo({name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={sumbitForm}>
            <label htmlfor='name'>Name:</label>
            <input 
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                value={info.name}
                />
            <label htmlfor='email'>Email:</label>
            <input
                id='email'
                type='email'
                name='role'
                onChange={handleChange}
                value={info.email}
            />
            <label htmlfor='role'>Job Role:</label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChange}
                value={info.role}
            />
            <button type='submit'>Submit Name</button>
        </form>
    );
};

export default Form;