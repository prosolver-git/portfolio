import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Django'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'D3 Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'C++'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Java'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'MySQL'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'MongoDB'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Neo4J'} progress={'60%'} width={'60%'} />

            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Software Developement'}
                    text={'Developed a full stack word cloud application using Django and D3 Js'}
                />
                <ServicesSection image={intelligence} title={'Deep Learning'}
                    text={'Developed a Dog vs Cat Classifier using Tensorflow and Pytorch'}
                />
                <ServicesSection image={gamedev} title={'Research Intern'}
                    text={'Attended ACM Summer School'}
                />


            </div>

        </div>
    )
}

export default AboutPage;
