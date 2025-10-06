import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import api, { API_URL } from "../api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import icon from "../assets/images/changeprofile.svg";
import holder from "../assets/images/profileholder.png";
import "react-toastify/dist/ReactToastify.css";

const Spinner = () => (
  <div className="flex justify-center items-center mt-2">
    <div className="animate-spin rounded-full h-6 w-6 border-t-4 border-b-4 border-[#9C0300]"></div>
  </div>
);

const Profile = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(initialFormData());
  const [defaultData, setDefaultData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});

  function initialFormData() {
    return {
      gender: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      dob: "",
      location: "",
      postalCode: "",
    };
  }

  const mapUserData = (data) => ({
    profileImage: data.profile_picture || "",
    gender: data.gender || "",
    firstName: data.first_name || "",
    lastName: data.last_name || "",
    email: data.email || "",
    address: data.address || "",
    phone: data.phone_number || "",
    dob: data.dob || "",  // 'dob' instead of 'date_of_birth'
    location: data.city || "",
    postalCode: data.zip_code || "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await api.get("profile/");
      const userData = mapUserData(res.data);
      setUser(res.data);
      setFormData(userData);
      setDefaultData(userData);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleProfileUpdate = async () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "dob",
      "location",
      "postalCode",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits).";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setUpdating(true);

    try {
      await api.patch("profile/", {
        gender: formData.gender,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        address: formData.address,
        phone_number: formData.phone,
        dob: formData.dob,  // Send 'dob' instead of 'date_of_birth'
        city: formData.location,
        zip_code: formData.postalCode,
      });
      toast.success("Profile updated successfully");
      setDefaultData(formData);
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    const form = new FormData();
    form.append("profile_picture", imageFile);
    setUploading(true);

    try {
      await api.patch("profile/", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Profile picture updated");
      setTimeout(fetchProfile, 1000);
    } catch {
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsAuthenticated(false);
    api.defaults.headers["Authorization"] = null;
    window.location.href = "/";
  };

  const inputFields = [
    ["firstName", "First Name"],
    ["lastName", "Last Name"],
    ["email", "Email"],
    ["address", "Address"],
    ["phone", "Phone No"],
    ["dob", "Date of Birth"],
    ["location", "Location"],
    ["postalCode", "Postal Code"],
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#fef4ea]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row bg-[#fef4ea] min-h-screen p-4 md:p-8">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
        <div className="relative w-28 h-28">
          <img
            src={
              user?.profile_picture
                ? `${API_URL}${user.profile_picture}`
                : holder
            }
            className="rounded-full w-28 h-28 object-cover border-4 border-gray-200"
            alt="Profile"
          />
          <label
            htmlFor="file-upload"
            className={`absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md cursor-pointer ${
              uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <img src={icon} alt="Change Profile" className="w-6 h-6" />
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
        {uploading && <Spinner />}

        <h2 className="text-lg font-semibold">
          {user?.first_name || "Your Name"}
        </h2>
        <button className="text-sm font-semibold bg-gray-200 rounded-full px-4 py-2">
          Personal Information
        </button>
        <Link to="/login" className="hover:text-[#9C0300] px-4 rounded-full w-full text-center">
          Login & Password
        </Link>
        <Link to="/cart" className="hover:text-[#9C0300] px-4 rounded-full w-full text-center">
          My Cart
        </Link>
        <Link to="/orderdetails" className="hover:text-[#9C0300] px-4 rounded-full w-full text-center">
          My Orders
        </Link>
        <button onClick={logout} className="bg-[#9C0300] text-white px-4 py-2 rounded-full w-full text-center">
          Logout
        </button>
      </div>

      {/* Main Form */}
      <div className="flex-1 bg-white shadow-lg rounded-xl p-6 mt-4 md:mt-0 md:ml-8">
        <h1 className="text-2xl font-bold">Personal Information</h1>

        {/* Gender */}
        <div className="mt-4">
          <label className="block font-medium mb-2">Gender</label>
          <div className="flex items-center space-x-4">
            {["male", "female", "other"].map((gender) => (
              <label key={gender} className="flex items-center capitalize">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={handleChange}
                  className="mr-2 accent-[#3B493F]"
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        {/* Info Fields */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          {inputFields.map(([name, label]) => (
            <div key={name} className={["email", "address"].includes(name) ? "col-span-2" : ""}>
              <label className="block font-medium leading-tight mb-1">{label}</label>
              {name === "dob" ? (
                <input
                  type="date"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className={`w-full border rounded-full px-2 py-1 ${errors[name] ? "border-red-500" : "border-[#3B493F]"}`}
                />
              ) : (
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className={`w-full border rounded-full px-4 py-1 ${errors[name] ? "border-red-500" : "border-[#3B493F]"}`}
                />
              )}
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Save & Discard Buttons */}
        <div className="flex flex-col md:flex-row mt-6 gap-4 items-center">
          <button
            className="bg-[#EDEAE5] w-full border border-[#3B493F] text-[#3B493F] px-6 py-2 rounded-full hover:bg-[#FFF1DF] transition-colors"
            onClick={() => {
              setFormData(defaultData);
              setErrors({});
            }}
            disabled={updating}
          >
            {updating ? "Discarding..." : "Discard Changes"}
          </button>
          <button
            onClick={handleProfileUpdate}
            className="w-full bg-[#3B493F] border border-[#3B493F] text-white px-6 py-2 rounded-full gap-2 hover:bg-green-800 transition-colors"
            disabled={updating}
          >
            {updating && <Spinner />} {updating ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
