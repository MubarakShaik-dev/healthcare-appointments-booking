const path   = require('path');
const sqlite = require('sqlite3').verbose();

const dbPath = path.join(__dirname, 'healthcare.db');
const db     = new sqlite.Database(dbPath);

// ── create tables ──────────────────────
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS doctors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, specialty TEXT, experience INTEGER,
      rating REAL, profileImage TEXT,
      availableSlots TEXT, consultationFee INTEGER,
      location TEXT, bio TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      doctorId INTEGER,
      patientName TEXT, patientEmail TEXT, patientPhone TEXT,
      appointmentDate TEXT, appointmentTime TEXT, symptoms TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (doctorId) REFERENCES doctors(id)
    )
  `);

  // ── seed doctors only once ────────────
  db.get('SELECT COUNT(*) AS count FROM doctors', (err, row) => {
    if (row.count) return;

    const doctors = require('./seed-data.json');
    const stmt = db.prepare(`
      INSERT INTO doctors
      (name, specialty, experience, rating, profileImage,
       availableSlots, consultationFee, location, bio)
      VALUES (?,?,?,?,?,?,?,?,?)
    `);

    doctors.forEach(d =>
      stmt.run([
        d.name, d.specialty, d.experience, d.rating, d.profileImage,
        JSON.stringify(d.availableSlots),
        d.consultationFee, d.location, d.bio
      ])
    );
    stmt.finalize(() => console.log('🎉  Doctors seeded'));
  });
});

module.exports = db;
