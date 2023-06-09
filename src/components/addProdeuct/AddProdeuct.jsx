import React, { useState } from "react";
import Input from "../Input/Input.jsx";
import "./AddProdeuct.scss";

function ProductAddPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [languages, setLanguages] = useState([]);
  const [productLink, setProductLink] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      name,
      category,
      languages,
      productLink,
      description,
      price,
      githubLink,
      phone,
    };
    console.log("New product:", newProduct);

    // Yangi mahsulotni serverga POST so'rovini yuborish
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Yangi mahsulot muvaffaqiyatli saqlandi
        console.log("New product saved:", data);
        setName("");
        setCategory("");
        setLanguages([]);
        setProductLink("");
        setDescription("");
        setPrice("");
        setGithubLink("");
        setPhone("");
      })
      .catch((error) => {
        console.error("Error saving product:", error);
      });
  }

  function handleLanguageChange(event) {
    const language = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setLanguages([...languages, language]);
    } else {
      setLanguages(languages.filter((lang) => lang !== language));
    }
  }

  return (
    <section className="product-add">
      <div className="container">
        <div className="product-add-page">
          <h1 className="text-center mt-5">Add Product</h1>
          <form onSubmit={handleSubmit}>
            <div className="ProNameCategory">
              <div className="form-group">
                <label htmlFor="name">Product Name:</label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <Input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Languages:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="JavaScript"
                    checked={languages.includes("JavaScript")}
                    onChange={handleLanguageChange}
                  />
                  JavaScript
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Python"
                    checked={languages.includes("Python")}
                    onChange={handleLanguageChange}
                  />
                  Python
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Java"
                    checked={languages.includes("Java")}
                    onChange={handleLanguageChange}
                  />
                  Java
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="C++"
                    checked={languages.includes("C++")}
                    onChange={handleLanguageChange}
                  />
                  C++
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="productLink">Product Link:</label>
              <Input
                type="text"
                id="productLink"
                value={productLink}
                onChange={(event) => setProductLink(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="githubLink">Github Link:</label>
              <Input
                type="text"
                id="githubLink"
                value={githubLink}
                onChange={(event) => setGithubLink(event.target.value)}
              />
            </div>
            <div className="ProPricePhone">
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <Input
                  type="text"
                  id="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <Input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="mt-5">Save</button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default ProductAddPage;