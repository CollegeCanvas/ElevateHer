import React, { useState } from 'react';
import { Brain, ChevronRight, ArrowLeft } from 'lucide-react';
import { quizData } from './quizData';
import { CareerDetails } from '../CareerDetails/CareerDetails';

interface CareerPath {
  title: string;
  description: string;
  requirements: string[];
  skills: string[];
  opportunities: string[];
}

export function CareerQuiz() {
  const [path, setPath] = useState<string[]>([]);
  const [currentCareers, setCurrentCareers] = useState<CareerPath[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);

  const getCurrentStep = () => {
    let current = quizData[0];
    let currentOptions = current.options;

    for (let i = 0; i < path.length; i++) {
      const selectedOption = currentOptions.find(opt => opt.label === path[i]);
      if (selectedOption?.subOptions) {
        current = selectedOption.subOptions;
        currentOptions = selectedOption.subOptions.options;
      }
    }
    return current;
  };

  const handleSelect = (option: string) => {
    const newPath = [...path, option];
    
    let current = quizData[0];
    let currentOptions = current.options;
    
    for (let i = 0; i < newPath.length; i++) {
      const selectedOption = currentOptions.find(opt => opt.label === newPath[i]);
      if (selectedOption?.subOptions) {
        current = selectedOption.subOptions;
        currentOptions = selectedOption.subOptions.options;
      }
      if (selectedOption?.careers) {
        setCurrentCareers(selectedOption.careers);
        setShowResults(true);
        break;
      }
    }
    
    setPath(newPath);
  };

  const handleBack = () => {
    if (selectedCareer) {
      setSelectedCareer(null);
      return;
    }
    
    if (showResults) {
      setShowResults(false);
    }
    const newPath = path.slice(0, -1);
    setPath(newPath);
    
    if (newPath.length > 0) {
      let current = quizData[0];
      let currentOptions = current.options;
      
      for (let i = 0; i < newPath.length; i++) {
        const selectedOption = currentOptions.find(opt => opt.label === newPath[i]);
        if (selectedOption?.subOptions) {
          current = selectedOption.subOptions;
          currentOptions = selectedOption.subOptions.options;
        }
        if (selectedOption?.careers) {
          setCurrentCareers(selectedOption.careers);
        }
      }
    }
  };

  const handleReset = () => {
    setPath([]);
    setCurrentCareers([]);
    setShowResults(false);
    setSelectedCareer(null);
  };

  const handleCareerSelect = (career: CareerPath) => {
    setSelectedCareer(career);
  };

  const currentStep = getCurrentStep();

  if (selectedCareer) {
    return <CareerDetails career={selectedCareer} onBack={handleBack} />;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Quiz Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold text-gray-900">Career Path Explorer</h3>
        {path.length > 0 && (
          <button
            onClick={handleBack}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
        )}
      </div>

      {/* Path Breadcrumbs */}
      {path.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 mb-6">
          {path.map((step, index) => (
            <React.Fragment key={index}>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {step}
              </span>
              {index < path.length - 1 && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Quiz Content */}
      {!showResults ? (
        <>
          <h4 className="text-xl font-medium text-gray-800 mb-4">{currentStep.question}</h4>
          <div className="space-y-3">
            {currentStep.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.label)}
                className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition group"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-medium text-gray-900 group-hover:text-blue-600">
                      {option.label}
                    </h5>
                    {option.description && (
                      <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    )}
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <Brain className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Here are your recommended career paths
            </h3>
            <p className="text-gray-600">
              Based on your interests in {path.join(" → ")}
            </p>
          </div>

          {currentCareers.map((career, index) => (
            <button
              key={index}
              onClick={() => handleCareerSelect(career)}
              className="w-full text-left p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-md transition"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {career.title}
              </h4>
              <p className="text-gray-600 mb-4">{career.description}</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Requirements</h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {career.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Key Skills</h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {career.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Opportunities</h5>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {career.opportunities.map((opp, i) => (
                      <li key={i}>{opp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </button>
          ))}

          <div className="text-center mt-8">
            <button
              onClick={handleReset}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}