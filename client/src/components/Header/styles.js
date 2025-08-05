import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme.cardBackground};
  border-bottom: 2px solid ${props => props.theme.border};
  padding: 16px 0;
  box-shadow: ${props => props.theme.shadow};
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 28px;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    gap: 16px;
  }
`;
