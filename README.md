# 🤖 Gemini Clone React

A modern, responsive React application that replicates Google's Gemini AI interface with advanced features including code formatting, markdown support, and real-time AI interactions.

## Live Preview
[Gemini Clone](https://google-gemini-v69.vercel.app/)


## 🖼️ Screenshot
![Preview](https://github.com/iamalok123/gemini-clone-react/blob/4c0acb77296836eacbeef757312be5a3688ad540/Screenshot%202025-08-03%20132833.png)


![Gemini Clone](https://img.shields.io/badge/React-18.0.0-blue)
![Gemini Clone](https://img.shields.io/badge/Vite-5.0.0-purple)
![Gemini Clone](https://img.shields.io/badge/Google-Gemini_API-orange)


## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Styling & UI](#-styling--ui)
- [Performance Optimizations](#-performance-optimizations)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🤖 AI Integration
- **Real-time AI responses** using Google Gemini API
- **Streaming responses** with loading animations
- **Error handling** for API quota limits and network issues
- **Environment variable** configuration for API keys

### 💻 Code Formatting
- **Automatic language detection** for 12+ programming languages
- **Syntax highlighting** with language-specific color themes
- **Proper indentation** and code formatting
- **Copy-to-clipboard** functionality for code blocks
- **Markdown code block** support with ```language syntax

### 📝 Markdown Support
- **Heading hierarchy** (# ## ###) with styled formatting
- **Bold text** support with **text** syntax
- **Line breaks** and paragraph formatting
- **Professional typography** with proper spacing

### 🎨 User Interface
- **Responsive design** optimized for desktop and mobile
- **Modern UI** with gradient backgrounds and shadows
- **Loading animations** with skeleton screens
- **Chat history** with sidebar navigation
- **New chat functionality** with state management

### 📱 Mobile Optimization
- **Touch-friendly** interface with proper spacing
- **Responsive typography** with mobile-optimized font sizes
- **Improved scrolling** with better margins and padding
- **Performance optimizations** to reduce layout recalculations


### Desktop View
- Clean, modern interface with sidebar navigation
- Code blocks with syntax highlighting
- Markdown headings with proper hierarchy
- Professional color scheme and typography

### Mobile View
- Responsive design with touch-friendly elements
- Optimized spacing and typography
- Smooth scrolling and interactions
- Performance-optimized rendering

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and context
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with responsive design
- **JavaScript ES6+** - Modern JavaScript features

### AI & APIs
- **Google Gemini API** - AI language model integration
- **@google/genai** - Official Google Generative AI SDK

### Development Tools
- **ESLint** - Code linting and formatting
- **Git** - Version control
- **npm** - Package management

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Google Gemini API key** (free tier available)
- **Modern web browser** (Chrome, Firefox, Safari, Edge)

## 🚀 Installation

### 1. Clone the Repository
```bash
git https://github.com/iamalok123/gemini-clone-react.git
cd gemini-clone-react
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## ⚙️ Configuration

### Environment Variables
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### API Key Setup
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the key to your `.env` file
4. Restart the development server

### Build for Production
```bash
npm run build
```

## 📖 Usage

### Basic Interaction
1. **Type your question** in the input field
2. **Press Enter** or click the send button
3. **View the AI response** with formatted output
4. **Copy code blocks** using the copy button

### Advanced Features
- **Previous chats** - Click on sidebar to load previous conversations
- **New chat** - Click the plus icon to start fresh
- **Code formatting** - AI responses automatically format code blocks
- **Markdown support** - Use # ## ### for headings

### Keyboard Shortcuts
- **Enter** - Send message
- **Escape** - Clear input (if implemented)

## 📁 Project Structure

```
gemini-clone-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # React components
│   │   ├── Main/         # Main chat interface
│   │   └── Sidebar/      # Sidebar navigation
│   ├── config/           # Configuration files
│   │   └── gemini.js     # Gemini API integration
│   ├── context/          # React context
│   │   └── Context.jsx   # Global state management
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🔌 API Integration

### Gemini API Configuration
The project uses Google's Gemini API for AI responses:

```javascript
// src/config/gemini.js
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });
```

### Error Handling
- **Quota exceeded** - Graceful handling with user-friendly messages
- **Network errors** - Retry mechanisms and fallback responses
- **Invalid API key** - Clear error messages for configuration issues

### Rate Limiting
- **Free tier limits** - Respects Google's API quotas
- **Error messages** - Informs users about quota limits
- **Retry logic** - Automatic retry for temporary failures

## 🎨 Styling & UI

### Design System
- **Color palette** - Professional blues, grays, and accents
- **Typography** - Clean, readable fonts with proper hierarchy
- **Spacing** - Consistent margins and padding throughout
- **Shadows** - Subtle depth and elevation

### Responsive Design
- **Mobile-first** approach
- **Breakpoints** at 600px for mobile optimization
- **Touch targets** - Minimum 44px for mobile interactions
- **Font scaling** - Responsive typography

### Code Block Styling
- **Language-specific** background colors
- **Syntax highlighting** with proper contrast
- **Copy buttons** with hover effects
- **Scrollable** content for long code blocks

## ⚡ Performance Optimizations

### React Optimizations
- **Context API** for efficient state management
- **RequestAnimationFrame** to prevent forced reflows
- **Optimized re-renders** with proper dependency arrays
- **Lazy loading** for better initial load times

### CSS Optimizations
- **Hardware acceleration** for animations
- **Efficient selectors** to reduce paint times
- **Minimal repaints** with transform properties
- **Optimized media queries**

### API Optimizations
- **Debounced requests** to prevent spam
- **Caching** for repeated queries
- **Error boundaries** for graceful failures
- **Loading states** for better UX

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
```bash
git clone https://github.com/iamalok123/gemini-clone-react.git
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

### 4. Submit a Pull Request
- Provide a clear description of changes
- Include screenshots for UI changes
- Ensure all tests pass

### Code Style Guidelines
- Use **ESLint** for code formatting
- Follow **React best practices**
- Write **descriptive commit messages**
- Add **JSDoc comments** for functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for providing the AI capabilities
- **React team** for the amazing framework
- **Vite team** for the fast build tool
- **Open source community** for inspiration and tools

## 📞 Support

If you encounter any issues or have questions:

1. **Check the issues** page for existing solutions
2. **Create a new issue** with detailed information
3. **Join our discussions** for community help

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with core features
- Gemini API integration
- Code formatting and markdown support
- Responsive design
- Mobile optimization

---

**Made with ❤️ using React and Google Gemini API**

*This project is not affiliated with Google or Gemini. It's an educational clone for learning purposes.*
