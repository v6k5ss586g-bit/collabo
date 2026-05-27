export const config = {
  api: { bodyParser: true }
};

const DEMO_USERS = [
  {id:1,name:'מאיה לוי',email:'maya@collabo.io',password:'Maya1234',role:'creator'},
  {id:2,name:'Urban Eats TLV',email:'urban@collabo.io',password:'Urban1234',role:'business'},
  {id:3,name:'נועם כהן',email:'noam@collabo.io',password:'Noam1234',role:'creator'},
  {id:4,name:'Café Roma',email:'roma@collabo.io',password:'Roma1234',role:'business'},
  {id:5,name:'שירה אביב',email:'shira@collabo.io',password:'Shira1234',role:'creator'},
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(204).end(); return; }

  const email = (req.body?.email || '').trim().toLowerCase();
  const password = req.body?.password || '';

  const user = DEMO_USERS.find(u => u.email.toLowerCase() === email);

  if (!user) return res.json({ ok: false, error: 'משתמש לא קיים — הרשם קודם' });
  if (user.password !== password) return res.json({ ok: false, error: 'סיסמה שגויה' });
  
  res.json({ ok: true, user });
}
