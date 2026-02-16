# Aetheron AI Technologies - Fullstack Application

A premium fullstack web application for Aetheron AI Technologies Pvt Ltd, featuring a modern React frontend and FastAPI backend.

## 🚀 Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **CRACO** - Custom React Scripts configuration

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **MongoDB** - NoSQL database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **Python-dotenv** - Environment management

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
.\venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file (if not exists)
# Add your MongoDB connection string and configuration
```

**Backend `.env` configuration:**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=Aetheron
CORS_ORIGINS=*
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install --legacy-peer-deps

# Create .env file (if not exists)
```

**Frontend `.env` configuration:**
```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

## 🚀 Running the Application

### Start Backend Server

```bash
cd backend
.\venv\Scripts\activate  # Windows
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

Backend will be running at: `http://localhost:8000`

### Start Frontend Development Server

```bash
cd frontend
npm start
```

Frontend will be running at: `http://localhost:3000`

## 📁 Project Structure

```
app/
├── backend/
│   ├── .env                 # Backend environment variables
│   ├── requirements.txt     # Python dependencies
│   ├── server.py           # FastAPI application
│   └── venv/               # Python virtual environment
├── frontend/
│   ├── public/
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── custom/     # Custom components
│   │   │   └── ui/         # UI components (shadcn/ui)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.js          # Main App component
│   │   └── index.js        # Entry point
│   ├── .env                # Frontend environment variables
│   ├── package.json        # Node dependencies
│   ├── craco.config.js     # CRACO configuration
│   └── tailwind.config.js  # Tailwind configuration
├── memory/
│   └── PRD.md              # Product Requirements Document
├── .gitignore
├── design_guidelines.json   # Design system guidelines
└── README.md
```

## 🎨 Features

- **Modern UI/UX** - Premium black and graphite gray theme
- **Responsive Design** - Mobile-first approach
- **Custom Cursor** - Interactive custom cursor experience
- **Loading Screen** - Animated loading with progress bar
- **Smooth Animations** - Framer Motion powered animations
- **Hero Section** - Full-screen hero with animated typography
- **Project Showcase** - AetherBuilt product display
- **Features Section** - Icon-based feature highlights
- **About Section** - Company information with stats
- **REST API** - FastAPI backend with MongoDB integration
- **Status Tracking** - Client status check system

## 🔧 API Endpoints

### Backend API (Port 8000)

- `GET /api/` - Welcome endpoint
- `GET /api/status` - Get all status checks
- `POST /api/status` - Create new status check

## 🎯 Design Philosophy

- **Elite & Industrial** - Professional deep-tech aesthetic
- **Minimal & Futuristic** - Clean, modern design
- **Cinematic Experience** - Smooth animations and transitions
- **Performance First** - Optimized for speed and responsiveness

## 🔐 Environment Variables

### Backend
- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - Database name
- `CORS_ORIGINS` - Allowed CORS origins (comma-separated)

### Frontend
- `REACT_APP_BACKEND_URL` - Backend API URL

## 📝 Development Notes

- Frontend uses legacy peer deps for compatibility
- Backend requires Python virtual environment
- MongoDB must be running on localhost:27017 (or configured URL)
- CORS is configured to allow frontend-backend communication

## 🚀 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

Build output will be in `frontend/build/`

### Backend Production
Use a production ASGI server like Gunicorn:
```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app
```

## 📄 License

Private - Aetheron AI Technologies Pvt Ltd

## 👥 Contact

For questions or support, contact the development team.
```