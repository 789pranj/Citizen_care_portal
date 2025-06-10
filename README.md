# AI-Powered Citizen Complaints Redressal System

This project implements an *AI-Powered Citizen Complaints Redressal System* that classifies citizen complaints into categories based on *priority, **sentiment, and **department* using a *Retrieval Augmented Generation (RAG)* architecture.

---

## Due to very large size of model I am unable to upload it but I will be uplaoding it very soon as I tackle the problem

## 🚀 Features

### 🧠 Backend

#### ⚙️ AI-Powered Backend (Python + FastAPI)
- **Python** – Core language for AI/ML logic
- **FastAPI** – High-performance, async-ready REST API
- **Google Generative AI (Gemini Pro)** – Powerful model used for complaint categorization and response generation
- **Retrieval Augmented Generation (RAG)** – Combines vector-based retrieval with generative responses to improve classification accuracy
- **Sentence-Transformers** – Converts complaint text into meaningful vector embeddings
- **Pandas** – Used for historical data analysis, feedback trends, and summary generation
- **Custom Vector Store** – Optimized for fast retrieval of semantically similar complaints
- **Text Preprocessing Pipeline** – For cleaning and preparing text (removing noise, punctuation, etc.)

#### 🔐 MERN Stack Backend (Node.js + Express + MongoDB)
- **Node.js & Express.js** – RESTful API handling, middleware, and routing logic
- **MongoDB with Mongoose** – For modeling and managing complaint, user, and feedback data

#### 🔒 Authentication & Authorization
- **JWT-Based Auth** – Secure JSON Web Token implementation for user and admin login
- **Role-Based Access Control (RBAC)** – Differentiates between user, admin, and department-level permissions
- **bcrypt Password Hashing** – Ensures secure storage of user credentials

#### 📋 Complaint Management
- Submit new complaint with: name, category, priority, location, summary
- Admin can:
  - View all complaints
  - Filter by **status**, **priority**, **category**, and **name**
  - Change the complaint **status** (Pending → In Progress → Resolved)
- Complaints stored with sentiment metadata and AI-generated summaries (via Gemini)

#### 📊 Feedback System
- Users can submit feedback from the dashboard
- Admin can view all feedbacks from a centralized panel
- Feedback includes text, rating, and timestamps

#### 🔍 Search & Filtering
- API supports:
  - Search by name or category
  - Filter by status or priority
  - Sort by priority (High > Medium > Low)
- Pagination-ready endpoints for scalable UI

#### 🛡️ Admin Panel APIs
- Admin dashboard with:
  - Total complaints overview
  - Category-wise breakdown
  - Recent feedback & complaint activity
  - Complaint status updater
- APIs return complaint metrics (total, resolved, pending)

#### 🧪 Validation & Error Handling
- Custom error responses for missing fields or invalid tokens
- Global error handler middleware
- Input validation using `express-validator`

#### 🌐 CORS & API Security
- CORS enabled for safe frontend-backend communication
- Rate limiting and sanitization middleware (optional) for security

#### 📦 Deployment-Ready
- `.env` configuration for Mongo URI, JWT secret, and Gemini keys
- Easily deployable on **Render**, **Vercel**, **Railway**, or **Heroku**


---

## 🛠️ Technologies Used

### Frontend
- *MERN Stack* (MongoDB, Express, React, Node.js)
- *React*
- *Vite* – for fast front-end tooling and development server
- *Tailwind CSS* – utility-first CSS framework
- *Lucide React* – for customizable icons

### 🧠 Backend

#### ⚙️ AI-Powered Backend (Python + FastAPI)
- **Python** – Core language for AI/ML tasks
- **FastAPI** – High-performance REST API framework
- **Google Generative AI (Gemini Pro)** – Used for intelligent classification and context generation
- **Pandas** – Data manipulation and preprocessing
- **Sentence-Transformers** – To generate embeddings from complaint text
- **Conceptual Vector Store** – Custom vector store to retrieve similar complaints using embeddings
- **Retrieval Augmented Generation (RAG)** – Boosts model performance by combining embeddings with generation

#### 🔐 MERN Stack Backend (Node.js + Express + MongoDB)
- **Node.js & Express** – Server-side logic for handling routes, controllers, and middleware
- **MongoDB** – NoSQL database for storing:
  - Complaints
  - Users
  - Feedback
  - Admin logs
- **Mongoose ODM** – For schema modeling and seamless database interaction
- **Authentication & Authorization**:
  - JWT-based login/logout for users and admin
  - Role-based access control
  - Secure password hashing with bcrypt
- **Complaint Management APIs**:
  - Submit new complaint
  - Update complaint status (Admin)
  - View all complaints by filters: name, status, category, priority
- **Feedback System API**:
  - Add user feedback
  - Fetch all feedback (Admin panel)
- **Middleware**:
  - Authentication checks
  - Error handling
  - Logging


---

## ⚙️ Setup and Installation
## For ML model
### 1. Clone the Repository
```
git clone https://github.com/789pranj/Citizen_care_portal
cd <your-project-directory>
```


### 2. Create and Activate a Virtual Environment
```
python -m venv venv
```

### 3. Install Dependencies
```
pip install -r requirements.txt
```

## For Backend
```
cd backend 
npm i 
npm run dev
```

## For Frontend
```
cd fronted
npm i
nmp run dev
```

### 📷 Sample Screenshots
![Dashboard](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597605/WhatsApp_Image_2025-06-11_at_4.46.56_AM_ujjs6i.jpg)

![Complaints Table](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597605/WhatsApp_Image_2025-06-11_at_4.47.14_AM_aht8du.jpg)

![Complaint Detail](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597605/WhatsApp_Image_2025-06-11_at_4.47.14_AM_1_umjyau.jpg)

![AI Form](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597605/WhatsApp_Image_2025-06-11_at_4.44.30_AM_xnujoj.jpg)

![User Complaints](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597605/WhatsApp_Image_2025-06-11_at_4.43.56_AM_wohqrk.jpg)

![Resolved Complaints](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597604/WhatsApp_Image_2025-06-11_at_4.45.14_AM_u91vjq.jpg)

![User Profile](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597604/WhatsApp_Image_2025-06-11_at_4.45.38_AM_xfwlta.jpg)

![Feedback List](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597604/WhatsApp_Image_2025-06-11_at_4.46.11_AM_hiaohy.jpg)

![Priority Highlight](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597604/WhatsApp_Image_2025-06-11_at_4.45.56_AM_opj2nx.jpg)

![Admin Panel](https://res.cloudinary.com/duxeqhtxe/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1749597604/WhatsApp_Image_2025-06-11_at_4.46.42_AM_qgwqy7.jpg)
