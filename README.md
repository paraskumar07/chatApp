# 💬 Chatly – Real-Time Chat Application

Chatly is a real-time chat application built with the MERN stack and Socket.io, enabling seamless one-to-one messaging with a modern and responsive user interface. The application focuses on fast communication, secure authentication, and smooth real-time updates.

---

## 🌟 Highlights

- 🌟 Tech Stack: MERN + Socket.io + Tailwind CSS + Daisy UI
- 🔐 Authentication & Authorization using JWT
- 👾 Real-time one-to-one messaging with Socket.io
- 🚀 Online/offline user status
- 👌 Global state management using Zustand
- 🐞 Robust error handling on both client and server
- 📁 Profile image upload and storage using Cloudinary
- ⭐ Free deployment with production-ready setup

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Zustand
- Tailwind CSS
- Daisy UI

### Backend
- Node.js
- Express.js
- Socket.io

### Database
- MongoDB

### Other Integrations
- JWT – Authentication & Security
- Cloudinary – Media Storage

---

## ⚙️ Setup Environment Variables

Create a `.env` file in the `server` directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
 
