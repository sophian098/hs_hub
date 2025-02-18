import React from 'react';
import Header from '../assets/header.jpg';
import Students from '../assets/students.jpg';
import UniStudents from '../assets/unistudents.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
          {/* Hero image */}
            <img src={Header} alt='/'/>
            {/* Hero title */}
            <h1>Highschool Hub</h1>
            {/* Hero subtitle */}
            <p>Built by students for students</p>
        </div>
      )
};

const SupportingStudentsSec = () => {
    return (
        <div>
          {/* Image */}
          <img src={Students} alt="Group of students" />
    
          {/* Title */}
          <h2>Students Supporting Students</h2>
    
          {/* Paragraph */}
          <p>
                We are a group of 2024 high school graduates dedicated to helping other high schoolers. 
                We know how it feels to be helpless, so we're here to provide the support we wish we had ourselves. 
                Learn more{' '}
          {/* Links */}
        <Link to="/about" className="text-red-500 underline">
        about us
        </Link>{' '}
        or get our{' '}
        <Link to="/courses" className="text-red-500 underline">
          resources.
        </Link>
      </p>

        </div>
      ); 
};

const PostSecondarySec = () => {
    return (
        <div>
            {/* Image */}
            <img src={UniStudents} alt="Group of students" />
            {/* Paragraph */}
            <p>Worried about Post-Secondary? We were accepted into top Canadian programs like 
                Waterloo Software Engineering, McMaster Health Sci, 
                Western IVEY AEO, UofT Rotman Commerce, UofT Life Sci, and so much more! 
                Discover tips on our{' '}
                <Link to="/blog" className="text-red-500 underline">
                blog
                </Link>
            </p>
        </div>
    );
};

const Home = () => {
  return (
    <div>
        {/* Render sections*/}
        <Hero />
        <SupportingStudentsSec />
        <PostSecondarySec />
    </div>
  )
}

export default Home;
