import React, {useState} from 'react';
import styled from 'styled-components';

const Forms = styled.form `
    display: flex;
    flex-direction: column;
    width: 15%;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    button {
        background:    #94bbe9;
        border:        1px solid #535762;
        border-radius: 5px;
        box-shadow:    2px 2px #969696;
        padding:       8px 20px;
        color:         #ffffff;
        display:       inline-block;
        font:          normal bold 15px/1 "Montserrat", sans-serif;
        text-align:    center;
        text-shadow:   1px 1px #000000;
        width: 60%;
        margin: 1rem auto 0 auto;
        
    }
`;

const Label = styled.label `
    font-family: 'Montserrat', sans-serif;
    text-align: left;
    padding: .8rem 0;
    font-weight: bold;
    text-decoration: underline;
`;

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
        <Forms onSubmit={sumbitForm}>
            <Label htmlfor='name'>Name:</Label>
            <input 
                id='name'
                type='text'
                name='name'
                onChange={handleChange}
                value={info.name}
                />
            <Label htmlfor='email'>Email:</Label>
            <input
                id='email'
                type='email'
                name='role'
                onChange={handleChange}
                value={info.email}
            />
            <Label htmlfor='role'>Job Role:</Label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChange}
                value={info.role}
            />
            <button type='submit'>Submit</button>
        </Forms>
    );
};

export default Form;