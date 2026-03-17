# 🚀 REST API - Products

Simple REST API built with Express.js and PostgreSQL, containerized with Docker Compose.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL 15
- **Driver:** node-postgres (pg)
- **Containerization:** Docker & Docker Compose

## 📁 Project Structure
```
rest-api-docker/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoutes.js
│   └── index.js
├── .env.example
├── .gitignore
├── docker-compose.yml
├── init.sql
└── README.md
```

## ⚙️ How to Run

### 1. Clone repository
```bash
git clone <your-repo-url>
cd rest-api-docker
```

### 2. Setup environment
```bash
cp .env.example .env
# Sesuaikan isi .env dengan konfigurasi kamu
```

### 3. Jalankan database dengan Docker
```bash
docker-compose up -d
```

### 4. Install dependencies
```bash
npm install
```

### 5. Jalankan aplikasi
```bash
npm run dev
```

## 📌 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `POST` | `/api/products` | Tambah produk baru |
| `GET` | `/api/products` | Ambil semua produk |
| `GET` | `/api/products/:id` | Ambil produk by ID |
| `PUT` | `/api/products/:id` | Update produk |
| `DELETE` | `/api/products/:id` | Hapus produk |

## 📦 Contoh Request & Response

### POST /api/products

**Request Body:**
```json
{
  "name": "Mechanical Keyboard",
  "price": 850000,
  "stock": 10
}
```

**Response 201 Created:**
```json
{
  "status": "success",
  "message": "Product created successfully",
  "data": {
    "id": 1,
    "name": "Mechanical Keyboard",
    "price": "850000.00",
    "stock": 10,
    "created_at": "2026-03-17T05:50:30.650Z"
  }
}
```

## 📸 Screenshots

### Postman - 201 Created
![Postman Screenshot]([screenshots/postman.png](https://github.com/user-attachments/assets/e5c111ce-c287-481b-9fc5-44bf755675ac])

### Database - Row Data
![Database Screenshot](screenshots/database.png)
