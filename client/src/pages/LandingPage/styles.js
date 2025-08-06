import styled from 'styled-components';

export const Wrap  = styled.div`max-width:1200px;margin:0 auto;padding:40px 20px;`;
export const Title = styled.h1`text-align:center;font-size:36px;color:${p=>p.theme.text};@media(max-width:768px){font-size:28px;}`;
export const Sub   = styled.p`text-align:center;color:${p=>p.theme.textSecondary};margin:0 0 40px;`;
export const Grid  = styled.div`
  display:grid;gap:24px;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  @media(max-width:768px){grid-template-columns:1fr;gap:16px;}
`;
export const Error = styled.div`
  color:${p=>p.theme.danger};border:1px solid ${p=>p.theme.danger};
  padding:20px;border-radius:8px;text-align:center;
`;
export const SearchBar = styled.div`
  max-width:400px;
  margin:0 auto 32px;
  @media(max-width:768px){
    max-width:100%;
    margin-bottom:24px;
  }
`;
export const SearchInput = styled.input`
  width:100%;font-size:16px;padding:12px 16px;
  border:1px solid ${p=>p.theme.border};border-radius:8px;
  background:${p=>p.theme.background};color:${p=>p.theme.text};
`;
