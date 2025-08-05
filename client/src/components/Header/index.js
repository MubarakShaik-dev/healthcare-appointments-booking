import React from 'react';
import Clock from '../Clock';
import ThemeToggle from '../ThemeToggle';
import { HeaderContainer, Title, HeaderContent, RightSection } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title> SMB Healthcare </Title>
        <RightSection>
          <Clock />
          <ThemeToggle />
        </RightSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
