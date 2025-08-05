import styled from 'styled-components';

export const Card = styled.div`
  background: ${p => p.theme.cardBackground};
  border: 1px solid ${p => p.theme.border};
  border-radius: 12px;
  padding: 20px;
  box-shadow: ${p => p.theme.shadow};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Name      = styled.h3`color:${p=>p.theme.text};font-size:18px;margin:0 0 6px;`;
export const Specialty = styled.p`color:${p=>p.theme.primary};font-weight:500;margin:0 0 10px;`;

export const Row  = styled.div`display:flex;justify-content:space-between;margin-bottom:8px;`;
export const Info = styled.span`color:${p=>p.theme.textSecondary};font-size:14px;`;
export const Rating = styled.span`color:${p=>p.theme.warning};font-weight:500;`;
export const Fee  = styled.span`color:${p=>p.theme.success};font-weight:bold;`;
export const Loc  = styled.span`color:${p=>p.theme.textSecondary};font-size:12px;`;
