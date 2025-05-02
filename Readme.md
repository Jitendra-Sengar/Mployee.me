# Mployee.me

Mployee.me is a job listing web application built with React (Vite), Tailwind CSS, Express.js, and MongoDB. It allows users to view job listings, search by location, and view detailed information for each job.

---

## 🚀 Live Links

- **Frontend**: [https://mployee-me-pi.vercel.app/](https://mployee-me-pi.vercel.app/)
- **Backend**: [https://mployee-me.onrender.com](https://mployee-me.onrender.com)

---

## 🛠️ How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Jitendra-Sengar/Mployee.me

```

### 2. Setup Backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` folder:

```
PORT=5353
MONGO_URI=your_mongo_connection_string
```

Run the backend server:

```bash
npm start
```

### 3. Setup Frontend

```bash
cd ../Mployee
npm install
```

Create a `.env` file in the `Mployee` folder:

```
VITE_API_URL=http://localhost:5353
```

Run the frontend:

```bash
npm run dev
```

---

## ✅ Features

- Paginated job listing
- Search by location
- Job detail view with job link, experience, etc.
- Responsive design for all devices

---

## 📌 Assumptions

- All job data in MongoDB contains the necessary fields: `title`, `location`, `company`, `job_link`, `experience`, etc.
- Frontend and backend are hosted separately.

---

## ⚠️ Challenges Faced

- Handling over 10,000+ job entries with efficient pagination and filtering
- Managing responsiveness for both mobile and desktop views
- Git user mismatch during initial commits (solved by rewriting history)

---

## 📧 Contact

For any queries, please contact [jitendrasengar1517@gmail.com](mailto:jitendrasengar1517@gmail.com)