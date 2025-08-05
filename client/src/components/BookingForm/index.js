import React, { useState } from 'react';
import Loader from '../Loader';
import {
  Wrap, H2, Group, Label, Input, TA, Slots, SlotBtn,
  Btn, Err, Ok
} from './styles';

const BookingForm = ({ doctor, onClose }) => {
  const [form, setForm]   = useState({ patientName:'', patientEmail:'', patientPhone:'',
                                        appointmentDate:'', appointmentTime:'', symptoms:'' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ ok:'', err:'' });

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const pick   = t => setForm({ ...form, appointmentTime: t });

  const submit = async e => {
    e.preventDefault();
    setLoading(true); setMsg({ ok:'', err:'' });
    try {
      const api = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      const res = await fetch(`${api}/api/appointments`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ ...form, doctorId: doctor.id })
      });
      if (!res.ok) throw new Error('Booking failed');
      setMsg({ ok:'Appointment booked!', err:'' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setMsg({ ok:'', err: err.message });
    } finally { setLoading(false); }
  };

  const tomorrow = () => {
    const d = new Date(); d.setDate(d.getDate()+1);
    return d.toISOString().split('T')[0];
  };

  if (loading) return <Loader message="Booking..." />;

  return (
    <Wrap onSubmit={submit}>
      <H2>Book with {doctor.name}</H2>
      {msg.err && <Err>{msg.err}</Err>}
      {msg.ok  && <Ok>{msg.ok}</Ok>}

      <Group><Label>Name *</Label><Input name="patientName" value={form.patientName} onChange={handle} required /></Group>
      <Group><Label>Email *</Label><Input type="email" name="patientEmail" value={form.patientEmail} onChange={handle} required /></Group>
      <Group><Label>Phone *</Label><Input name="patientPhone" value={form.patientPhone} onChange={handle} required /></Group>
      <Group><Label>Date *</Label><Input type="date" name="appointmentDate" min={tomorrow()} value={form.appointmentDate} onChange={handle} required /></Group>

      <Label>Time Slot *</Label>
      <Slots>
        {doctor.availableSlots.map(t => (
          <SlotBtn key={t} type="button" onClick={() => pick(t)} selected={form.appointmentTime===t}>{t}</SlotBtn>
        ))}
      </Slots>

      <Group><Label>Symptoms (optional)</Label><TA rows="3" name="symptoms" value={form.symptoms} onChange={handle} /></Group>

      <Btn type="submit">Book Appointment</Btn>
    </Wrap>
  );
};

export default BookingForm;
