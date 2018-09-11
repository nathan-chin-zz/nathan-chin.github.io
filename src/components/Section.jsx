import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from './Text.jsx';
import Chip from './Chip.jsx';
import Timeline from './Timeline.jsx';
import Event from './Event.jsx';
import Carousel from './Carousel.jsx';
import universityLogo from '../assets/UT_logo.png';
import aboutLogo from '../assets/About_Logo.png';
import hudlLogo from '../assets/Hudl_Logo.png';
import krewLogo from '../assets/Krew_Logo.png';
import targetLogo from '../assets/Target_Logo.png';
import pinstackLogo from '../assets/Pinstack_Logo.png';
import tennisLogo from '../assets/Tennis_Logo.png';
import freetailLogo from '../assets/Freetail_Logo.png';
import ieeeLogo from '../assets/IEEE_Logo.png';
import hackLogo from '../assets/Indigitous_HACK_Logo.png';
import aacmLogo from '../assets/AACM_Logo.png';
import project1 from '../assets/Project_ChillPill.png';
import project2 from '../assets/Project_Personal_Website.png';
import project3 from '../assets/Project_Sward.png';
import project4 from '../assets/Project_WorldView.png';
import project5 from '../assets/Project_RoundUp.png';
import project6 from '../assets/Project_Tower_Titans.png';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import '../style/Section.scss';

export default class Section extends Component {
    constructor(props){
        super(props);

        this.state = {
            workExperience: true,
        }
    }

    toggleExperience() {
        let curr = this.state.workExperience;
        this.setState({ workExperience: !curr });
    }

    renderIntro() {
        return(
            <div className="title-text-container">
                <Text className="title-text-1" weight="light">Hi, I'm</Text>
                <Text className="title-text-2" weight="extrabold">Nathan Chin</Text>
                <Typist className="labels-animation-container" cursor={{ blink: true, hideWhenDone: true, hideWhenDoneDelay: 1500 }}>
                    <Text>Student</Text>
                    <Typist.Delay ms={2000} />
                    <Text>, Hackathon Director</Text>
                    <Typist.Delay ms={2000} />
                    <Text>, Software Engineer</Text>
                </Typist>
            </div>
        );

    }

    renderAbout() {
        return (
            <div className="about-container">
                <Text className="about-title" weight="extrabold">About</Text>
                <div className="about-description">
                    <Text weight="regular">Hi, my name is Nathan Chin, and I'm a current third-year electrical and computer engineering student at The University of Texas at Austin</Text>
                    <div className="divider"/>
                    <div className="education-container">
                        <img className="logo" src={universityLogo}/>
                        <div className="school" style={{ marginRight: "4rem" }}>
                            <Text weight="semibold" size="1.25rem">THE UNIVERSITY OF TEXAS AT AUSTIN</Text>
                            <Text weight="regular" size="1.25rem">Bachelor of Science: Electrical and Computer Engineering</Text>
                            <Text weight="regular">Primary technical core: Software Engineering<br/>Secondary technical core: Computer Architecture/Embedded Systems<br/>Minor: Business Foundations</Text>
                            <div className="coursework">
                                <Text weight="semibold" size="1.25rem">Relevant Coursework</Text>
                                <div><Text weight="regular" className="class-name">EE 460N: Computer Architecture</Text> <Chip label="C" color="#5a75ba"/> <Chip label="LC-3 ASSEMBLY" color="#25344c"/></div>
                                <div><Text weight="regular" className="class-name">EE 360C: Algorithms</Text> <Chip label="JAVA" color="#ec2025"/> </div>
                                <div><Text weight="regular" className="class-name">EE 107S: Intro to Python</Text> <Chip label="PYTHON" color="#ffd647"/> </div>
                                <div><Text weight="regular" className="class-name">EE 119: Professional Development</Text></div>
                                <div><Text weight="regular" className="class-name">EE 313: Linear Systems and Signals</Text> <Chip label="MATLAB" color="#f97e0f"/></div>
                                <div><Text weight="regular" className="class-name">EE 312: Software Design & Implementation I</Text> <Chip label="C" color="#5a75ba"/> <Chip label="C++" color="#009688"/></div>
                                <div><Text weight="regular" className="class-name">EE 107S: Intro to Linux</Text> <Chip label="BASH" color="#80b3ff"/> </div>
                                <div><Text weight="regular" className="class-name">EE 411: Circuit Theory</Text></div>
                                <div><Text weight="regular" className="class-name">EE 319K: Intro to Embedded Systems</Text> <Chip label="C" color="#5a75ba"/> <Chip label="LC-3 ASSEMBLY" color="#25344c"/> </div>
                                <div><Text weight="regular" className="class-name">EE 316: Digital Logic Design</Text> <Chip label="VHDL" color="#000000"/></div>
                                <div><Text weight="regular" className="class-name">EE 306: Intro to Computing</Text> <Chip label="LC-3 ASSEMBLY" color="#25344c"/> </div>
                                <div><Text weight="regular" className="class-name">EE 302: Intro to Electrical Engineering</Text> <Chip label="LABVIEW" color="#90c584"/></div>
                                <div><Text weight="regular" className="class-name">M 427J: Differential Equations with Linear Algebra</Text></div>
                                <div><Text weight="regular" className="class-name">M 325K: Discrete Mathematics</Text></div>
                                <div><Text weight="regular" className="class-name">M 340L: Matrices and Matrix Calculations</Text></div>
                                <div><Text weight="regular" className="class-name">M 408D: Sequences, Series, and Multivariable Calculus</Text></div>
                                <div><Text weight="regular" className="class-name">M 408C: Differential and Integral Calculus</Text></div>
                                <div><Text weight="regular" className="class-name">LIN 353C: Computational Linguistics</Text> <Chip label="PYTHON" color="#ffd647"/> </div>
                                <div><Text weight="regular" className="class-name">ACC 310F: Foundations of Accounting</Text></div>
                                <div className="divider"/>
                                <Text weight="semibold">Fall 2018</Text>
                                <div><Text weight="regular" className="class-name">EE 422C: Software Design & Implementation II</Text> <Chip label="JAVA" color="#ec2025"/> </div>
                                <div><Text weight="regular" className="class-name">EE 461S: Operating Systems</Text> <Chip label="C" color="#5a75ba"/> </div>
                                <div><Text weight="regular" className="class-name">EE 333T: Engineering Communication</Text></div>
                                <div><Text weight="regular" className="class-name">CMS 315M: Interpersonal Communication Theory</Text></div>
                                <div><Text weight="regular" className="class-name">PED 104P: Tennis</Text></div>
                            </div>
                        </div>
                        <Text weight="regular">May 2020</Text>
                    </div>
                </div>
            </div>
        );
    }


    renderExperience() {
        if (this.state.workExperience) {
            return (
                <div className="experience-container">
                    <Text className="experience-title" weight="extrabold">Experience</Text>
                    <div className="experience-switch" onClick={this.toggleExperience.bind(this)}>
                        <div className="switch"/>
                    </div>
                    <Text weight="semibold" className="timeline-title">Work Experience</Text>
                    <Timeline state={this.state.workExperience}>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="left" 
                            color="#f26722" 
                            image={hudlLogo} 
                            label="Hudl" 
                            date="MAY 2018 - AUGUST 2018"
                            title="Software Development Intern"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Developed new features for the Hudl Assist football product in a .NET environment using C# and JavaScript (ES6, React)</li>
                                <li>Updated web page using React to create a filterable masonry layout that doubled user engagement and activity</li>
                                <li>Wrote a smart snapping algorithm in JavaScript to help analysts tag formations consistently, accurately and 25% faster</li>
                                <li>Learned to communicate effectively and accomplish goals through an adherence to Scrum practices</li>
                            </ul>}/> 
                        <Event 
                            workState={this.state.workExperience}
                            orientation="right" 
                            color="#3c3f58" 
                            image={krewLogo} 
                            label="Krew"
                            date="November 2017 - January 2018"
                            title="Android Developer"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Worked on developing the first iteration of the Krew Rideshare application for Android from scratch</li>
                                <li>Integrated REST APIs and the APIs of Facebook, Stripe, and Google Maps to manage logins, payments, and ride requests</li>
                            </ul>}/>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="left" 
                            color="#cc0000" 
                            image={targetLogo} 
                            label="Target"
                            date="May 2017 - Present"
                            title="Salesfloor Team Member"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Greet and attend to guests while maintaining the grocery section through restocking and back stocking</li>
                            </ul>}/>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="right" 
                            color="#e92229" 
                            image={pinstackLogo} 
                            label="Pinstack"
                            date="May 2016 - August 2016"
                            title="Gameroom Attendant"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Administered attractions like rock climbing and laser tag and interacted with guests through assistance and instruction</li>
                            </ul>}/>
                        <Event
                            workState={this.state.workExperience}
                            orientation="left"
                            color="#35d130"
                            image={tennisLogo}
                            label="Self Employed"
                            date="May 2016 - August 2016"
                            title="Tennis Instructor"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Prepared competitive youth tennis players for tournaments through training</li>
                            </ul>}/>
                    </Timeline>
                </div>
            );
        }
        else {
            return (
                <div className="experience-container">
                    <Text className="experience-title" weight="extrabold" color="white">Experience</Text>
                    <div className="experience-switch" onClick={this.toggleExperience.bind(this)} style={{ justifyContent: "flex-end", background: "#FFD98C" }}>
                        <div className="switch"/>
                    </div>
                    <Text weight="semibold" className="timeline-title" color="white">Leadership Experience</Text>
                    <Timeline>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="right" 
                            color="#222225" 
                            image={freetailLogo} 
                            label="Freetail Hackers"
                            date="March 2017 - Present"
                            title="Co-President, Outreach Organizer"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Lead a team of 30 students to promote active learning in tech, specifically by organizing hackathons on campus</li>
                                <li>Oversee UT Austin’s annual hackathon, HackTX, which caters to 750+ attendees on a $125k budget</li>
                            </ul>}/>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="left" 
                            color="#fdbb40" 
                            image={ieeeLogo} 
                            label="IEEE"
                            date="Fall 2016 - Present"
                            title="Assistant Officer - Events, Communications"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Manage the social media and registration for the local hosting of a global hackathon with 40+ attendees</li>
                            </ul>}/>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="right" 
                            color="#fc4513" 
                            image={hackLogo} 
                            label="#HACK"
                            date="July 2017 - Present"
                            title="Officer"
                            description={<ul style={{marginLeft: "1rem"}}>
                                <li>Organize logistics and advertise for professional development events that cater to 150+ electrical engineering students</li>
                            </ul>}/>
                        <Event 
                            workState={this.state.workExperience}
                            orientation="left" 
                            color="#1c75ba" 
                            image={aacmLogo} 
                            label="AACM"
                            date="Fall 2016 - Present"
                            title="Active Member"/>
                    </Timeline>
                </div>
            );
        }
    }

    renderProjects() {
        return (
            <div className="projects-container">
                <Text className="projects-title" weight="extrabold">Projects</Text>
                <Carousel>
                    <div className="carousel-page title">
                        <img className="project-image" src={project1}/>
                    </div>
                    <div className="carousel-page description">
                        <Text weight="bold" size="3rem">ChillPill</Text>
                        <Text weight="medium" size="1.5rem">What is it?</Text>
                        <Text weight="regular" size="1rem">ChillPill is an IoT pill dispenser controlled by your smartphone (only available for Android). The product includes a physical pill dispenser powered by an Intel Joule compute module. Using bluetooth, a smartphone communicates to the dispenser to release a specified number of pills at a certain time. The Joule is connected to two DC motors, allowing for the dispensing of the pills from their containers. The Android app allows for users to create accounts, control when pills are released, and be notified of medication time.</Text>
                        <br/><Text weight="medium" size="1.5rem">Why did you build this?</Text>
                        <Text weight="regular" size="1rem">This project was created at MedHacks 2017 following the medication adherance challenge presented by CVS Pharmacy. Medication adherance is a huge problem with about 50% of patients who stop taking medication within the first year of prescription. This project was created to help people a)remember to take their medication through phone notifications and b)make getting the medication easier.</Text>
                        <br/><Text weight="medium" size="1.5rem">How did you build this?</Text>
                        <Text weight="regular" size="1rem">Most of this project is only conceptual because this was a hackathon project developed in 36 hours. However, the Android application was close to completion and a working model of the dispenser was created to show how the pills are dispensed. The app was created in Android Studio and used Amazon Web Services to store user account data (in DynamoDB) and allow user login. The pill dispenser model was created using materials available at the hackathon. Made completely out of pizza/Rice Krispie boxes, hot glue, and string, the dispenser was a rough model of what the dispenser is supposed to look like (we actually CADed the real dispenser for 3D printing but there wasn't enough time or resources to print it). An Intel Joule compute module and DC motors were attached to the model, and it actually dispensed pills as it should in the real model.</Text>
                        <br/><Text weight="medium" size="1.5rem">Challenges faced?</Text>
                        <Text weight="regular" size="1rem">There were a lot of challenges with this project. The workload was a lot heavier this time because we decided to incorporate hardware by creating the working model of the dispenser and software by creating the phone app. Also, only 3 members of the team had programming experience, so programming the microcomputer for the dispenser and the Android application were pretty much individual roles. With this in mind, I'm super proud of what we were able to accomplish during the hackathon time and how prepared we were for the presentation. Lastly, a lot of challenges we ran into were with new technologies being used, such as AWS and Bluetooth connection. Bluetooth connection was actually never complete. We were only able to connect the devices but not send information between the two.</Text>
                        <br/><Text weight="medium" size="1.5rem">Your contribution?</Text>
                        <Text weight="regular" size="1rem">My contribution was the Android app built to communicate with the Intel Joule board and send notifications to the user. I initially incorporated AWS sign-in with the app, but decided to customize the accounts more by storing user data into Amazon DynamoDB. So the design of the app and all of its development came from me (with advice here and now from other team members of course).</Text>
                        <br/><Text weight="medium" size="1.5rem">Stats:</Text>
                        <Text weight="regular" size="1rem">Time spent: September 8, 2017 - September 10, 2017 (36 hours)</Text>
                        <Text weight="regular" size="1rem">Teammates: 4 (Peter Nguyen, Eric Wang, Jessica Wu, and Lauren Fang)</Text>
                        <Text weight="regular" size="1rem">Tools used: Java, Android Studio, DynamoDB, Amazon Web Services, and an Intel Joule compute module</Text>
                        <Text weight="regular" size="1rem">Links: • Github • Devpost</Text>
                        <Text weight="regular" size="1rem">Things learned:
• There are a lot of applications for the tech industry in the medical industry

• Working on projects is a great way to meet new people. I worked with people I had never met before and we not only worked well together but also relly enjoyed the experience

• Using harware on projects is a great way to get attention at hackathons

• There are a lot of real problems in the medical industry and a lot of ways technology can help
</Text>
<Text weight="regular" size="1rem">Looking to the future:
• Finish the app and try to work with the hardware myself

• Become more comfortable using AWS and databases

• Try to find more real life applications for projects I work on
</Text>
                    </div>
                    <div className="carousel-page title">
                        <img className="project-image" src={project2}/>
                    </div>
                    <div className="carousel-page description">
                        <h3>20</h3>
                    </div>
                    <div className="carousel-page title">
                        <img className="project-image" src={project3}/>
                    </div>
                    <div className="carousel-page description">
                        <h3>30</h3>
                    </div>
                    <div className="carousel-page title">
                        <img className="project-image" src={project4}/>
                    </div>
                    <div className="carousel-page description">
                        <h3>40</h3>
                    </div>
                    <div className="carousel-page title">
                        <img className="project-image" src={project5}/>
                    </div>
                    <div className="carousel-page description">
                        <h3>50</h3>
                    </div>
                    <div className="carousel-page title">
                        <img className="project-image" src={project6}/>
                    </div>
                    <div className="carousel-page description">
                        <h3>60</h3>
                    </div>
                </Carousel>
            </div>
        );
    }

    renderSkills() {
        return (
            <div className="skills-container">
                <Text className="skills-title" weight="extrabold">Skills</Text>
                <Text>Languages: JavaScript, Java, Python, C, C++, HTML, CSS/SCSS, C#, Assembly (arm and LC3), MATLAB</Text>
                <Text>Tools and Frameworks: React, Node.js, jQuery, Bootstrap, Git, </Text>
                <Text>Tools: Bash and cURL, Gulp, Amazon AWS, .NET</Text>
                <Text>Technologies: </Text>
            </div>
        );
    }

    renderContact() {
        return (
            <div style={{zIndex: 1000, position: "relative"}}>
            <Text weight="bold">Want to see my website for 2017? <a href="/2017">Check it out</a> </Text>
            </div>
        );
    }

    renderSection() {
        const title = this.props.title.toLowerCase();
        if(title === 'intro'){
            return this.renderIntro();
        } else if(title === 'about') {
            return this.renderAbout();
        } else if(title === 'experience') {
            return this.renderExperience();
        } else if(title === 'projects') {
            return this.renderProjects();
        } else if(title === 'skills') {
            return this.renderSkills();
        } else if(title === 'contact') {
            return this.renderContact();
        }
    }

    render() {
        const name = this.props.title.toLowerCase();
        return (
            <div className={`main ${name} ${name === "experience" && !this.state.workExperience ? "dark" : ""}`}>
                <div className="angle1"></div>
                <div className="angle2"></div>
                <div className="angle3"></div>
                { this.props.children }
                { this.renderSection() }
            </div>
        )
    }
    
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
