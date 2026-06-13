# Cable Tray Pricing & Management System

A full-stack web application for calculating cable tray pricing, managing product inventory, and viewing featured products. Built with **Next.js** for the frontend and **Express.js** with **Firebase** for the backend.

## 🌟 Features

- **Cable Tray Calculator**: Calculate pricing based on dimensions and specifications
- **Product Catalog**: Browse and view cable tray products with detailed information
- **Shopping Cart**: Add products to cart and manage selections
- **Featured Products**: Highlight and showcase popular items
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Real-time Calculations**: Instant pricing updates using API endpoints

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework for production
- **React** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript/JSX** - Programming language

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Firebase** - Cloud database and authentication
- **EJS** - Template engine (for additional views)

## 📁 Project Structure

```
frontend-PP/
├── frontend/                    # Next.js application
│   ├── app/
│   │   ├── api/                # API routes
│   │   │   ├── calculate/       # Pricing calculation endpoint
│   │   │   └── featured-rates/  # Featured products endpoint
│   │   ├── components/          # React components
│   │   ├── products/            # Product pages
│   │   ├── featuredProducts/    # Featured products section
│   │   ├── addToCart/           # Shopping cart functionality
│   │   ├── clientsWord/         # Client testimonials page
│   │   └── layout.js            # Root layout
│   └── public/                  # Static assets
│
└── backend/
    └── Personal_project/        # Express application
        ├── config/              # Firebase configuration
        ├── controller/          # Business logic
        ├── routes/              # API routes
        ├── views/               # EJS templates
        ├── public/              # Static files
        ├── utils/               # Utility functions
        ├── styles/              # CSS files
        └── app.js               # Server entry point
```

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/kedhar123/Full-stack-Project.git
   cd frontend-PP
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend/Personal_project
   npm install
   ```

4. **Configure Environment Variables**
   
   Create `.env` files in both frontend and backend directories:

   **Backend** (`backend/Personal_project/.env`):
   ```env
   PORT=5000
   FIREBASE_API_KEY=your_firebase_key
   FIREBASE_PROJECT_ID=your_project_id
   # Add other Firebase config variables
   ```

   **Frontend** (`frontend/.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

## 📦 Running the Application

### Development Mode

**Terminal 1 - Frontend (Next.js)**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

**Terminal 2 - Backend (Express)**
```bash
cd backend/Personal_project
npm start
# Backend runs on http://localhost:5000
```

### Production Build

**Frontend**
```bash
cd frontend
npm run build
npm start
```

**Backend**
```bash
cd backend/Personal_project
npm run build
npm start
```

## 📡 API Endpoints

### Calculate Pricing
- **POST** `/api/calculate`
- Calculates cable tray pricing based on specifications
- Request body: dimensions, tray type, material

### Featured Rates
- **GET** `/api/featured-rates`
- Returns list of featured/promotional products
- Response: array of product objects

## 🎨 UI Components

### Frontend Components
- **Navbar** - Navigation menu
- **Footer** - Footer section
- **ProductCard** - Individual product display
- **CartPhotos** - Shopping cart display

### Pages
- **Home** (`app/page.js`) - Landing page
- **Products** (`app/products/page.js`) - Product listing
- **Product Detail** (`app/products/[id]/page.js`) - Single product view
- **Featured Products** (`app/featuredProducts/page.js`) - Featured items
- **Add to Cart** (`app/addToCart/page.js`) - Cart management
- **Client Reviews** (`app/clientsWord/page.js`) - Customer testimonials

## 🔒 Security Notes

- **API Keys & Credentials**: Never commit sensitive files. Use environment variables.
- **Credential Files**: `key.json` and `key1.json` are gitignored for security.
- Always use HTTPS in production.
- Validate all user inputs on both frontend and backend.

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Backend
- `npm start` - Start the server
- `npm test` - Run tests

## 🚀 Deployment

### Frontend (Vercel)
The frontend is configured for Vercel deployment:
```bash
npm install -g vercel
vercel
```

### Backend
Deploy to your preferred platform:
- **Heroku**, **Railway**, **Render**, **AWS**, **Azure**, or **Firebase Hosting**

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📧 Contact & Support

For questions or issues, please:
- Open an issue on GitHub
- Contact: kedhar123 (GitHub username)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Kedhar**
