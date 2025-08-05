import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Img, Content, Name, Specialty,
  Row, Info, Rating, Fee, Loc
} from './styles';

const DoctorCard = ({ doctor }) => (
  <Link to={`/doctor/${doctor.id}`}>
    <Card>
      <Img src={doctor.profileImage} alt={doctor.name}
           onError={e => (e.target.src = '/images/doctor1.jpg')} />
      <Content>
        <Name>{doctor.name}</Name>
        <Specialty>{doctor.specialty}</Specialty>

        <Row>
          <Info><strong>Exp:</strong> {doctor.experience} yrs</Info>
          <Rating>⭐ {doctor.rating}</Rating>
        </Row>
        <Row>
          <Fee>₹{doctor.consultationFee}</Fee>
          <Loc>{doctor.location}</Loc>
        </Row>
      </Content>
    </Card>
  </Link>
);

export default DoctorCard;
