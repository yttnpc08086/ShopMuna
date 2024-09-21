import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Users = () => {
  const [image, setImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <div className="add-users">
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <div className="input-container">
              <input
                type="text"
                placeholder="Users Name"
                {...register("username", { required: "Username is required" })}
              />
              <span>{errors.username?.message}</span>
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <span>{errors.password?.message}</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <input
                type="tel"
                placeholder="Number Phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^0\d{9}$/,
                    message:
                      "Phone number must start with 0 and have 10 digits",
                  },
                })}
              />
              <span>{errors.phone?.message}</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email is not valid",
                  },
                })}
              />
              <span>{errors.email?.message}</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              <span>{errors.fullName?.message}</span>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              <span>{errors.address?.message}</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-container">
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                onChange={handleImageChange}
              />
              <span>{errors.image?.message}</span>
            </div>
          </div>

          {image && <img src={image} alt="Preview" className="image-preview" />}

          <input type="submit" value="Add Customer" />
        </form>
      </div>

      <div className="recent-orders">
        <h2>Recent Customer</h2>
        <table class="table">
        <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Customer Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>Đom Đóm</td>
              <td>85743</td>
              <td>Due</td>
              <td className="warning">Pending</td>
              <td className="primary">
                <i className="material-icons-sharp">edit</i>
                <i className="material-icons-sharp">delete</i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>J97</td>
              <td>97245</td>
              <td>Refunded</td>
              <td className="danger">Declined</td>
              <td className="primary">
                <i className="material-icons-sharp">edit</i>
                <i className="material-icons-sharp">delete</i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Phuong Tuan</td>
              <td>36452</td>
              <td>Paid</td>
              <td className="primary">Active</td>
              <td className="primary">
                <i className="material-icons-sharp">edit</i>
                <i className="material-icons-sharp">delete</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Users;
