interface Option {
  label: string;
  description?: string;
  subOptions?: {
    question: string;
    options: Option[];
  };
  careers?: {
    title: string;
    description: string;
    requirements: string[];
    skills: string[];
    opportunities: string[];
  }[];
}

interface QuizStep {
  question: string;
  options: Option[];
}

export const quizData: QuizStep[] = [
  {
    question: "What interests you most?",
    options: [
      {
        label: "Technology",
        description: "Explore the world of digital innovation",
        subOptions: {
          question: "Which area of technology interests you?",
          options: [
            {
              label: "Software Development",
              careers: [
                {
                  title: "Full Stack Developer",
                  description: "Build complete web applications from front to back end",
                  requirements: ["Bachelor's in CS/IT", "Programming knowledge", "Problem-solving skills"],
                  skills: ["JavaScript", "Python", "Databases", "Web Technologies"],
                  opportunities: ["Tech Companies", "Startups", "Freelancing", "Remote Work"]
                },
                {
                  title: "Mobile App Developer",
                  description: "Create applications for smartphones and tablets",
                  requirements: ["Programming background", "Mobile development knowledge"],
                  skills: ["Swift", "Kotlin", "React Native", "Flutter"],
                  opportunities: ["App Development Companies", "Tech Giants", "Independent Development"]
                }
              ]
            },
            {
              label: "Artificial Intelligence",
              careers: [
                {
                  title: "Machine Learning Engineer",
                  description: "Develop AI systems and algorithms",
                  requirements: ["Advanced degree in CS/AI", "Strong mathematics background"],
                  skills: ["Python", "TensorFlow", "Mathematical Modeling", "Data Analysis"],
                  opportunities: ["Research Labs", "Tech Companies", "AI Startups"]
                }
              ]
            },
            {
              label: "Cybersecurity",
              careers: [
                {
                  title: "Security Analyst",
                  description: "Protect systems and networks from cyber threats",
                  requirements: ["Security certifications", "Network knowledge"],
                  skills: ["Network Security", "Ethical Hacking", "Risk Assessment"],
                  opportunities: ["Security Firms", "Banks", "Government Agencies"]
                }
              ]
            }
          ]
        }
      },
      {
        label: "Science",
        description: "Discover scientific research and innovation",
        subOptions: {
          question: "Which scientific field interests you most?",
          options: [
            {
              label: "Biotechnology",
              careers: [
                {
                  title: "Biotech Researcher",
                  description: "Research and develop biological solutions",
                  requirements: ["Biology degree", "Lab experience"],
                  skills: ["Lab Techniques", "Research Methods", "Data Analysis"],
                  opportunities: ["Research Institutes", "Pharmaceutical Companies"]
                }
              ]
            },
            {
              label: "Environmental Science",
              careers: [
                {
                  title: "Environmental Consultant",
                  description: "Help organizations maintain environmental standards",
                  requirements: ["Environmental Science degree", "Field experience"],
                  skills: ["Environmental Assessment", "Data Collection", "Report Writing"],
                  opportunities: ["Consulting Firms", "Government Agencies", "Non-profits"]
                }
              ]
            }
          ]
        }
      },
      {
        label: "Business",
        description: "Explore entrepreneurship and management",
        subOptions: {
          question: "Which aspect of business interests you?",
          options: [
            {
              label: "Marketing",
              careers: [
                {
                  title: "Digital Marketing Manager",
                  description: "Plan and execute marketing strategies",
                  requirements: ["Marketing degree", "Digital marketing certifications"],
                  skills: ["Social Media Marketing", "Analytics", "Content Strategy"],
                  opportunities: ["Marketing Agencies", "Corporate Marketing", "Consulting"]
                }
              ]
            },
            {
              label: "Finance",
              careers: [
                {
                  title: "Financial Analyst",
                  description: "Analyze financial data and market trends",
                  requirements: ["Finance degree", "Financial modeling skills"],
                  skills: ["Financial Analysis", "Excel", "Risk Assessment"],
                  opportunities: ["Banks", "Investment Firms", "Corporate Finance"]
                }
              ]
            }
          ]
        }
      }
    ]
  }
];