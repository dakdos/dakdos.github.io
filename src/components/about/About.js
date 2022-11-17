import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat tentang{firstName} 
            </p>
            <p>
                <span style={{color: info.baseColor}}>about {firstName} 
                    <span className={Style.green}>(main)</span> $ 
                </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills
            </p>
            <p>
                <span style={{color: info.baseColor}}>skills 
                    <span className={Style.green}>(main)</span> $
                </span> ls
            </p>
            <p style={{color: info.baseColor}}> </p>
            <ul className={Style.skills}>
                {info.skills.map((proficiency, index) => <li key={index}>{proficiency.proficientWith}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p>
                <span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd hobbies/interests
            </p>
            <p>
                <span style={{color: info.baseColor}}>hobbies/interests 
                    <span className={Style.green}>(main)</span> $
                </span> ls
            </p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}