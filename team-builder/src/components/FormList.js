import React from 'react';

const FormList = (props) => {
    return (
        <div>
            {props.teamMembers.map( memeber => (
                <div>
                    <h2>{memeber.role}</h2>
                    <p><span>{memeber.name}</span></p>
                    <p>{memeber.email}</p>
                    
                </div>
            ))}
        </div>
    );
};

export default FormList;