import styled from 'styled-components';

export const CvWrapper = styled.div`
  direction: rtl;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  margin: 2rem auto;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 600px) {
    padding: 1rem;
    margin: 1rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    margin-bottom: 1.2rem;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.buttonBg};
  padding-bottom: 0.5rem;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const InfoLine = styled.p`
  margin: 0.3rem 0;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

export const JobBlock = styled.div`
  margin-bottom: 1rem;
`;

export const JobTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const JobDetails = styled.p`
  margin: 0.2rem 0;
  font-size: 0.95rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;
