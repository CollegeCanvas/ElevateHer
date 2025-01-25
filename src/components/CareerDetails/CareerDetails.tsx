import React from 'react';
import { 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Briefcase,
  GraduationCap,
  Award,
  Target,
  BookMarked,
  Globe,
  MessageSquare
} from 'lucide-react';

interface CareerDetailsProps {
  career: {
    title: string;
    description: string;
    requirements: string[];
    skills: string[];
    opportunities: string[];
  };
  onBack: () => void;
}

export function CareerDetails({ career, onBack }: CareerDetailsProps) {
  const roadmap = [
    {
      level: "Foundation",
      steps: [
        "Complete basic education requirements",
        "Develop fundamental skills",
        "Explore introductory courses",
        "Join relevant communities"
      ]
    },
    {
      level: "Intermediate",
      steps: [
        "Pursue higher education",
        "Obtain essential certifications",
        "Build practical experience",
        "Network with professionals"
      ]
    },
    {
      level: "Advanced",
      steps: [
        "Specialize in specific areas",
        "Lead projects and teams",
        "Contribute to the community",
        "Stay updated with trends"
      ]
    }
  ];

  const resources = {
    courses: [
      { name: "Coursera Professional Certificates", url: "https://coursera.org" },
      { name: "edX Career Programs", url: "https://edx.org" },
      { name: "LinkedIn Learning Paths", url: "https://linkedin.com/learning" }
    ],
    certifications: [
      "Industry-standard certifications",
      "Professional association credentials",
      "Specialized technical certifications"
    ],
    communities: [
      "Professional associations",
      "Online forums and discussion groups",
      "Local meetup groups",
      "Industry conferences"
    ]
  };

  const marketInsights = {
    trends: [
      "Growing demand in emerging markets",
      "Increasing adoption of new technologies",
      "Remote work opportunities",
      "Cross-functional collaboration"
    ],
    salaryRange: {
      entry: "$50,000 - $70,000",
      mid: "$70,000 - $100,000",
      senior: "$100,000+"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-700 mb-4 flex items-center"
        >
          ← Back to Quiz
        </button>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{career.title}</h1>
        <p className="text-xl text-gray-600">{career.description}</p>
      </div>

      {/* Career Roadmap */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Target className="h-6 w-6 mr-2 text-blue-600" />
          Career Roadmap
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {roadmap.map((stage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{stage.level}</h3>
              <ul className="space-y-3">
                {stage.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm text-blue-600 font-medium">{stepIndex + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills and Requirements */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
            Required Skills
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <ul className="space-y-3">
              {career.skills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <Trophy className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-2 text-blue-600" />
            Educational Requirements
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <ul className="space-y-3">
              {career.requirements.map((req, index) => (
                <li key={index} className="flex items-center">
                  <Award className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
          Market Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Trends</h3>
            <ul className="space-y-3">
              {marketInsights.trends.map((trend, index) => (
                <li key={index} className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{trend}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Salary Ranges</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Entry Level</span>
                <span className="font-semibold text-gray-900">{marketInsights.salaryRange.entry}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Mid Level</span>
                <span className="font-semibold text-gray-900">{marketInsights.salaryRange.mid}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Senior Level</span>
                <span className="font-semibold text-gray-900">{marketInsights.salaryRange.senior}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <BookMarked className="h-6 w-6 mr-2 text-blue-600" />
          Learning Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-600" />
              Online Courses
            </h3>
            <ul className="space-y-3">
              {resources.courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-blue-600" />
              Certifications
            </h3>
            <ul className="space-y-3">
              {resources.certifications.map((cert, index) => (
                <li key={index} className="flex items-center">
                  <Award className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-gray-700">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Communities
            </h3>
            <ul className="space-y-3">
              {resources.communities.map((community, index) => (
                <li key={index} className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                  <span className="text-gray-700">{community}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Job Opportunities */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
          <Briefcase className="h-6 w-6 mr-2 text-blue-600" />
          Career Opportunities
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <ul className="space-y-4">
            {career.opportunities.map((opportunity, index) => (
              <li key={index} className="flex items-center">
                <DollarSign className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{opportunity}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}