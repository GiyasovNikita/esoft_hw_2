import React from 'react'

const SkillCard = ({ skill }) => {
    return (
        <div className='skillcard'>
            <h3>
                {skill}
            </h3>
        </div>
    );
}

export default SkillCard