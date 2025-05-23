import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBlogs, addBlog, updateBlog, deleteBlog } from "../services/BlogService";

export default function AdminBlog() {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ title: "", content: "", image: null });
  const [editId, setEditId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const { data: blogs = [], isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const addMutation = useMutation({
    mutationFn: (newBlog) => addBlog(newBlog),
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateBlog(id, data),
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteBlog(id),
    onSuccess: () => queryClient.invalidateQueries(["blogs"]),
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        setPreviewImage(URL.createObjectURL(file));
      }
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
      updateMutation.mutate({ id: editId, data: form });
      setEditId(null);
    } else {
      addMutation.mutate(form);
    }

    setFormData({ title: "", content: "", image: null });
    setPreviewImage(null);
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      content: blog.content,
      image: blog.image || null,
    });

    setPreviewImage(blog.image);
    setEditId(blog.id);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs.</p>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="p-2 border rounded w-full" />
        <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} className="p-2 border rounded w-full"></textarea>
        
        {previewImage && (
          <div className="mb-4">
            <p>Current Image:</p>
            <img src={`${previewImage}`} alt="Preview" className="w-32 h-32 object-cover rounded" />
          </div>
        )}

        <input type="file" name="image" accept="image/*" onChange={handleChange} className="p-2 border rounded w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">{editId ? "Update" : "Add"} Blog</button>
      </form>
      
      <div className="mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded mb-4">
            <h3 className="font-bold">{blog.title}</h3>
            <p>{blog.content}</p>
            {blog.image && <img src={`${blog.image}`} alt="Blog" className="w-20 h-20 object-cover mt-2 rounded" />}
            <button onClick={() => handleEdit(blog)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
            <button onClick={() => handleDelete(blog.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
