# AI-Powered Citizen Complaints Redressal System

This project implements an *AI-Powered Citizen Complaints Redressal System* that classifies citizen complaints into categories based on *priority, **sentiment, and **department* using a *Retrieval Augmented Generation (RAG)* architecture.

---

## Due to very large size of model I am unable to upload it but I will bw uplaoding it very soon as I tackle the problem

## 🚀 Features

1. *Complaint Classification*  
   Automatically classifies citizen complaints into predefined categories based on various criteria.

2. *Retrieval Augmented Generation (RAG)*  
   Enhances classification accuracy by retrieving and incorporating relevant historical complaint data.

3. *Gemini Integration*  
   Utilizes Google's state-of-the-art *Gemini-2.0-flash* model for robust natural language understanding and generation.

4. *FastAPI Backend*  
   Provides a high-performance, asynchronous API for seamless integration with front-end applications or other services.

5. *Vector Embeddings*  
   Uses embeddings to find semantically similar complaints for context enhancement during classification.

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
