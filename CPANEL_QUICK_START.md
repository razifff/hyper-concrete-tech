# Quick Start - cPanel Deployment

## Files yang Sudah Siap

✅ Production build sudah selesai di folder `dist/`
✅ Database schema sudah ready di folder `drizzle/`
✅ Environment template sudah di `.env.cPanel`

## 5 Langkah Cepat Upload ke cPanel

### 1. Download/Prepare Files
```bash
# Dari folder project, copy files ini:
- dist/          (production build)
- server/        (backend code)
- drizzle/       (database migrations)
- package.json
- pnpm-lock.yaml
- .env.cPanel    (rename to .env di server)
```

### 2. Upload via FTP/File Manager
Upload ke: `/home/hypercon/public_html/web.hyperconcretetech.com`

### 3. Setup .env File
Via cPanel Terminal atau File Manager:
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
cp .env.cPanel .env
nano .env  # Edit dengan credentials anda
```

Pastikan isi:
```
DATABASE_URL=mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web
NODE_ENV=production
```

### 4. Install & Setup Database
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
npm install
npx drizzle-kit generate
npx drizzle-kit migrate
npm run build
```

### 5. Create Node.js App di cPanel
1. Buka cPanel → Node.js Selector
2. Click "Create Application"
3. Isi:
   - Node.js Version: 20.20.0
   - Application Root: `/home/hypercon/public_html/web.hyperconcretetech.com`
   - Startup File: `dist/index.js`
   - Application URL: `https://web.hyperconcretetech.com`
4. Click "Create"

## Done! 🎉

Akses: https://web.hyperconcretetech.com

---

## Troubleshooting

**Error: Cannot find module?**
```bash
npm install
```

**Error: Database connection?**
- Check DATABASE_URL di .env
- Verify database user di cPanel MySQL

**Check logs:**
```bash
tail -f /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log
```

---

## Full Guide

Lihat `DEPLOYMENT_GUIDE_CPANEL.md` untuk panduan lengkap.
