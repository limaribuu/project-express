let books = [
    { id: 1, title: "Laskar Pelangi", author: "Andrea Hirata", year: 2005 },
    { id: 2, title: "Sang Pemimpi", author: "Andrea Hirata", year: 2006 },
];

const getAllBooks = (req, res) => {
    const { author } = req.query;

    if (author) {
        const filtered = books.filter(
            (book) => book.author.toLowerCase() === author.toLowerCase()
        );
        return res.json({
            message: `Daftar buku dengan author: ${author}`,
            data: filtered,
        });
    }

    res.json({
        message: "Daftar semua buku",
        data: books,
    });
};

const getBookById = (req, res) => {
    const { id } = req.params;
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    res.json({
        message: `Detail buku dengan id ${id}`,
        data: book,
    });
};

const createBook = (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({
            message: "title, author, dan year wajib diisi",
        });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        year,
    };

    books.push(newBook);

    res.status(201).json({
        message: "Buku berhasil ditambahkan",
        data: newBook,
    });
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const bookIndex = books.findIndex((b) => b.id === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    books[bookIndex] = {
        ...books[bookIndex],
        title: title ?? books[bookIndex].title,
        author: author ?? books[bookIndex].author,
        year: year ?? books[bookIndex].year,
    };

    res.json({
        message: "Buku berhasil diupdate",
        data: books[bookIndex],
    });
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const bookIndex = books.findIndex((b) => b.id === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Buku tidak ditemukan" });
    }

    const deletedBook = books[bookIndex];
    books.splice(bookIndex, 1);

    res.json({
        message: "Buku berhasil dihapus",
        data: deletedBook,
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
