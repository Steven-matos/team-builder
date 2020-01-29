import React from 'react';

const FormList = (props) => {
    return (
        <div>
            {props.teamMembers.map( memeber => (
                <div>
                    <h2>{memeber.name}</h2>
                    <p>{memeber.jobTitle}</p>
                </div>
            ))}
        </div>
    );
};

export default FormList;