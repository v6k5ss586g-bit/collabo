let USERS = [];
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  const { email, password } = req.body || {};
  const user = USERS.find(u => u.email === email);
  if (!user) return res.json({ ok: false, error: 'משתמש לא קיים — הרשם קודם' });
  if (user.password !== password) return res.json({ ok: false, error: 'סיסמה שגויה' });
  res.json({ ok: true, user });
}
