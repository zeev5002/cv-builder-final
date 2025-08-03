import React, { createContext, useContext, useState } from 'react';
const CvContext = createContext();

export function CvProvider({ children }) {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  const updatePersonalDetails = (details) => {
    setPersonalDetails(details);
  };

  const updateExperience = (expList) => {
    setExperience(expList);
  };

  const updateEducation = (eduList) => {
    setEducation(eduList);
  };

  const updateSkills = (skillsList) => {
    setSkills(skillsList);
  };

  const updateLanguages = (langList) => {
    setLanguages(langList);
  };

  const resetCv = () => {
    setPersonalDetails({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
    setExperience([]);
    setEducation([]);
    setSkills([]);
    setLanguages([]);
  };

  return (
    <CvContext.Provider
      value={{
        personalDetails,
        experience,
        education,
        skills,
        languages,
        updatePersonalDetails,
        updateExperience,
        updateEducation,
        updateSkills,
        updateLanguages,
        resetCv,
      }}
    >
      {children}
    </CvContext.Provider>
  );
}

export function useCv() {
  return useContext(CvContext);
}
