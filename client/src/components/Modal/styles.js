import styled from 'styled-components';

export const Overlay = styled.div`
  position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
  background:${p=>p.theme.modalBackground};z-index:1000;padding:20px;
`;
export const Box = styled.div`
  background:${p=>p.theme.cardBackground};border:1px solid ${p=>p.theme.border};
  border-radius:12px;padding:24px;max-width:500px;width:100%;max-height:90vh;overflow:auto;position:relative;
`;
export const Close = styled.button`
  position:absolute;top:16px;right:16px;background:none;font-size:24px;color:${p=>p.theme.textSecondary};
`;
