const express = require('express');
const cors    = require('cors');
const db      = require('./database');

const app  = express();
const PORT = process.env.PORT || 5001;

const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

// ── routes ─────────────────────────────
app.get('/api/doctors', (_, res) => {
  db.all('SELECT * FROM doctors', (err, rows) =>
    err ? res.status(500).send(err) :
    res.json(rows.map(r => ({ ...r, availableSlots: JSON.parse(r.availableSlots) })))
  );
});

app.get('/api/doctors/:id', (req, res) => {
  db.get('SELECT * FROM doctors WHERE id=?', [req.params.id], (err, row) =>
    err ? res.status(500).send(err) :
    row ? res.json({ ...row, availableSlots: JSON.parse(row.availableSlots) })
        : res.status(404).json({ error: 'Doctor not found' })
  );
});

app.post('/api/appointments', (req, res) => {
  const { doctorId, patientName, patientEmail, patientPhone,
          appointmentDate, appointmentTime, symptoms } = req.body;

  if (!doctorId || !patientName || !patientEmail ||
      !patientPhone || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  db.run(
    `INSERT INTO appointments
     (doctorId, patientName, patientEmail, patientPhone,
      appointmentDate, appointmentTime, symptoms)
     VALUES (?,?,?,?,?,?,?)`,
    [doctorId, patientName, patientEmail, patientPhone,
     appointmentDate, appointmentTime, symptoms || null],
    function (err) {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'Booked', id: this.lastID });
    }
  );
});

app.listen(PORT, () => console.log(`🚀  API running on port ${PORT}`));
