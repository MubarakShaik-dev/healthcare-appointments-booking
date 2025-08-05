import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import BookingForm from '../../components/BookingForm';
import {
  Wrap, Card, Img, Info, Name, Spec, Grid, Item,
  Label, Val, Bio, Slots, Slot, Btn, Error
} from './styles';

const DoctorProfilePage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const api = process.env.REACT_APP_API_URL || 'http://localhost:5001';
        const res = await fetch(`${api}/api/doctors/${id}`);
        if (!res.ok) throw new Error('Not found');
        setDoctor(await res.json());
      } catch (e) { setErr(e.message); }
      finally     { setLoading(false); }
    };
    load();
  }, [id]);

  if (loading) return <Loader message="Loading doctor..." />;
  if (err)     return <Wrap><Error>{err}</Error></Wrap>;
  if (!doctor) return null;

  return (
    <Wrap>
      <Card>
        <Img src={doctor.profileImage} alt={doctor.name}
             onError={e=>e.target.src='/images/doctor1.jpg'} />

        <Info>
          <Name>{doctor.name}</Name>
          <Spec>{doctor.specialty}</Spec>

          <Grid>
            <Item><Label>Experience</Label><Val>{doctor.experience} yrs</Val></Item>
            <Item><Label>Rating</Label><Val>⭐ {doctor.rating}</Val></Item>
            <Item><Label>Fee</Label><Val>₹{doctor.consultationFee}</Val></Item>
            <Item><Label>Location</Label><Val>{doctor.location}</Val></Item>
          </Grid>

          <Label>Available Slots</Label>
          <Slots>{doctor.availableSlots.map(t => <Slot key={t}>{t}</Slot>)}</Slots>

          <Bio>
            <Label>About</Label>
            <p>{doctor.bio}</p>
          </Bio>

          <Btn onClick={()=>setOpen(true)}>Book Appointment</Btn>
        </Info>
      </Card>

      <Modal isOpen={open} onClose={()=>setOpen(false)}>
        <BookingForm doctor={doctor} onClose={()=>setOpen(false)} />
      </Modal>
    </Wrap>
  );
};

export default DoctorProfilePage;
