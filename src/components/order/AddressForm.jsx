import { useState } from "react";
import PropTypes from "prop-types";

const AddressForm = ({
  userAddresses,
  onAddressSelect,
  onNewAddress,
  onSubmit,
  selectedAddress,
  isNewAddress,
  handleDeleteAddress,
}) => {
  const [address, setAddress] = useState(
    selectedAddress || {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "India",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <div className="mt-4">
      {userAddresses.length > 0 && !isNewAddress && (
        <div className="mb-6">
          <h4 className="font-medium mb-2">Select Delivery Address</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
          {userAddresses.map((addr) => (
            <div
                key={addr.id}
                className={`p-2 border rounded cursor-pointer relative ${
                selectedAddress?.id === addr.id ? "border-green-500 bg-green-50" : ""
                }`}
                onClick={() => onAddressSelect(addr)}
            >
                <p>{addr.first_name} {addr.last_name}</p>
                <p>{addr.address_line1}</p>
                <p>{addr.city}, {addr.state} - {addr.postal_code}</p>
                <p>{addr.phone}</p>
                
                <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation(); // prevents selecting address when clicking delete
                    handleDeleteAddress(addr.id);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded"
                >
                Delete
                </button>
            </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onNewAddress}
            className="mt-2 text-blue-500 text-sm"
          >
            + Add New Address
          </button>
        </div>
      )}

      {(isNewAddress || userAddresses.length === 0) && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="first_name"
                value={address.first_name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={address.last_name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={address.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address Line 1</label>
            <input
              type="text"
              name="address_line1"
              value={address.address_line1}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address Line 2</label>
            <input
              type="text"
              name="address_line2"
              value={address.address_line2 || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Postal Code</label>
              <input
                type="text"
                name="postal_code"
                value={address.postal_code}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-green-700 cursor-pointer text-white rounded"
          >
            Continue to Payment
          </button>
        </form>
      )}
    </div>
  );
};
AddressForm.propTypes = {
  userAddresses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      address_line1: PropTypes.string,
      address_line2: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postal_code: PropTypes.string,
      country: PropTypes.string,
    })
  ).isRequired,
  onAddressSelect: PropTypes.func.isRequired,
  onNewAddress: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  selectedAddress: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address_line1: PropTypes.string,
    address_line2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    country: PropTypes.string,
  }),
  isNewAddress: PropTypes.bool.isRequired,
  handleDeleteAddress: PropTypes.func.isRequired,
};

export default AddressForm;