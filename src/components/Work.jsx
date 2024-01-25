import React from 'react';

const certifications = [
  {
    title: 'AWS essentials training for developers',
    institution: 'LinkedIn learning ',
    year: 2023,
  },
  {
    title: 'Analyzing and Visualizing Data with Microsoft Power BI',
    institution: 'LinkedIn learning ',
    year: 2023,
  },

  {
    title: 'Reinforcement Learning',
    institution: 'Alberta Machine Intelligence Institute (Amii)',
    year: 2022,

  },
  // Add more certifications here
];

const workExperiences = [
    {
      role: 'Co-op Systems Engineer',
      company: 'Collins Aerospace',
      duration: 'May 2023 – August 2023',
      points: [
        'Contributed to the integration of software applications, ensuring performance and stability were aligned with high standards using Python, VRig, and Matlab, which enhanced system operations.',
        'Conducted in-depth analysis and gained expertise in the Radar Altimeter (RALT) system, contributing to a comprehensive understanding of its complex functionality and impact within the aerospace industry.',
        'Designed the Media Loader.py tool to improve efficiency in managing VRig setups by automating tasks and streamlining database updates,significantly accelerating the build process.',
        'Utilized Microsoft Teams and Excel to optimize team coordination and monitor project progress.'
      ]
    },
    {
      role: 'Sales Ambassador',
      company: 'SDI Marketing',
      duration: 'January 2021 – April 2021',
      points: [
        'Expertly promoted the NEO Financial Credit Card by aligning its features with customer needs for optimal relevance and appeal.',
        'Provided tailored product demonstrations, addressing individual customer requirements to enhance product understanding.',
        'Continuously updated my knowledge of current promotions, ensuring accurate and timely responses to customer inquiries.',
        'Successfully increased card sign-ups by 25% within a four-month period, reflecting effective sales strategies and high customer satisfaction.'
      ]
    },
    // Add more experiences here
  ];
  




const Work = () => {
    return (
        <div name="work" className="work-section">
 

        <div className="bg-[#0a192f] text-gray-300 p-8 flex justify-center items-center min-h-screen ">
        <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-full max-w-4xl">
          
        <div className="mb-8 px-4 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">
        <span className="border-b-4 border-cyan-500">       
            Work Experience
        </span>
            </h2>
            <div className="flex flex-col items-end space-y-4"></div>
            {workExperiences.map((experience, index) => (
                <div key={index} className="bg-[#0a192f] p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold">{experience.role} - {experience.company}</h3>
                <p>{experience.duration}</p>
                <ul className="text-left list-disc list-inside space-y-1">
                    {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                    ))}
                </ul>
                </div>
            ))}
          </div>
          <div className="mb-8 px-4 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="border-b-4 border-cyan-500">
              Certifications
            </span>
            </h2>
            <div className="flex flex-col items-end space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-[#112240] p-6 rounded-lg w-full">
                <h3 className="text-left font-semibold">{cert.title}</h3>
                <p>{cert.institution} - {cert.year}</p>
              </div>
            ))}
          </div>
          </div>
  
          
        </div>
      </div>
      </div>
    );
  };
export default Work;
