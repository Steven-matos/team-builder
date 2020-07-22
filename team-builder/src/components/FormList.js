import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div `
    background: rgb(255,255,255, .7);
    width: 100%;
    max-width: 260px;
    margin: 2.5rem auto;
    -webkit-box-shadow: 10px 18px 21px -6px rgba(0,0,0,0.65);
    -moz-box-shadow: 10px 18px 21px -6px rgba(0,0,0,0.65);
    box-shadow: 10px 18px 21px -6px rgba(0,0,0,0.65);
    border-radius: 10px;
    h2 {
        font-family: 'Roboto', sans-serif;
        margin-top: 0;
        padding: 1.5rem 1rem 1rem 0;
        background: rgba(148,187,233,1);
        border-radius: 10px 10px 0 0;
    }
    p {
        padding-left: .7rem;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
    }
    p span {
        font-weight: bold;
    }
`;

const FormList = (props) => {
    return (
        <CardContainer>
            {props.teamMembers.map( memeber => (
                <Card>
                    <h2>{memeber.role}</h2>
                    <p><span>{memeber.name}</span></p>
                    <p>{memeber.email}</p>
                    
                </Card>
            ))}
        </CardContainer>
    );
};

export default FormList;