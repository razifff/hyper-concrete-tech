# Environment Variables untuk cPanel Deployment

## Apa itu Environment Variables?

Environment variables adalah **nilai-nilai konfigurasi** yang disimpan di server dan digunakan oleh aplikasi. Contoh:
- Database credentials (username, password)
- API keys
- Secret tokens
- Port number
- Environment mode (production/development)

---

## Mengapa Perlu Environment Variables?

1. **Security** - Jangan hardcode password di code
2. **Flexibility** - Ganti nilai tanpa ubah code
3. **Multiple Environments** - Dev, staging, production punya nilai berbeda
4. **Easy Management** - Centralized configuration

---

## Environment Variables untuk Hyper Concrete Tech

Aplikasi anda memerlukan variables berikut:

| Variable | Nilai | Keterangan |
|----------|-------|-----------|
| `DATABASE_URL` | `mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web` | Database connection string |
| `NODE_ENV` | `production` | Environment mode |
| `PORT` | (auto-inject oleh cPanel) | Port untuk aplikasi |
| `VITE_APP_TITLE` | `Hyper Concrete Technologies` | Judul aplikasi |
| `VITE_APP_LOGO` | URL logo | Logo URL |
| `JWT_SECRET` | secret key | Untuk session encryption |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | OAuth server |
| `VITE_OAUTH_PORTAL_URL` | `https://oauth.manus.im` | OAuth portal |

---

## Cara 1: Setup Environment Variables via .env File (Recommended)

### Step 1: Create .env File

Via cPanel File Manager atau Terminal:

```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
nano .env
```

### Step 2: Paste Environment Variables

Copy dan paste ini ke `.env` file:

```env
# Database
DATABASE_URL=mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web

# Node Environment
NODE_ENV=production

# Application
VITE_APP_TITLE=Hyper Concrete Technologies
VITE_APP_LOGO=https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg

# JWT Secret (GANTI DENGAN VALUE YANG AMAN!)
JWT_SECRET=your_super_secret_key_here_change_this

# OAuth
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://oauth.manus.im
VITE_APP_ID=your_app_id_here

# API Keys (GANTI DENGAN VALUE YANG SEBENARNYA!)
VITE_FRONTEND_FORGE_API_KEY=your_api_key_here
VITE_FRONTEND_FORGE_API_URL=https://forge.manus.ai
BUILT_IN_FORGE_API_KEY=your_api_key_here
BUILT_IN_FORGE_API_URL=https://forge.manus.ai

# Owner Info
OWNER_NAME=Mohd Razif Hassan Basri
OWNER_OPEN_ID=AhYTQnAG9ffyRZLfFPMbZf

# Analytics (Optional)
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=your_website_id_here
```

### Step 3: Save File

- Tekan `Ctrl + X`
- Tekan `Y` (Yes)
- Tekan `Enter`

### Step 4: Verify File

```bash
cat .env
```

Pastikan semua variables sudah ada.

---

## Cara 2: Setup via cPanel Environment Variables (Advanced)

Beberapa cPanel punya fitur untuk set environment variables via UI:

1. **Buka cPanel** → Cari "Environment Variables" atau "Node.js Selector"
2. **Klik "Edit Environment Variables"**
3. **Add variables:**
   - Key: `DATABASE_URL`
   - Value: `mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web`
4. **Repeat untuk semua variables**
5. **Save**

⚠️ **CATATAN:** Tidak semua cPanel support ini. Cara 1 (.env file) lebih reliable.

---

## Cara 3: Setup via Terminal (Advanced)

```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com

# Export variables (hanya untuk session ini)
export DATABASE_URL="mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web"
export NODE_ENV="production"
export JWT_SECRET="your_secret_key"

# Atau set di .env file (recommended)
echo "DATABASE_URL=mysql://hypercon_web1:Global_08@localhost:3306/hypercon_web" >> .env
echo "NODE_ENV=production" >> .env
```

---

## Variables yang WAJIB Diganti

### 1. JWT_SECRET
**Sekarang:** `your_super_secret_key_here_change_this`
**Ganti dengan:** Random string yang panjang dan kompleks

```bash
# Generate random secret
openssl rand -base64 32
# Contoh output: 7x!A@zK9mL2pQ5vN8wB3cD6eF9gH0jK1lM4nO7pQ0r

# Set di .env
JWT_SECRET=7x!A@zK9mL2pQ5vN8wB3cD6eF9gH0jK1lM4nO7pQ0r
```

### 2. API Keys
**Sekarang:** `your_api_key_here`
**Ganti dengan:** API keys yang sebenarnya dari Manus

Hubungi Manus untuk dapatkan:
- `VITE_FRONTEND_FORGE_API_KEY`
- `BUILT_IN_FORGE_API_KEY`
- `VITE_APP_ID`

### 3. OWNER_OPEN_ID
**Sekarang:** `AhYTQnAG9ffyRZLfFPMbZf` (sudah benar untuk anda)
**Tidak perlu ubah** - Ini adalah ID Manus anda

---

## Cara Aplikasi Membaca Environment Variables

### Di Backend (Node.js)

```javascript
// Baca dari process.env
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;
const port = process.env.PORT; // Auto-inject oleh cPanel

console.log(`Connecting to: ${dbUrl}`);
console.log(`Server running on port: ${port}`);
```

### Di Frontend (React)

```javascript
// Hanya VITE_ variables yang bisa diakses di frontend
const apiUrl = import.meta.env.VITE_FRONTEND_FORGE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

console.log(`App: ${appTitle}`);
console.log(`API: ${apiUrl}`);
```

⚠️ **PENTING:** Hanya variables yang dimulai dengan `VITE_` yang bisa diakses di frontend!

---

## Security Best Practices

### ✅ DO:
- ✅ Simpan sensitive data di `.env` file
- ✅ Jangan commit `.env` ke git
- ✅ Guna strong JWT_SECRET
- ✅ Rotate API keys secara berkala
- ✅ Limit akses ke `.env` file

### ❌ DON'T:
- ❌ Hardcode credentials di code
- ❌ Share `.env` file via email/chat
- ❌ Commit `.env` ke repository
- ❌ Guna weak passwords
- ❌ Expose API keys di frontend code

---

## Verify Environment Variables

### Via Terminal

```bash
# Check .env file
cat /home/hypercon/public_html/web.hyperconcretetech.com/.env

# Check specific variable
grep DATABASE_URL /home/hypercon/public_html/web.hyperconcretetech.com/.env

# Check if aplikasi bisa baca variables
cd /home/hypercon/public_html/web.hyperconcretetech.com
NODE_ENV=production node dist/index.js
# Lihat di logs apakah ada error tentang missing variables
```

### Via Application Logs

```bash
tail -f /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log

# Cari logs seperti:
# "Connecting to database: mysql://..."
# "Server running on port: 3000"
```

---

## Troubleshooting

### Error: "Cannot read property 'DATABASE_URL' of undefined"

**Penyebab:** `.env` file tidak ditemukan atau tidak di-load

**Solusi:**
```bash
# Check if .env exists
ls -la /home/hypercon/public_html/web.hyperconcretetech.com/.env

# Check if dotenv package installed
npm list dotenv

# Reinstall jika perlu
npm install dotenv
```

### Error: "Database connection failed"

**Penyebab:** DATABASE_URL salah atau database tidak accessible

**Solusi:**
```bash
# Check DATABASE_URL value
grep DATABASE_URL .env

# Test connection
mysql -u hypercon_web1 -p hypercon_web
# Enter password: Global_08

# Check MySQL is running
ps aux | grep mysql
```

### Error: "JWT_SECRET is not defined"

**Penyebab:** JWT_SECRET tidak ada di `.env`

**Solusi:**
```bash
# Add JWT_SECRET
echo "JWT_SECRET=your_secret_key_here" >> .env

# Verify
grep JWT_SECRET .env
```

---

## Checklist

- [ ] `.env` file sudah create
- [ ] DATABASE_URL sudah set dengan credentials yang benar
- [ ] NODE_ENV set ke `production`
- [ ] JWT_SECRET sudah ganti dengan value yang aman
- [ ] API keys sudah set (atau placeholder jika belum ada)
- [ ] OWNER_OPEN_ID sudah benar
- [ ] `.env` file tidak di-commit ke git
- [ ] Aplikasi bisa baca semua variables (check logs)
- [ ] Database connection berhasil
- [ ] Aplikasi start tanpa error

---

## Quick Reference

**File location:** `/home/hypercon/public_html/web.hyperconcretetech.com/.env`

**Edit .env:**
```bash
nano /home/hypercon/public_html/web.hyperconcretetech.com/.env
```

**View .env:**
```bash
cat /home/hypercon/public_html/web.hyperconcretetech.com/.env
```

**Restart aplikasi setelah ubah .env:**
1. Buka cPanel → Node.js Selector
2. Klik aplikasi anda
3. Klik "Restart"

---

## Support

Jika ada soalan tentang environment variables:
1. Check file ini
2. Check `.env` file di server
3. Check application logs
4. Check cPanel error logs
