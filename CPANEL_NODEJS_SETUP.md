# Cara Setup Node.js App di cPanel - Langkah Demi Langkah

## Persiapan Awal

Pastikan anda sudah:
1. ✅ Upload semua files ke `/home/hypercon/public_html/web.hyperconcretetech.com`
2. ✅ Create file `.env` dengan database credentials
3. ✅ Run `npm install`
4. ✅ Run `npm run build`
5. ✅ Run database migrations: `npx drizzle-kit migrate`

---

## Langkah 1: Buka cPanel

1. Login ke cPanel dengan username `hypercon`
2. Cari menu **"Node.js Selector"** atau **"Node.js App"**
   - Biasanya ada di section "Software"
   - Atau search "Node" di search bar

![cPanel Home](https://via.placeholder.com/600x400?text=cPanel+Home)

---

## Langkah 2: Klik "Create Application"

Di halaman Node.js Selector, klik tombol **"Create Application"** atau **"+"**

![Create Application](https://via.placeholder.com/600x400?text=Create+Application)

---

## Langkah 3: Isi Form Application Details

### Field 1: Node.js Version
```
Pilih: 20.20.0
```
(Sesuaikan dengan versi yang anda punya di cPanel)

### Field 2: Application Root
```
/home/hypercon/public_html/web.hyperconcretetech.com
```
⚠️ **PENTING:** Ini adalah folder di mana anda upload files

### Field 3: Application Startup File
```
dist/index.js
```
⚠️ **PENTING:** Ini adalah file yang akan dijalankan pertama kali

### Field 4: Application URL
```
https://web.hyperconcretetech.com
```
Atau pilih dari dropdown jika sudah ada

### Field 5: Passenger Log File (Optional)
```
/home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log
```
Ini untuk menyimpan logs aplikasi

---

## Langkah 4: Review Form

Pastikan semua field sudah benar:

| Field | Value |
|-------|-------|
| Node.js Version | 20.20.0 |
| Application Root | /home/hypercon/public_html/web.hyperconcretetech.com |
| Application Startup File | dist/index.js |
| Application URL | https://web.hyperconcretetech.com |
| Passenger Log File | /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log |

---

## Langkah 5: Klik "Create"

Klik tombol **"Create"** atau **"Create Application"**

cPanel akan:
- ✅ Setup Node.js environment
- ✅ Setup reverse proxy dari domain ke aplikasi
- ✅ Inject `process.env.PORT` secara otomatis
- ✅ Start aplikasi

---

## Langkah 6: Tunggu Proses Selesai

Tunggu 1-2 menit untuk aplikasi start. Anda akan lihat:
- Status: **"Running"** atau **"Active"**
- Port yang di-assign (contoh: 3000, 8080, dll)

---

## Langkah 7: Verify Aplikasi

Buka browser dan akses:
```
https://web.hyperconcretetech.com
```

Jika berhasil, anda akan lihat:
- ✅ Homepage Hyper Concrete Tech
- ✅ Navigation menu (About, Services, Locations, Contact, Get Quote)
- ✅ Logo dan hero section

---

## Jika Ada Error

### Error 1: "Application failed to start"

**Solusi:**
1. Check logs di cPanel Node.js App → View Logs
2. Atau via terminal:
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
tail -f logs/app.log
```

3. Common issues:
   - Missing dependencies: `npm install`
   - Database connection: Check `.env` file
   - Wrong startup file: Verify `dist/index.js` exists

### Error 2: "Cannot find module"

**Solusi:**
```bash
cd /home/hypercon/public_html/web.hyperconcretetech.com
npm install
```

### Error 3: "Database connection failed"

**Solusi:**
1. Check `.env` file:
```bash
cat .env | grep DATABASE_URL
```

2. Verify credentials:
   - Username: `hypercon_web1`
   - Password: `Global_08`
   - Database: `hypercon_web`
   - Host: `localhost`

3. Test connection via terminal:
```bash
mysql -u hypercon_web1 -p hypercon_web
# Enter password: Global_08
```

---

## Manage Application

### View Application Status

1. Buka cPanel → Node.js Selector
2. Lihat list aplikasi
3. Status akan menunjukkan "Running" atau "Stopped"

### Restart Application

1. Di cPanel Node.js Selector, cari aplikasi anda
2. Klik **"Restart"** atau **"Reload"**

### Stop Application

1. Klik **"Stop"** atau **"Delete"**

### View Logs

1. Klik aplikasi
2. Klik **"View Logs"**
3. Atau via terminal:
```bash
tail -f /home/hypercon/public_html/web.hyperconcretetech.com/logs/app.log
```

---

## Environment Variables

cPanel akan automatically:
- ✅ Set `NODE_ENV=production` (dari .env file)
- ✅ Inject `PORT` (dari Node.js Selector)
- ✅ Load semua variables dari `.env` file

**Tidak perlu manual setup!**

---

## Troubleshooting Checklist

- [ ] Files sudah upload ke `/home/hypercon/public_html/web.hyperconcretetech.com`
- [ ] `.env` file sudah ada dengan credentials yang benar
- [ ] `npm install` sudah dijalankan
- [ ] `npm run build` sudah dijalankan
- [ ] Database migrations sudah dijalankan: `npx drizzle-kit migrate`
- [ ] `dist/index.js` file exists
- [ ] Node.js version 20.20.0 dipilih di cPanel
- [ ] Application Startup File: `dist/index.js`
- [ ] Application Root: `/home/hypercon/public_html/web.hyperconcretetech.com`

---

## Quick Reference

**Command untuk test di terminal:**

```bash
# SSH ke server
ssh hypercon@your-server.com

# Navigate ke folder
cd /home/hypercon/public_html/web.hyperconcretetech.com

# Check files
ls -la dist/

# Check .env
cat .env

# Check logs
tail -f logs/app.log

# Test database
mysql -u hypercon_web1 -p hypercon_web

# Check Node.js
node --version

# Manual start (untuk testing)
NODE_ENV=production node dist/index.js
```

---

## Support

Jika ada masalah:
1. Check logs: `tail -f logs/app.log`
2. Check cPanel error logs: `/home/hypercon/logs/error_log`
3. Verify `.env` file
4. Verify database connection
5. Restart aplikasi di cPanel Node.js Selector
