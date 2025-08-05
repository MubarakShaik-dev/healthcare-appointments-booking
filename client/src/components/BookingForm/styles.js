import styled from 'styled-components';

export const Wrap = styled.form`width:100%;`;
export const H2   = styled.h2`text-align:center;margin:0 0 24px;color:${p=>p.theme.text};`;
export const Group= styled.div`margin-bottom:20px;`;
export const Label= styled.label`display:block;margin-bottom:6px;color:${p=>p.theme.text};font-weight:500;`;
export const Input= styled.input`
  width:100%;padding:12px;border:1px solid ${p=>p.theme.border};border-radius:8px;
  background:${p=>p.theme.background};color:${p=>p.theme.text};font-size:16px;
`;
export const TA = styled.textarea`width:100%;padding:12px;border:1px solid ${p=>p.theme.border};border-radius:8px;background:${p=>p.theme.background};color:${p=>p.theme.text};`;

export const Slots = styled.div`
  display:grid;gap:8px;margin:8px 0 20px;
  grid-template-columns:repeat(auto-fit,minmax(80px,1fr));
`;
export const SlotBtn = styled.button`
  padding:8px;border:1px solid ${p=>p.selected?p.theme.primary:p.theme.border};
  background:${p=>p.selected?p.theme.primary:p.theme.background};
  color:${p=>p.selected?'#fff':p.theme.text};border-radius:6px;font-size:14px;
`;
export const Btn = styled.button`
  width:100%;padding:12px;border-radius:8px;background:${p=>p.theme.primary};
  color:#fff;font-size:16px;font-weight:600;
`;
export const Err = styled.div`color:${p=>p.theme.danger};border:1px solid ${p=>p.theme.danger};padding:12px;border-radius:8px;margin-bottom:16px;text-align:center;`;
export const Ok  = styled.div`color:${p=>p.theme.success};border:1px solid ${p=>p.theme.success};padding:12px;border-radius:8px;margin-bottom:16px;text-align:center;`;
