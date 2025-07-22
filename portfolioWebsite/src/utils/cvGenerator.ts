import jsPDF from 'jspdf';

export interface CVData {
  name: string;
  rollNumber: string;
  degree: string;
  education: Array<{
    year: string;
    degree: string;
    institute: string;
    score: string;
  }>;
  projects: Array<{
    title: string;
    subtitle: string;
    date: string;
    points: string[];
  }>;
  competitions: Array<{
    title: string;
    subtitle: string;
    date: string;
    points: string[];
  }>;
  awards: string[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  coursework: {
    computerScience: string[];
    mathematics: string[];
  };
  responsibilities: Array<{
    title: string;
    organization: string;
    date: string;
    points: string[];
  }>;
}

export const cvData: CVData = {
  name: "DARAPU ADHITHYA SHIVA KUMAR REDDY",
  rollNumber: "22CS30019",
  degree: "B.Tech.(Hons.) in COMPUTER SCIENCE AND ENGINEERING and M.Tech. in COMPUTER SCIENCE AND ENGINEERING",
  education: [
    {
      year: "2027",
      degree: "M.TECH Dual Degree 5Y",
      institute: "IIT Kharagpur",
      score: "8.14 / 10"
    },
    {
      year: "2022",
      degree: "CBSE",
      institute: "Lakshya School",
      score: "95.4%"
    },
    {
      year: "2020",
      degree: "SSC",
      institute: "Aditya High School",
      score: "96%"
    }
  ],
  projects: [
    {
      title: "Multi-Process Restaurant System",
      subtitle: "Course Project | Prof. Abhijit Das",
      date: "[Mar 2025]",
      points: [
        "Simulated a dine-in restaurant in C using fork() system-call to create concurrent processes for customers, waiters, and cooks",
        "Implemented Inter-Process Communication using shmget(), shmat() and semget() for shared memory and semaphores",
        "Used semop() for process synchronization to avoid race conditions; applied usleep() for scaled real-time simulation control",
        "Optimized Resource Utilization by implementing circular queues for order management improving system efficiency"
      ]
    },
    {
      title: "Custom Transport Layer Protocol",
      subtitle: "Course Project | Prof. Sandip Chakraborty",
      date: "[Mar 2025]",
      points: [
        "Developed custom TCP over UDP, ensuring in-order delivery; well-structured design to handle 25 sockets via shared memory",
        "Multi-threaded system with R (receiver), S (sender) and G(garbage collector) threads for concurrent socket management",
        "Leveraged select() for non-blocking I/O with timeout ACKs; employed sleep() to enable efficient, timely re-transmissions",
        "Packaged a modular static C library for KTP socket APIs, enabling reusable, reliable communication with a protocol design"
      ]
    },
    {
      title: "GramPanchayat Management System",
      subtitle: "Course Project | Prof. Pabitra Mitra",
      date: "[Feb 2025]",
      points: [
        "Built a full-stack Gram Panchayat data management system using HTML, CSS, JavaScript, Bootstrap, Django, and PostgreSQL",
        "Developed Interactive dashboards for employees to manage biodata, land records, welfare schemes, and assets efficiently",
        "Devised role-based access control mechanism accounting for Villagers, Employees, Government Officials, and Administrators",
        "Enabled officials to access detailed reports on census data, land ownership, panchayat budget and public assets for oversight"
      ]
    },
    {
      title: "RISC Processor",
      subtitle: "Course Project | Prof. Indranil Sen Gupta",
      date: "[Oct 2024]",
      points: [
        "Built a 32-bit RISC Processor using Verilog, featuring a structured instruction encoding for opcode, registers, immediate data",
        "Integrated control signals and multiplexers to direct data flow for various instructions, enabling efficient ALU operations",
        "Executed Booths, Fibonacci Series and other complex algorithms on this processor in Vivado with 95% testbench coverage",
        "Created a detailed Instruction Set Architecture (ISA) for 26 different operations each mapped to a unique 6-bit opcode"
      ]
    }
  ],
  competitions: [
    {
      title: "Networksify Hackathon",
      subtitle: "OPTIMA",
      date: "[Nov 2023]",
      points: [
        "Secured a top-6 position in the final round, competing among 75+ teams from across India",
        "Developed a MIP model to optimize 15-day line haul routes for 4 vehicle types, incorporating ad-hoc costs across 50 hubs"
      ]
    },
    {
      title: "Paper Presentation",
      subtitle: "National Students' Space Challenge",
      date: "[Nov 2023]",
      points: [
        "Presented research on Mars colonization at NSSC; ranked top-10 out of 250+ teams in round one",
        "Advanced to top-6 finalists at NSSC paper presentation, applying engineering principles to aerospace system design"
      ]
    }
  ],
  awards: [
    "Secured a rank of 3364 out of 1.02 million in JEE Main-22, placing in the top 0.33% of applicants",
    "Secured a rank of 1916 out of 160,000 in JEE Advanced-22, placing in the top 1.2% of the aspirants",
    "Secured a rank of 261 out of 300,000 in EAPCET-22, placing in the top 0.1% of test-takers",
    "Felicitated with the prestigious National Talent Search Examination (NTSE-2020) Scholarship"
  ],
  skills: {
    languages: ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "TypeScript", "MIPS32", "Verilog"],
    frameworks: ["Numpy", "Django", "React", "Pandas", "C++ STL", "Bison", "Lex", "Bootstrap"],
    tools: ["Git", "Github", "Vivado", "FreeCAD", "AurdinoIDE", "Yacc", "PostgreSQL"]
  },
  coursework: {
    computerScience: [
      "Programming and Data Structures*", "Algorithms-1*", "Algorithms-2", "Compilers", "Data Analytics",
      "Discrete Structures", "Switching Circuits and Logic Design*", "Operating Systems*", "Computer Networks*",
      "Software Engineering*", "Formal Languages and Automata Theory", "Systems Programming Laboratory*",
      "Database Management Systems*", "Applications of Machine Learning in Biological Systems",
      "Computer Organisation and Architecture*"
    ],
    mathematics: [
      "Electrical Technology", "Advanced Calculus", "Linear Algebra, Numerical and Complex Analysis",
      "Basic Electronics", "Probability and Statistics", "Signals and Systems"
    ]
  },
  responsibilities: [
    {
      title: "Governor",
      organization: "Prasthanam | IIT Kharagpur",
      date: "[Aug'24-Apr'25]",
      points: [
        "Directed 3 stage plays and scripted 2 original productions, managing end-to-end execution from casting to live performance",
        "Organized and conducted 3 acting and scriptwriting workshops, enhancing member engagement and skill development"
      ]
    }
  ]
};

export const generateCV = () => {
  const doc = new jsPDF();
  const pageHeight = 297; // A4 page height in mm
  const margin = 20;
  const lineHeight = 6;
  let yPosition = margin;

  // Helper function to add text with automatic page break
  const addText = (text: string, x: number, fontSize: number = 10, fontStyle: string = 'normal') => {
    if (yPosition > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
    
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    
    const lines = doc.splitTextToSize(text, 170);
    lines.forEach((line: string) => {
      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
      doc.text(line, x, yPosition);
      yPosition += lineHeight;
    });
  };

  // Header
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(cvData.name, margin, yPosition);
  yPosition += 8;
  
  doc.setFontSize(12);
  doc.text(cvData.rollNumber, margin, yPosition);
  yPosition += 6;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const degreeLines = doc.splitTextToSize(cvData.degree, 170);
  degreeLines.forEach((line: string) => {
    doc.text(line, margin, yPosition);
    yPosition += lineHeight;
  });
  yPosition += 4;

  // Education
  addText('EDUCATION', margin, 12, 'bold');
  yPosition += 2;
  
  // Education table headers
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Year', margin, yPosition);
  doc.text('Degree/Exam', margin + 25, yPosition);
  doc.text('Institute', margin + 70, yPosition);
  doc.text('CGPA/Marks', margin + 130, yPosition);
  yPosition += lineHeight;
  
  doc.setFont('helvetica', 'normal');
  cvData.education.forEach(edu => {
    doc.text(edu.year, margin, yPosition);
    doc.text(edu.degree, margin + 25, yPosition);
    doc.text(edu.institute, margin + 70, yPosition);
    doc.text(edu.score, margin + 130, yPosition);
    yPosition += lineHeight;
  });
  yPosition += 4;

  // Projects
  addText('PROJECTS', margin, 12, 'bold');
  yPosition += 2;
  
  cvData.projects.forEach(project => {
    addText(`${project.title} | ${project.subtitle}`, margin, 10, 'bold');
    addText(project.date, margin, 9, 'italic');
    project.points.forEach(point => {
      addText(`• ${point}`, margin + 5, 9);
    });
    yPosition += 2;
  });

  // Competition/Conference
  addText('COMPETITION/CONFERENCE', margin, 12, 'bold');
  yPosition += 2;
  
  cvData.competitions.forEach(comp => {
    addText(`${comp.title} | ${comp.subtitle}`, margin, 10, 'bold');
    addText(comp.date, margin, 9, 'italic');
    comp.points.forEach(point => {
      addText(`• ${point}`, margin + 5, 9);
    });
    yPosition += 2;
  });

  // Awards and Achievements
  addText('AWARDS AND ACHIEVEMENTS', margin, 12, 'bold');
  yPosition += 2;
  
  cvData.awards.forEach(award => {
    addText(`• ${award}`, margin, 9);
  });
  yPosition += 4;

  // Skills and Expertise
  addText('SKILLS AND EXPERTISE', margin, 12, 'bold');
  yPosition += 2;
  
  addText(`Languages: ${cvData.skills.languages.join(' | ')}`, margin, 9);
  addText(`Frameworks and Libraries: ${cvData.skills.frameworks.join(' | ')}`, margin, 9);
  addText(`Tools and Softwares: ${cvData.skills.tools.join(' | ')}`, margin, 9);
  yPosition += 4;

  // Coursework Information
  addText('COURSEWORK INFORMATION', margin, 12, 'bold');
  yPosition += 2;
  
  addText(`Computer Science: ${cvData.coursework.computerScience.join(' | ')}`, margin, 9);
  addText(`Mathematics and Electronics: ${cvData.coursework.mathematics.join(' | ')}`, margin, 9);
  addText('(* Courses With Laboratory Component)', margin, 8, 'italic');
  yPosition += 4;

  // Positions of Responsibility
  addText('POSITIONS OF RESPONSIBILITY', margin, 12, 'bold');
  yPosition += 2;
  
  cvData.responsibilities.forEach(resp => {
    addText(`${resp.title} | ${resp.organization}`, margin, 10, 'bold');
    addText(resp.date, margin, 9, 'italic');
    resp.points.forEach(point => {
      addText(`• ${point}`, margin + 5, 9);
    });
  });

  // Save the PDF
  doc.save(`${cvData.name.replace(/\s+/g, '_')}_CV.pdf`);
};