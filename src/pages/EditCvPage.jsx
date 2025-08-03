import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PersonalDetailsForm from "../components/PersonalDetailsForm";
import ExperienceSection from "../components/ExperienceSection";
import EducationForm from "../components/EducationForm";
import SkillsForm from "../components/SkillsForm";
import LanguagesForm from "../components/LanguagesForm";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { useCv } from "../context/CvContext";

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 0.5rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default function EditCvPage() {
  const navigate = useNavigate();
  const {
    updatePersonalDetails,
    updateExperience,
    updateEducation,
    updateSkills,
    updateLanguages,
  } = useCv();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      experiences: [
        {
          role: "",
          company: "",
          years: 0,
          months: 0,
          isCurrent: false,
          description: "",
        },
      ],
      education: [
        {
          degree: "",
          institution: "",
          duration: "",
        },
      ],
      skills: [],
      languages: [],
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("יש להזין שם מלא"),
      email: Yup.string()
        .email("כתובת מייל לא תקינה")
        .required("יש להזין מייל"),
      phone: Yup.string().required("יש להזין טלפון"),
      address: Yup.string().required("יש להזין כתובת"),
      experiences: Yup.array().of(
        Yup.object({
          role: Yup.string().required("יש להזין תפקיד"),
          company: Yup.string().required("יש להזין שם חברה"),
          years: Yup.number().min(0).max(30),
          months: Yup.number().min(0).max(11),
          description: Yup.string(),
        })
      ),
    }),
    onSubmit: (values) => {
      updatePersonalDetails({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        address: values.address,
      });

      const processedExp = values.experiences.map((exp) => {
        const yearStr = exp.years === 1 ? "שנה" : "שנים";
        const monthStr = exp.months === 1 ? "חודש" : "חודשים";
        const durationText =
          exp.years === 0 && exp.months === 0
            ? "פחות מחודש"
            : `${exp.years > 0 ? `${exp.years} ${yearStr}` : ""}${
                exp.years > 0 && exp.months > 0 ? " ו-" : ""
              }${exp.months > 0 ? `${exp.months} ${monthStr}` : ""}`;

        return { ...exp, duration: durationText };
      });

      updateExperience(processedExp);
      updateEducation(values.education);
      updateSkills(values.skills);
      updateLanguages(values.languages);

      navigate("/preview");
    },
  });

  return (
    <FormikProvider value={formik}>
      <Container>
        <Title>עריכת קורות חיים</Title>

        <form onSubmit={formik.handleSubmit}>
          <Section>
            <SectionTitle>פרטים אישיים</SectionTitle>
            <PersonalDetailsForm />
          </Section>

          <Section>
            <SectionTitle>השכלה</SectionTitle>
            <EducationForm />
          </Section>

          <Section>
            <SectionTitle>כישורים</SectionTitle>
            <SkillsForm />
          </Section>

          <Section>
            <SectionTitle>שפות</SectionTitle>
            <LanguagesForm />
          </Section>

          <Section>
            <SectionTitle>ניסיון תעסוקתי</SectionTitle>
            <ExperienceSection />
          </Section>

          <Button type="submit">שמור וסיים</Button>
        </form>
      </Container>
    </FormikProvider>
  );
}
