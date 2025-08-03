import React from 'react';
import styled from 'styled-components';
import { useFormikContext } from 'formik';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

const StyledInput = styled.input`
  padding: 0.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
  border-radius: 4px;
`;

const StyledError = styled.div`
  color: red;
  font-size: 0.9rem;
`;

export default function PersonalDetailsForm() {
  const { values, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <FieldWrapper>
        <Label htmlFor="fullName">שם מלא</Label>
        <StyledInput
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
        />
        {touched.fullName && errors.fullName && <StyledError>{errors.fullName}</StyledError>}
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="email">אימייל</Label>
        <StyledInput
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {touched.email && errors.email && <StyledError>{errors.email}</StyledError>}
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="phone">טלפון</Label>
        <StyledInput
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        {touched.phone && errors.phone && <StyledError>{errors.phone}</StyledError>}
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="address">כתובת</Label>
        <StyledInput
          id="address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
        {touched.address && errors.address && <StyledError>{errors.address}</StyledError>}
      </FieldWrapper>
    </>
  );
}
