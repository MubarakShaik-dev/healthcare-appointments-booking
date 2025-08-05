import styled from 'styled-components';

export const ClockContainer = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.text};
  padding: 8px 16px;
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
