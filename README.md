# 🚀 REST API - CRUD Data Products

Simple REST API built with Express.js and PostgreSQL, containerized with Docker Compose.

## 🛠️ Tech Stack

- **Runtime:** Node.js Ver 18
- **Framework:** Express.js
- **Database:** PostgreSQL 15
- **Driver:** node-postgres (pg)
- **Container:** Docker & Docker Compose

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

### Row Data - Note: Data ID 1 tidak ada karena ditest untuk query delete jadi hanya menampilkan data dari ID 2-12
![Terminal Screenshot](https://github.com/user-attachments/assets/f9036055-695d-46e8-a50d-f13a69fccc52)

### Postman - Created
![Postman Screenshot](https://github.com/user-attachments/assets/29832400-1981-4102-a223-bf7c6729223e)

### Postman - Update
![Postman Screenshot](https://github.com/user-attachments/assets/4d93b52f-e975-42bf-92a9-bf4bf10cc0ac)

### Postman - Delete
![Postman Screenshot](https://github.com/user-attachments/assets/ed62aa52-359b-4fa9-98ed-b8122728d072)

---

## 👤 Author

**Davin Gabriel Jonathan** — Member Backend Dev GDGoC Unsri 2026
