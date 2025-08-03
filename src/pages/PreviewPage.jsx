import React from "react";
import styled from "styled-components";
import { useCv } from "../context/CvContext";

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
`;

const MainTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const Item = styled.div`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const List = styled.ul`
  padding-right: 1.2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

export default function PreviewPage() {
  const {
    personalDetails,
    experience = [],
    education = [],
    skills = [],
    languages = [],
  } = useCv();

  return (
    <Container>
      <MainTitle>תצוגת קורות חיים</MainTitle>

      <Section>
        <Title>פרטים אישיים</Title>
        <p>
          <strong>שם:</strong> {personalDetails?.fullName || ""}
        </p>
        <p>
          <strong>אימייל:</strong> {personalDetails?.email || ""}
        </p>
        <p>
          <strong>טלפון:</strong> {personalDetails?.phone || ""}
        </p>
        <p>
          <strong>כתובת:</strong> {personalDetails?.address || ""}
        </p>
      </Section>

      <Section>
        <Title>ניסיון תעסוקתי</Title>
        {experience.length > 0 ? (
          experience.map((exp, i) => (
            <Item key={i}>
              <p>
                <strong>{exp.role}</strong> ב־{exp.company}
              </p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </Item>
          ))
        ) : (
          <p>לא הוזן ניסיון תעסוקתי.</p>
        )}
      </Section>

      <Section>
        <Title>השכלה</Title>
        {education.length > 0 ? (
          education.map((edu, i) => (
            <Item key={i}>
              <p>
                <strong>{edu.degree}</strong> - {edu.institution}
              </p>
              <p>{edu.duration}</p>
            </Item>
          ))
        ) : (
          <p>לא הוזנה השכלה.</p>
        )}
      </Section>

      <Section>
        <Title>כישורים</Title>
        {skills.length > 0 ? (
          <List>
            {skills.map((skill, i) => (
              <ListItem key={i}>{skill}</ListItem>
            ))}
          </List>
        ) : (
          <p>לא הוזנו כישורים.</p>
        )}
      </Section>

      <Section>
        <Title>שפות</Title>
        {languages.length > 0 ? (
          <List>
            {languages.map((lang, i) => (
              <ListItem key={i}>{lang}</ListItem>
            ))}
          </List>
        ) : (
          <p>לא הוזנו שפות.</p>
        )}
      </Section>
    </Container>
  );
}
