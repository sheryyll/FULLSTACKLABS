import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", category: "" });
  const [loading, setLoading] = useState(false);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Input change handler
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: Number(form.price), // Convert price to number
        }),
      });

      const newProduct = await res.json();

      if (!newProduct.error) {
        setProducts([...products, newProduct]);
        setForm({ name: "", price: "", category: "" });
      } else {
        alert("Error: " + newProduct.error);
      }
    } catch (err) {
      console.error("Error adding product:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Product Manager</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ marginRight: "10px" }}
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          style={{ marginRight: "10px" }}
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          style={{ marginRight: "10px" }}
        />

        <button type="submit">
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              {p.name} – ₹{p.price} ({p.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
