import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const Languages = lazy(() => import('./pages/Languages.jsx'))
const LanguagePage = lazy(() => import('./pages/LanguagePage.jsx'))
const LanguageLab = lazy(() => import('./pages/LanguageLab.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const Terms = lazy(() => import('./pages/Terms.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-deep" />}>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="languages" element={<Languages />} />
            <Route path="languages/:slug" element={<LanguagePage />} />
            <Route path="language-lab" element={<LanguageLab />} />
            <Route path="services" element={<Navigate to="/language-lab" replace />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
