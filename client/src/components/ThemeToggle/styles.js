import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 13px;
  }
`;
