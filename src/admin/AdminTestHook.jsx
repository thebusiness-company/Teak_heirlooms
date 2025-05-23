import { useState } from "react";
import { useTestimonials } from "../Hooks/useTestimonials";
import { BASEURL } from "../api";

export default function AdminTestimonials() {
  const { testimonials, isLoading, error, addMutation, updateMutation, deleteMutation } = useTestimonials();
  const [formData, setFormData] = useState({ title: "", text: "", name: "", rating: 5, image: null });
  const [editId, setEditId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });

      if (file) setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "image" && value && typeof value === "string") return;
      form.append(key, value);
    });

    if (editId) {
      updateMutation.mutate({ id: editId, formData: form });
      setEditId(null);
    } else {
      addMutation.mutate(form);
    }

    setFormData({ title: "", text: "", name: "", rating: 5, image: null });
    setPreviewImage(null);
  };

  const handleEdit = (testimonial) => {
    setFormData({
      title: testimonial.title,
      text: testimonial.text,
      name: testimonial.name,
      rating: testimonial.rating,
      image: testimonial.image || null,
    });

    setPreviewImage(testimonial.image);
    setEditId(testimonial.id);
  };

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials.</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Testimonials</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 border rounded w-full" />
        <textarea name="text" placeholder="Review" value={formData.text} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="p-2 border rounded w-full" />
        <input type="number" name="rating" min="1" max="5" placeholder="Rating" value={formData.rating} onChange={handleChange} className="p-2 border rounded w-full" />

        {previewImage && (
          <div className="mb-4">
            <p>Current Image:</p>
            <img src={`${previewImage}`} alt="Preview" className="w-32 h-32 object-cover rounded" />
          </div>
        )}

        <input type="file" name="image" accept="image/*" onChange={handleChange} className="p-2 border rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{editId ? "Update" : "Add"} Testimonial</button>
      </form>

      <div className="mt-8">
        {testimonials?.map((testimonial) => (
          <div key={testimonial.id} className="border p-4 rounded mb-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{testimonial.title}</h3>
              <p>{testimonial.text}</p>
              <p className="text-sm text-gray-600">By {testimonial.name} - {testimonial.rating} Stars</p>
              {testimonial.image && <img src={`${testimonial.image}`} alt="Testimonial" className="w-20 h-20 object-cover mt-2 rounded" />}
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(testimonial)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
              <button onClick={() => deleteMutation.mutate(testimonial.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
