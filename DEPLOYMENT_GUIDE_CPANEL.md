# Panduan Deployment ke cPanel - Hyper Concrete Tech

## Informasi Deployment

- **Domain:** web.hyperconcretetech.com
- **Folder:** /home/hypercon/public_html/web.hyperconcretetech.com
- **Database:** hypercon_web
- **Database User:** hypercon_web1
- **Node.js Version:** 20.20.0
- **Port:** Akan di-inject oleh cPanel secara otomatis

---

## Langkah-Langkah Deployment

### 1. Upload Files ke cPanel

Gunakan FTP atau File Manager cPanel untuk upload semua files ke folder:
```
/home/hypercon/public_html/web.hyperconcretetech.com
```

**Files yang perlu di-upload:**
- `dist/` - Production build (React compiled)
- `server/` - Backend code
- `drizzle/` - Database schema dan migrations
- `package.json` - Dependencies list
- `pnpm-lock.yaml` - Exact dependency versions
- `.env` - Environment variables (JANGAN commit ke git!)
- `ecosystem.config.js` - PM2 configuration (jika menggunakan PM2)

### 2. Setup Environment Variables

#### Cara 1: Menggunakan File Manager cPanel
1. Buka cPanel → File Manager
2. Navigate ke `/home/hypercon/public_html/web.hyperconcretetech.com`
3. Create file baru: `.env`
4. Copy isi dari `.env.cPanel` dan sesuaikan dengan credentials anda:

```env
DATABASE_URL=mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web
NODE_ENV=production
VITE_APP_TITLE=Hyper Concrete Technologies
VITE_APP_LOGO=https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.ai
VITE_FRONTEND_FORGE_API_KEY=your_api_key
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
OAUTH_SERVER_URL=https://api.manus.im
VITE_APP_ID=your_app_id
JWT_SECRET=your_jwt_secret
OWNER_NAME=Mohd Razif Hassan Basri
OWNER_OPEN_ID=AhYTQnAG9ffyRZLfFPMbZf
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=your_website_id
BUILT_IN_FORGE_API_URL=https://forge.manus.ai
BUILT_IN_FORGE_API_KEY=your_api_key
```

#### Cara 2: Menggunakan Terminal cPanel
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
nano .env
# Paste isi .env.cPanel, sesuaikan credentials, tekan Ctrl+X, Y, Enter
```

### 3. Install Dependencies

Via Terminal cPanel:
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
npm install
# atau jika menggunakan pnpm
pnpm install
```

### 4. Setup Database

#### Langkah 1: Create Database (jika belum ada)
Gunakan cPanel → MySQL Databases untuk create database `hypercon_web`

#### Langkah 2: Run Database Migrations
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 5. Build Production Files

```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
npm run build
# atau
pnpm build
```

Ini akan generate folder `dist/` dengan compiled React app.

### 6. Setup Node.js Application di cPanel

#### Menggunakan cPanel Node.js App Manager:

1. Buka cPanel → Node.js Selector (atau Node.js App)
2. Click "Create Application"
3. Isi form:
   - **Node.js Version:** 20.20.0
   - **Application Root:** `/home/hypercon/public_html/web.hyperconcretetech.com`
   - **Application Startup File:** `dist/index.js`
   - **Application URL:** `https://web.hyperconcretetech.com`
   - **Passenger Log File:** `/home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log`

4. Click "Create"

cPanel akan automatically:
- Inject `process.env.PORT` ke aplikasi
- Setup reverse proxy dari domain ke aplikasi
- Manage process restarts

### 7. Verify Deployment

Buka browser dan akses: `https://web.hyperconcretetech.com`

Jika ada error, check logs:
```bash
# Check application logs
tail -f /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log

# Check error logs
tail -f /home/hypercon/logs/error_log
```

---

## Troubleshooting

### Error: "Cannot find module"
**Solusi:** Run `npm install` atau `pnpm install` lagi

### Error: "Database connection failed"
**Solusi:** 
- Verify DATABASE_URL di .env file
- Check database user permissions di cPanel MySQL
- Pastikan database sudah exist

### Error: "Port already in use"
**Solusi:** cPanel akan automatically find available port, tidak perlu khawatir

### Application crash setelah restart
**Solusi:** Check logs untuk error details, biasanya ada di `/home/hypercon/logs/error_log`

---

## Maintenance

### Update Application
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
git pull origin main  # atau download files baru
npm install
npm run build
# Restart application via cPanel Node.js App Manager
```

### Check Application Status
```bash
# Via cPanel Node.js App Manager
# Atau via terminal
ps aux | grep node
```

### View Logs
```bash
tail -f /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log
```

---

## Important Notes

1. **Jangan hardcode PORT** - cPanel akan inject via `process.env.PORT`
2. **Jangan commit .env** - Keep credentials safe
3. **Pastikan static files di /public** - Untuk express.static()
4. **Database backups** - Setup regular backups via cPanel
5. **SSL Certificate** - cPanel biasanya auto-install Let's Encrypt

---

## Support

Jika ada masalah, check:
- cPanel error logs
- Application logs di `/home/hypercon/public_html/web.hyperconcretetech.com/logs/`
- Node.js version compatibility
- Database connection string
