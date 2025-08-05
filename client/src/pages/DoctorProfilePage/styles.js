import styled from 'styled-components';

export const Wrap = styled.div`max-width:1000px;margin:0 auto;padding:40px 20px;`;
export const Card = styled.div`
  background:${p=>p.theme.cardBackground};border:1px solid ${p=>p.theme.border};
  border-radius:16px;box-shadow:${p=>p.theme.shadow};padding:32px;
  display:grid;grid-template-columns:300px 1fr;gap:32px;
  @media(max-width:768px){grid-template-columns:1fr;padding:24px;gap:24px;}
`;
export const Img = styled.img`width:100%;height:300px;object-fit:cover;border-radius:12px;`;
export const Info = styled.div`display:flex;flex-direction:column;gap:24px;`;
export const Name = styled.h1`font-size:32px;color:${p=>p.theme.text};margin:0;`;
export const Spec = styled.h2`font-size:20px;color:${p=>p.theme.primary};margin:0;`;
export const Grid = styled.div`
  display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
`;
export const Item = styled.div`background:${p=>p.theme.background};padding:16px;border:1px solid ${p=>p.theme.border};border-radius:8px;`;
export const Label= styled.h4`margin:0 0 6px;font-size:13px;color:${p=>p.theme.textSecondary};text-transform:uppercase;`;
export const Val  = styled.p`margin:0;font-weight:500;color:${p=>p.theme.text};`;
export const Bio  = styled.div`p{margin:8px 0 0;color:${p=>p.theme.textSecondary};}`;
export const Slots= styled.div`display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 16px;`;
export const Slot = styled.span`background:${p=>p.theme.primary};color:#fff;padding:6px 12px;border-radius:6px;font-size:14px;`;
export const Btn  = styled.button`align-self:flex-start;background:${p=>p.theme.success};color:#fff;padding:16px 32px;border:none;border-radius:8px;font-size:18px;font-weight:600;@media(max-width:768px){width:100%;}`;
export const Error= styled.div`color:${p=>p.theme.danger};border:1px solid ${p=>p.theme.danger};padding:20px;border-radius:8px;text-align:center;`;
