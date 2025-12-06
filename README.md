## ⚙️ Prerequisites

Install the following before running the project:

- **Node.js** (v16+ recommended)
- **npm** (comes with Node)
- **MongoDB** (Local installation or Atlas Cloud)
- **Git** (for version control)

---

## 🔐 Environment Variables (Backend)

Create a `.env` file inside the **server/** folder with the following content:

```env
# Server Port
PORT=5000

# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/BookDB

# JWT Authentication Secret
JWT_SECRET=your_jwt_secret_here

# Razorpay API Keys
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=rzp_test_yyy
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here   # optional

# CORS frontend URL
CLIENT_URL=http://localhost:3000

# Optional admin credentials (if your project supports admin login)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
