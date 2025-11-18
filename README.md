# Dokumentasi Book API (Express JS)

Base URL server (default): `http://localhost:3000`  
Prefix resource buku: `/books`

---

## 1. Dokumentasi Fungsi Controller (`bookController.js`)

### 1.1. `getAllBooks(req, res)`

**Fungsi:**
Mengambil daftar semua buku.  
Mendukung filter berdasarkan `author` melalui query string.

**Alur logika:**
- Baca `author` dari `req.query`.
- Jika `author` ada:
  - Filter array `books` hanya yang `book.author.toLowerCase() === author.toLowerCase()`.
  - Kembalikan JSON berisi pesan dan data buku hasil filter.
- Jika `author` tidak ada:
  - Kembalikan JSON berisi pesan dan semua data buku (`books`).

**Response berhasil (200):**
```json
{
  "message": "Daftar semua buku",
  "data": [
    {
      "id": 1,
      "title": "Laskar Pelangi",
      "author": "Andrea Hirata",
      "year": 2005
    }
  ]
}
