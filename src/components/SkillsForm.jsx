import React from 'react';
import styled from 'styled-components';
import { FieldArray, useFormikContext } from 'formik';

const Input = styled.input`
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export default function SkillsForm() {
  const { values, handleChange } = useFormikContext();

  return (
    <FieldArray
      name="skills"
      render={(arrayHelpers) => (
        <div>
          {values.skills.map((skill, index) => (
            <div key={index}>
              <Input
                type="text"
                name={`skills[${index}]`}
                placeholder="הכנס כישור"
                value={skill}
                onChange={handleChange}
              />
              {values.skills.length > 1 && (
                <Button type="button" onClick={() => arrayHelpers.remove(index)}>
                  הסר
                </Button>
              )}
            </div>
          ))}
          <Button type="button" onClick={() => arrayHelpers.push('')}>
            הוסף כישור
          </Button>
        </div>
      )}
    />
  );
}
