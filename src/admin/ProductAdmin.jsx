import { useState } from "react";
import { useCategories, useSubCategories } from "../Hooks/useCategories";
import { useProducts } from "../Hooks/useProducts";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("products");
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex border-b mb-6">
        <button
          className={`px-4 py-2 ${activeTab === "products" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "categories" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("categories")}
        >
          Categories
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "subcategories" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("subcategories")}
        >
          Subcategories
        </button>
      </div>

      {activeTab === "products" && <ProductAdmin />}
      {activeTab === "categories" && <CategoryAdmin />}
      {activeTab === "subcategories" && <SubCategoryAdmin />}
    </div>
  );
};


const ProductAdmin = () => {
  const { products, isLoading, error, createMutation, updateMutation, deleteMutation } = useProducts();
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { subcategories } = useSubCategories(selectedCategory);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subcategory: "",
    trending: false,
    topselling: false,
    newin: false,
    in_stock: true,
    stock_quantity: 0,
    ratings: 0,
    customizable: false,
    dimensions: "{}",
    finishes: "[]",
    images: [],
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.price || isNaN(formData.price)) errors.price = "Valid price is required";
    if (!formData.category) errors.category = "Category is required";
    
    try {
      JSON.parse(formData.dimensions);
    } catch {
      errors.dimensions = "Invalid JSON format";
    }
    
    try {
      JSON.parse(formData.finishes);
    } catch {
      errors.finishes = "Invalid JSON format";
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    const newValue = type === "checkbox" ? checked : 
                    type === "file" ? files : 
                    value;

    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (type === "file") {
      const previews = Array.from(files).map(file => URL.createObjectURL(file));
      setPreviewImages(previews);
    }

    if (name === "category") {
      setSelectedCategory(value);
    }

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      
      // Append all fields
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);

      // Optional fields
      if (formData.description) formDataToSend.append("description", formData.description);
      if (formData.subcategory) formDataToSend.append("subcategory", formData.subcategory);
      
      // Boolean fields
      formDataToSend.append("trending", formData.trending);
      formDataToSend.append("topselling", formData.topselling);
      formDataToSend.append("newin", formData.newin);
      formDataToSend.append("in_stock", formData.in_stock);
      formDataToSend.append("customizable", formData.customizable);
      
      // Numeric fields
      formDataToSend.append("stock_quantity", formData.stock_quantity);
      formDataToSend.append("ratings", formData.ratings);
      
      // JSON fields
      formDataToSend.append("dimensions", formData.dimensions);
      formDataToSend.append("finishes", formData.finishes);

      // Handle images
      if (formData.images?.length > 0) {
        Array.from(formData.images).forEach(image => {
          formDataToSend.append("images", image);
        });
      }

      if (editingProduct) {
        await updateMutation.mutateAsync({
          slug: editingProduct.slug,
          formData: formDataToSend
        });
        setSuccessMessage("Product updated successfully!");
      } else {
        await createMutation.mutateAsync(formDataToSend);
        setSuccessMessage("Product created successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response?.data) {
        setFormErrors(error.response.data);
      } else {
        setFormErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      subcategory: "",
      trending: false,
      topselling: false,
      newin: false,
      in_stock: true,
      stock_quantity: 0,
      ratings: 0,
      customizable: false,
      dimensions: "{}",
      finishes: "[]",
      images: [],
    });
    setPreviewImages([]);
    setExistingImages([]);
    setEditingProduct(null);
    setSelectedCategory("");
    setFormErrors({});
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description || "",
      price: product.price,
      category: product.category?.slug || "",
      subcategory: product.subcategory?.slug || "",
      trending: product.trending || false,
      topselling: product.topselling || false,
      newin: product.newin || false,
      in_stock: product.in_stock !== false,
      stock_quantity: product.stock_quantity || 0,
      ratings: product.ratings || 0,
      customizable: product.customizable || false,
      dimensions: JSON.stringify(product.dimensions || {}),
      finishes: JSON.stringify(product.finishes || []),
      images: []
    });
    setSelectedCategory(product.category?.slug || "");
    setExistingImages(product.images || []);
    setPreviewImages([]);
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error.message}</div>;
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {formErrors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {formErrors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Price*</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className={`w-full p-2 border rounded ${formErrors.price ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.price && <p className="text-red-500 text-sm mt-1">{formErrors.price}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.category ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select Category</option>
                {categories?.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
              {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subcategory</label>
              <select
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                disabled={!formData.category}
              >
                <option value="">Select Subcategory</option>
                {subcategories?.map((subcat) => (
                  <option key={subcat.slug} value={subcat.slug}>{subcat.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Product Images</label>
              <input
                type="file"
                name="images"
                multiple
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {previewImages.map((src, index) => (
                  <img 
                    key={`preview-${index}`} 
                    src={src} 
                    alt="Preview" 
                    className="w-20 h-20 object-cover rounded border"
                  />
                ))}
                {existingImages.map((img, index) => (
                  <img 
                    key={`existing-${index}`}
                    src={img.image} 
                    alt="Existing" 
                    className="w-20 h-20 object-cover rounded border"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Stock Quantity</label>
                <input
                  type="number"
                  name="stock_quantity"
                  value={formData.stock_quantity}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Ratings (0-5)</label>
                <input
                  type="number"
                  name="ratings"
                  value={formData.ratings}
                  onChange={handleInputChange}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Dimensions (JSON)</label>
              <textarea
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.dimensions ? 'border-red-500' : 'border-gray-300'}`}
                rows="2"
              />
              {formErrors.dimensions && <p className="text-red-500 text-sm mt-1">{formErrors.dimensions}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Finishes (JSON)</label>
              <textarea
                name="finishes"
                value={formData.finishes}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.finishes ? 'border-red-500' : 'border-gray-300'}`}
                rows="2"
              />
              {formErrors.finishes && <p className="text-red-500 text-sm mt-1">{formErrors.finishes}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="trending" 
                  checked={formData.trending} 
                  onChange={handleInputChange} 
                  className="mr-2"
                />
                Trending
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="topselling" 
                  checked={formData.topselling} 
                  onChange={handleInputChange} 
                  className="mr-2"
                />
                Top Selling
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="newin" 
                  checked={formData.newin} 
                  onChange={handleInputChange} 
                  className="mr-2"
                />
                New In
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="in_stock" 
                  checked={formData.in_stock} 
                  onChange={handleInputChange} 
                  className="mr-2"
                />
                In Stock
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="customizable" 
                  checked={formData.customizable} 
                  onChange={handleInputChange} 
                  className="mr-2"
                />
                Customizable
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          {editingProduct && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={createMutation.isLoading || updateMutation.isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {editingProduct ? "Update Product" : "Add Product"}
            {(createMutation.isLoading || updateMutation.isLoading) && (
              <span className="ml-2">...</span>
            )}
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <span className="font-bold">${product.price}</span>
            </div>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            
            <div className="mt-2 text-sm">
              <p><span className="font-medium">Category:</span> {product.category?.name}</p>
              {product.subcategory && (
                <p><span className="font-medium">Subcategory:</span> {product.subcategory.name}</p>
              )}
              <p><span className="font-medium">Stock:</span> {product.stock_quantity}</p>
              <p><span className="font-medium">Rating:</span> {product.ratings}/5</p>
            </div>

            {product.images.length > 0 && (
              <div className="flex overflow-x-auto gap-2 mt-3 pb-2">
                {product.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image.image} 
                    alt={`Product ${index + 1}`} 
                    className="h-16 w-16 object-cover rounded border"
                  />
                ))}
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteConfirm(product.slug)}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteMutation.mutate(deleteConfirm);
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const CategoryAdmin = () => {
  const { 
    categories, 
    isLoading, 
    error, 
    createMutation, 
    updateMutation, 
    deleteMutation 
  } = useCategories();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name?.trim()) errors.name = "Name is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      setPreviewImage(files[0] ? URL.createObjectURL(files[0]) : null);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      if (formData.description) formDataToSend.append("description", formData.description);
      if (formData.image) formDataToSend.append("image", formData.image);

      if (editingCategory) {
        await updateMutation.mutateAsync({
          slug: editingCategory.slug,
          formData: formDataToSend
        });
        setSuccessMessage("Category updated successfully!");
      } else {
        await createMutation.mutateAsync(formDataToSend);
        setSuccessMessage("Category created successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response?.data) {
        setFormErrors(error.response.data);
      } else {
        setFormErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      image: null,
    });
    setPreviewImage(null);
    setEditingCategory(null);
    setFormErrors({});
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || "",
      image: null,
    });
    if (category.image) {
      setPreviewImage(category.image);
    }
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Category Management</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {formErrors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {formErrors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {(previewImage || (editingCategory?.image && !formData.image)) && (
                <div className="mt-2">
                  <img 
                    src={previewImage || editingCategory?.image} 
                    alt="Preview" 
                    className="w-40 h-40 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          {editingCategory && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={createMutation.isLoading || updateMutation.isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {editingCategory ? "Update Category" : "Add Category"}
            {(createMutation.isLoading || updateMutation.isLoading) && (
              <span className="ml-2">...</span>
            )}
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mb-4">Category List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category) => (
          <div key={category.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
            <p className="text-gray-600 text-sm mt-1">{category.description}</p>
            
            {category.image && (
              <div className="mt-2">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleEdit(category)}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteConfirm(category.slug)}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4">Are you sure you want to delete this category?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteMutation.mutate(deleteConfirm);
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const SubCategoryAdmin = () => {
  const { categories } = useCategories();
  const { 
    subcategories, 
    isLoading, 
    error, 
    createMutation, 
    updateMutation, 
    deleteMutation 
  } = useSubCategories();
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name?.trim()) errors.name = "Name is required";
    if (!formData.category) errors.category = "Category is required";
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file") {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      setPreviewImage(files[0] ? URL.createObjectURL(files[0]) : null);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("category", formData.category);
      if (formData.description) formDataToSend.append("description", formData.description);
      if (formData.image) formDataToSend.append("image", formData.image);

      if (editingSubCategory) {
        await updateMutation.mutateAsync({
          slug: editingSubCategory.slug,
          formData: formDataToSend
        });
        setSuccessMessage("Subcategory updated successfully!");
      } else {
        await createMutation.mutateAsync(formDataToSend);
        setSuccessMessage("Subcategory created successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response?.data) {
        setFormErrors(error.response.data);
      } else {
        setFormErrors({ general: "An error occurred. Please try again." });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      image: null,
    });
    setPreviewImage(null);
    setEditingSubCategory(null);
    setFormErrors({});
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const handleEdit = (subcategory) => {
    setEditingSubCategory(subcategory);
    setFormData({
      name: subcategory.name,
      description: subcategory.description || "",
      category: subcategory.category?.slug || "",
      image: null,
    });
    if (subcategory.image) {
      setPreviewImage(subcategory.image);
    }
  };

  if (isLoading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Subcategory Management</h1>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {successMessage}
        </div>
      )}

      {formErrors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {formErrors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Category*</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.category ? 'border-red-500' : 'border-gray-300'}`}
              >
                <option value="">Select Category</option>
                {categories?.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
              {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subcategory Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="3"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Subcategory Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {(previewImage || (editingSubCategory?.image && !formData.image)) && (
                <div className="mt-2">
                  <img 
                    src={previewImage || editingSubCategory?.image} 
                    alt="Preview" 
                    className="w-40 h-40 object-cover rounded-lg border"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          {editingSubCategory && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={createMutation.isLoading || updateMutation.isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {editingSubCategory ? "Update Subcategory" : "Add Subcategory"}
            {(createMutation.isLoading || updateMutation.isLoading) && (
              <span className="ml-2">...</span>
            )}
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mb-4">Subcategory List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {subcategories?.map((subcategory) => (
          <div key={subcategory.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{subcategory.name}</h3>
            </div>
            <p className="text-sm text-gray-600">Category: {subcategory.category?.name}</p>
            <p className="text-gray-600 text-sm mt-1">{subcategory.description}</p>
            
            {subcategory.image && (
              <div className="mt-2">
                <img 
                  src={subcategory.image} 
                  alt={subcategory.name} 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            )}

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => handleEdit(subcategory)}
                className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => setDeleteConfirm(subcategory.slug)}
                className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4">Are you sure you want to delete this subcategory?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteMutation.mutate(deleteConfirm);
                  setDeleteConfirm(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// CategoryAdmin and SubCategoryAdmin components would follow similar patterns
// with proper form validation, image handling, and confirmation dialogs

export default AdminPanel;