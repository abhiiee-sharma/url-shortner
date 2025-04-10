
# 🔗 URL Shortener Service

A simple and lightweight URL shortener built with **Node.js**, **Express**, **MongoDB**, and **EJS** for server-side rendering. This app allows you to convert long URLs into short and shareable links, track their usage, and visualize the data on a clean homepage.

## 🚀 Features

- Shortens any valid URL
- Tracks number of visits per short link
- Displays analytics in a tabular format
- Server-side rendered views using EJS
- MongoDB for persistent storage

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **View Engine:** EJS
- **Frontend:** HTML, CSS, Bootstrap

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up MongoDB (make sure MongoDB is running locally or provide your cloud URI in `connection.js`):
   ```js
   connectMongoDb("mongodb://127.0.0.1:27017/url-shortner")
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Visit the app in your browser:
   ```
   http://localhost:8001
   ```

## 📄 API Endpoints

### `POST /url`
Shorten a URL.

#### Body
```json
{
  "url": "https://example.com"
}
```

#### Response
```json
{
  "id": "shortId123"
}
```

---

### `GET /url/:shortId`
Redirects to the original URL and tracks the visit.

---

## 🌐 Frontend Pages

- `/url` - Form to submit a new URL and see your generated short link.
- `/url` - Table showing all shortened URLs with:
  - S. No
  - Short ID
  - Redirect URL
  - Total Clicks

## 📁 Project Structure

```
.
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   └── url.js
├── views/
│   └── index.ejs
├── connection.js
├── index.js
├── package.json
```

## 🧹 Optional MongoDB Commands

Delete all short links:
```js
db.urls.deleteMany({})
```

---

## ✨ Future Enhancements

- Add user authentication
- Show visit analytics with charts
- QR code generation for short URLs
- Custom short link aliases


---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
