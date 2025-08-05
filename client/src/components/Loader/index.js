import React from 'react';
import { Oval } from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { LoaderContainer } from './styles';

const Loader = ({ size = 60, message = 'Loading...' }) => {
  const theme = useTheme();
  
  return (
    <LoaderContainer>
      <Oval
        height={size}
        width={size}
        color={theme.primary}
        secondaryColor={theme.border}
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
      {message && <p>{message}</p>}
    </LoaderContainer>
  );
};

export default Loader;
