import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    fullName: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      {/* Form Section */}
      <form className="form">
        <h2>Employee Registration</h2>

        <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} />
        <input name="position" placeholder="Job Position" value={form.position} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange}></textarea>

        <label style={{ fontSize: '14px' }}>Upload Photo</label>
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
      </form>

      {/* ID Card Preview */}
      <div className="id-card">
        <div className="id-header">
          XYZ CORPORATION
          <div className="slogan">Empowering technologies </div>
        </div>

        <div className="id-photo">
          {form.photo ? (
            <img src={form.photo} alt="Employee" />
          ) : (
            <span>Photo</span>
          )}
        </div>

        <div className="id-name">{form.fullName || 'Your Name'}</div>
        <div className="id-position">{form.position || 'Job Position'}</div>

        <div className="id-contact">
          <p>📞 {form.phone || '+91 123 456 7890'}</p>
          <p>📧 {form.email || 'name@company.com'}</p>
          <p>🏠 {form.address || 'Your Company Address'}</p>
        </div>

        <div className="id-footer">www.xyz corporation.com</div>
      </div>
    </div>
  );
}

export default App;
