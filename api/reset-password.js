let USERS = [];
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  const { email, password } = req.body || {};
  const idx = USERS.findIndex(u => u.email === email);
  if (idx !== -1) USERS[idx].password = password;
  res.json({ ok: true });
}
