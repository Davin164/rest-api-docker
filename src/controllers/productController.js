const pool = require('../config/db');

// POST - Create product
const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
      return res.status(400).json({
        status: 'error',
        message: 'name, price, and stock are required',
      });
    }

    const result = await pool.query(
      'INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *',
      [name, price, stock]
    );

    return res.status(201).json({
      status: 'success',
      message: 'Product created successfully',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error creating product:', err.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

// GET ALL - Get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id ASC');

    return res.status(200).json({
      status: 'success',
      data: result.rows,
    });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

// GET BY ID - Get single product
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }

    return res.status(200).json({
      status: 'success',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error fetching product:', err.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

// PUT - Update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
      return res.status(400).json({
        status: 'error',
        message: 'name, price, and stock are required',
      });
    }

    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, stock = $3 WHERE id = $4 RETURNING *',
      [name, price, stock, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error updating product:', err.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

// DELETE - Delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM products WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Product deleted successfully',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };