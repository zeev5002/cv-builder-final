import React from 'react';
import styled from 'styled-components';
import { FieldArray, useFormikContext } from 'formik';

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

const Select = styled.select`
  width: 48%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
  resize: vertical;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
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

const ExperienceWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1.5rem;
`;

export default function ExperienceSection() {
  const { values, handleChange } = useFormikContext();

  return (
    <FieldArray
      name="experiences"
      render={(arrayHelpers) => (
        <div>
          {values.experiences.map((exp, index) => (
            <ExperienceWrapper key={index}>
              <Input
                name={`experiences[${index}].role`}
                placeholder="תפקיד"
                value={exp.role}
                onChange={handleChange}
              />

              <Input
                name={`experiences[${index}].company`}
                placeholder="שם החברה"
                value={exp.company}
                onChange={handleChange}
              />

              <label>משך זמן:</label>
              <FlexRow>
                <Select
                  name={`experiences[${index}].years`}
                  value={exp.years.toString()}
                  onChange={handleChange}
                >
                  <option value="">בחר שנים</option>
                  {[...Array(21).keys()].map((y) => (
                    <option key={y} value={y.toString()}>
                      {y} {y === 1 ? "שנה" : "שנים"}
                    </option>
                  ))}
                </Select>

                <Select
                  name={`experiences[${index}].months`}
                  value={exp.months.toString()}
                  onChange={handleChange}
                >
                  <option value="">בחר חודשים</option>
                  {[...Array(12).keys()].map((m) => (
                    <option key={m} value={m.toString()}>
                      {m} {m === 1 ? "חודש" : "חודשים"}
                    </option>
                  ))}
                </Select>
              </FlexRow>

              <CheckboxWrapper>
                <input
                  type="checkbox"
                  name={`experiences[${index}].isCurrent`}
                  checked={exp.isCurrent}
                  onChange={handleChange}
                />
                <span>אני עדיין עובד כאן</span>
              </CheckboxWrapper>

              <Textarea
                name={`experiences[${index}].description`}
                placeholder="תיאור התפקיד (אופציונלי)"
                value={exp.description}
                onChange={handleChange}
              />

              {values.experiences.length > 1 && (
                <Button type="button" onClick={() => arrayHelpers.remove(index)}>
                  מחק ניסיון זה
                </Button>
              )}
            </ExperienceWrapper>
          ))}

          <Button
            type="button"
            onClick={() =>
              arrayHelpers.push({
                role: '',
                company: '',
                years: '0',
                months: '0',
                isCurrent: false,
                description: '',
              })
            }
          >
            הוסף ניסיון נוסף
          </Button>
        </div>
      )}
    />
  );
}
