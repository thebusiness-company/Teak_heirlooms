import { useState } from "react";
import { useShopBanner } from "../Hooks/useShopBanner";

const ShopBannerAdmin = () => {
  const { banners, isLoading, addMutation, updateMutation, deleteMutation } = useShopBanner();
  const [form, setForm] = useState({ title: "", description: "", price_text: "", image_left: null, image_right: null });
  const [editingBanner, setEditingBanner] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append only non-empty fields to FormData
    Object.keys(form).forEach((key) => {
      if (form[key]) {
        formData.append(key, form[key]);
      }
    });

    if (editingBanner) {
      updateMutation.mutate({ id: editingBanner.id, formData });
    } else {
      addMutation.mutate(formData);
    }

    setForm({ title: "", description: "", price_text: "", image_left: null, image_right: null });
    setEditingBanner(null);
  };

  const handleEdit = (banner) => {
    setEditingBanner(banner);
    setForm({
      title: banner.title,
      description: banner.description,
      price_text: banner.price_text,
      image_left: null, // Don't prefill images
      image_right: null,
    });
  };

  const handleDelete = (id) => {
      deleteMutation.mutate(id);
  };

  return (
    <div className="p-5 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{editingBanner ? "Edit Banner" : "Add New Banner"}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
        <input type="text" name="price_text" value={form.price_text} onChange={handleChange} placeholder="Price Text" className="w-full p-2 border rounded" />
        <input type="file" name="image_left" onChange={handleFileChange} className="w-full p-2 border rounded" />
        <input type="file" name="image_right" onChange={handleFileChange} className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingBanner ? "Update Banner" : "Upload Banner"}
        </button>
      </form>

      <h3 className="text-xl font-bold mt-6">Existing Banners</h3>
      {isLoading ? <p>Loading...</p> : banners?.map((banner) => (
        <div key={banner.id} className="p-4 border rounded my-2 flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{banner.title}</h4>
            <p>{banner.description}</p>
            <p className="text-red-500">{banner.price_text}</p>
            <div className="flex gap-4">
              {banner.image_left && <img src={banner.image_left} alt="Left" className="w-20 h-20 object-cover" />}
              {banner.image_right && <img src={banner.image_right} alt="Right" className="w-20 h-20 object-cover" />}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => handleEdit(banner)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => handleDelete(banner.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopBannerAdmin;
