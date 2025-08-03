import React from "react";
import styled from "styled-components";
import { FieldArray, useFormikContext } from "formik";

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const EducationWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1.5rem;
`;

export default function EducationForm() {
  const { values, handleChange } = useFormikContext();

  return (
    <FieldArray
      name="education"
      render={(arrayHelpers) => (
        <div>
          {values.education.map((edu, index) => (
            <EducationWrapper key={index}>
              <Input
                name={`education[${index}].degree`}
                placeholder="תואר / תעודה"
                value={edu.degree}
                onChange={handleChange}
              />
              <Input
                name={`education[${index}].institution`}
                placeholder="מוסד לימודים"
                value={edu.institution}
                onChange={handleChange}
              />
              <Input
                name={`education[${index}].duration`}
                placeholder="שנים (למשל 2020-2023)"
                value={edu.duration}
                onChange={handleChange}
              />

              {values.education.length > 1 && (
                <Button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  מחק השכלה זו
                </Button>
              )}
            </EducationWrapper>
          ))}

          <Button
            type="button"
            onClick={() =>
              arrayHelpers.push({
                degree: "",
                institution: "",
                duration: "",
              })
            }
          >
            הוסף השכלה
          </Button>
        </div>
      )}
    />
  );
}
