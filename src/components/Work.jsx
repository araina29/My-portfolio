import React from 'react';

// Sample data for work experience, you can replace it with your actual data
const experiences = [
  {
    company: "Company A",
    role: "Frontend Developer",
    duration: "Jan 2020 - Present",
    tasks: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and React.",
      "Collaborated with other team members to innovate on current technology and optimize existing codebase for better performance.",
      "Participated in team meetings to define and refine workflow processes."
    ]
  },
  {
    company: "Company B",
    role: "React Developer",
    duration: "May 2018 - Dec 2019",
    tasks: [
      "Built reusable React components and front-end libraries for future use.",
      "Translated designs and wireframes into high-quality code.",
      "Optimized components for maximum performance across a vast array of web-capable devices and browsers."
    ]
  }
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div className='work-experience-section'>
      <h2 className='section-title'>Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className='experience'>
          <h3 className='experience-role'>{exp.role} - {exp.company}</h3>
          <p className='experience-duration'>{exp.duration}</p>
          <ul className='experience-tasks'>
            {exp.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
