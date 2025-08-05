import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  
  p {
    margin-top: 16px;
    color: ${props => props.theme.textSecondary};
    font-size: 16px;
  }
`;
