import React, { useState, useEffect } from 'react';
import DoctorCard from '../../components/DoctorCard';
import Loader from '../../components/Loader';
import { Wrap, Title, Sub, Grid, Error } from './styles';

const LandingPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const api = process.env.REACT_APP_API_URL || 'http://localhost:5001';
        const res = await fetch(`${api}/api/doctors`);
        if (!res.ok) throw new Error('Fetch failed');
        setDoctors(await res.json());
      } catch (e) { setErr(e.message); }
      finally     { setLoading(false); }
    };
    load();
  }, []);

  if (loading) return <Loader message="Loading doctors..." />;
  if (err)     return <Wrap><Error>{err}</Error></Wrap>;

  return (
    <Wrap>
      <Title>Find Your Healthcare Provider</Title>
      <Sub>Book appointments with qualified doctors</Sub>

      <Grid>
        {doctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
      </Grid>
    </Wrap>
  );
};

export default LandingPage;
