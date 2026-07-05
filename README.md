# 🏥 AI Health Predictor

An AI-powered web application that predicts the risk of **Diabetes** and **Heart Disease** using Machine Learning models. The project provides secure user authentication, prediction history, and an intuitive dashboard built with FastAPI and React.

---

## 📌 Features

- 🔐 JWT Authentication (Register & Login)
- 🩺 Diabetes Risk Prediction
- ❤️ Heart Disease Prediction
- 🤖 Machine Learning Models trained using Scikit-learn
- 📊 Prediction Probability & Recommendations
- 📝 Prediction History
- 👤 User-specific Predictions
- 🎨 Modern Responsive UI with Material UI
- 🗄 PostgreSQL Database
- 🚀 REST API built with FastAPI

---

## 🛠 Tech Stack

### Frontend
- React.js
- Material UI
- Axios
- React Router DOM

### Backend
- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- Pydantic

### Machine Learning
- Python
- Scikit-learn
- Pandas
- NumPy
- Joblib

---

## 📂 Project Structure

```
AI-Health-Predictor/
│
├── backend/
│   ├── app/
│   │   ├── auth/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── ml/
│   │   ├── database.py
│   │   └── main.py
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/AI-Health-Predictor.git
```

```bash
cd AI-Health-Predictor
```

---

## Backend Setup

Create a virtual environment.

```bash
python -m venv .venv
```

Activate it.

### Windows

```bash
.venv\Scripts\activate
```

### Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file.

```env
DATABASE_URL=postgresql://username:password@localhost:5432/healthdb

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

Run the backend.

```bash
uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend
```

Install packages.

```bash
npm install
```

Run React.

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Machine Learning Models

This project includes:

- Diabetes Prediction Model
- Heart Disease Prediction Model

Models are trained using **Random Forest Classifier** and saved using **Joblib**.

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register User |
| POST | `/auth/login` | Login |

---

### Diabetes

| Method | Endpoint |
|---------|----------|
| POST | `/diabetes/predict` |

---

### Heart Disease

| Method | Endpoint |
|---------|----------|
| POST | `/heart/predict` |

---

### Prediction History

| Method | Endpoint |
|---------|----------|
| GET | `/prediction/history` |

---

## Screenshots

Add screenshots of:

<img width="1032" height="856" alt="image" src="https://github.com/user-attachments/assets/12534e3e-314d-47f1-9c03-837f98d8ca66" />

<img width="1896" height="867" alt="image" src="https://github.com/user-attachments/assets/eb9d6673-7890-42e6-8932-ae333d10f068" />

<img width="1901" height="862" alt="image" src="https://github.com/user-attachments/assets/c049277f-3608-4c0e-b160-b2d4dbcadc88" />

<img width="1900" height="863" alt="image" src="https://github.com/user-attachments/assets/06beb04a-c638-4708-bfbc-ad8447111c87" />

<img width="1145" height="452" alt="image" src="https://github.com/user-attachments/assets/328639d7-b85d-4aa4-a7c1-3b409a849f27" />

<img width="1893" height="872" alt="image" src="https://github.com/user-attachments/assets/0cff543b-65d5-43e6-bcf1-8385b8782268" />


## Future Improvements

- 📄 Export prediction report as PDF
- 🌙 Dark Mode
- 📈 Analytics Dashboard
- 🧠 Additional Disease Prediction Models
- ☁ Cloud Deployment
- 📧 Email Reports
---

## Disclaimer

This project is intended for educational and research purposes only.

Predictions are generated using Machine Learning models and **should not be considered a medical diagnosis**. Always consult a qualified healthcare professional for medical advice.

---

## License

This project is licensed under the MIT License.
