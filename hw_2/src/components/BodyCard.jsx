import React from "react"
import Image from "./Image"
import TitleRow from "./TitleRow"
import ProfileName from "./ProfileName"
import CardGroup from "./CardGroup"


const BodyCard = ({ title, name, image, skills}) => {
    return (
        <div className='bodycard'>
            <TitleRow title = {title} />
            <ProfileName name = {name} />
            <Image image = {image} />
            <CardGroup title="Изучено" items={skills.exploredSkills} />
            <CardGroup title="Желаю изучить" items={skills.unexploredSkills} />
        </div>
    );
}

export default BodyCard