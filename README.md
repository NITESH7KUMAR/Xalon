# 💈 Xalon — Salon Appointment Booking Web App

Xalon is a full-stack web application designed to simplify the process of booking salon appointments. It features a sleek, modern UI, secure user authentication, email/SMS notifications, and a dual-database backup system using both MongoDB Atlas and local MongoDB.

---

## 🔗 Live Links

- **Frontend (React on Vercel)**: [https://xalon.vercel.app](https://xalon.vercel.app)
---

## ⚙️ Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, CSS                     |
| Backend   | Node.js, Express               |
| Database  | MongoDB Atlas + Local MongoDB |
| Auth      | bcrypt.js                      |
| Email     | Nodemailer + Gmail SMTP        |
| SMS       | Twilio                         |
| Hosting   | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### 🧑‍💻 User Features
- ✅ Register/Login using email or username
- 🔒 Passwords stored securely (bcrypt hashed)
- 📅 Book salon appointments (date, time, services, gender, etc.)
- 📧 Receive confirmation email
- 📱 Receive SMS notification

### 🛠️ Admin Features
- View all booked appointments
- Cancel appointments

---

## 🛡️ Environment Variables

Create a `.env` file in the backend root:

```env
PORT=5000

# MongoDB
MONGO_URI_LOCAL=mongodb://localhost:27017/xalon
MONGO_URI=mongodb+srv://<your-atlas-user>:<password>@cluster0.mongodb.net/xalon

# Email (Nodemailer)
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_generated_app_password

# Twilio (SMS)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
