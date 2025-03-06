// src/components/ProductAdmin.js
import { useProducts } from "../hooks/useProducts";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CATEGORY_CHOICES = [
  "Sofas", "Beds", "Tables", "Book Shelf", "Cabinet", 
  "Dining", "Bar", "Pooja", "TV Units", "Wardrobe", 
  "Wall Panels", "Paintings"
];

export default function ProductAdmin() {
  const { products, isLoading, error, mutation, deleteMutation } = useProducts();
  const { register, handleSubmit, reset, setValue } = useForm();
  const [editSlug, setEditSlug] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("trending", data.trending ? "true" : "false");
    formData.append("topselling", data.topselling ? "true" : "false");
    formData.append("newin", data.newin ? "true" : "false");
    formData.append("in_stock", data.in_stock ? "true" : "false");

    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    mutation.mutate({ slug: editSlug, formData });
    reset();
    setEditSlug(null);
  };

  const handleEdit = (product) => {
    setEditSlug(product.slug);
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("price", product.price);
    setValue("category", product.category);
    setValue("trending", product.trending);
    setValue("topselling", product.topselling);
    setValue("newin", product.newin);
    setValue("in_stock", product.in_stock);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{editSlug ? "Edit" : "Add"} Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="border p-2 w-full" required />
        <textarea {...register("description")} placeholder="Description" className="border p-2 w-full" />
        <input type="number" {...register("price")} placeholder="Price" className="border p-2 w-full" required />

        <select {...register("category")} className="border p-2 w-full" required>
          <option value="">Select Category</option>
          {CATEGORY_CHOICES.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <label><input type="checkbox" {...register("trending")} /> Trending</label>
        <label><input type="checkbox" {...register("topselling")} /> Top Selling</label>
        <label><input type="checkbox" {...register("newin")} /> New In</label>
        <label><input type="checkbox" {...register("in_stock")} /> In Stock</label>

        <input type="file" {...register("image")} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {mutation.isLoading ? "Saving..." : editSlug ? "Update" : "Add"}
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-6 mb-4">Product List</h2>
      <p className="mb-4 text-lg font-semibold">
        Total Products: {products?.length || 0}
      </p>

      {isLoading ? <p>Loading...</p> : error ? <p>Error loading products</p> : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">S.No</th>
              <th className="border p-2">ID</th>
              <th className="border p-2">Slug</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Trending</th>
              <th className="border p-2">Top Selling</th>
              <th className="border p-2">New In</th>
              <th className="border p-2">In Stock</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{product.id}</td>
                <td className="border p-2">{product.slug}</td>
                <td className="border p-2">
                  <img src={product.image} alt={product.name} className="h-16 w-16 object-cover" />
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.description}</td>
                <td className="border p-2">${product.price}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">{product.trending ? "✔" : "✘"}</td>
                <td className="border p-2">{product.topselling ? "✔" : "✘"}</td>
                <td className="border p-2">{product.newin ? "✔" : "✘"}</td>
                <td className="border p-2">{product.in_stock ? "✔" : "✘"}</td>
                <td className="border p-2">
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => deleteMutation.mutate(product.slug)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
