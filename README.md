# 🚀 Collabo — Deploy to Vercel

## העלאה ב-3 דקות

### שלב 1 — צור חשבון Vercel
👉 https://vercel.com/signup (חינם, עם GitHub)

### שלב 2 — התקן Vercel CLI
```
npm install -g vercel
```

### שלב 3 — העלה
```
cd collabo-deploy
vercel
```

ענה על השאלות:
- Set up and deploy? **Y**
- Which scope? בחר את החשבון שלך
- Link to existing project? **N**
- Project name? **collabo** (או כל שם)
- In which directory is your code? **./**
- Override settings? **N**

### ✅ סיום!
תקבל URL כמו: `https://collabo-abc123.vercel.app`

---

## URLs
- האפליקציה: `https://your-url.vercel.app`
- אדמין: `https://your-url.vercel.app/admin`

## הערה חשובה
הגרסה הזו שומרת נתונים ב-memory.
כל re-deploy מאפס את המשתמשים.
לאחסון קבוע → הוסף Vercel KV (חינם עד 30MB).
