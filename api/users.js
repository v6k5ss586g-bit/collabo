// Vercel Serverless Function — /api/users
// מאחסן משתמשים ב-Vercel KV (או in-memory לdemo)

// לצורך demo — in-memory storage
// בפרודקשן: החלף ב-Vercel KV / PlanetScale / Supabase
let USERS = [];

export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  if (req.method === 'GET') {
    res.status(200).json(USERS);
    return;
  }

  if (req.method === 'POST') {
    const user = req.body;
    if (user && user.email && !USERS.find(u => u.email === user.email)) {
      user.id = Date.now();
      user.status = user.status || 'pending';
      user.joined = new Date().toLocaleDateString('he-IL');
      USERS.push(user);
    }
    res.status(200).json({ ok: true });
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
}
