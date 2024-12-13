import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import NotFound from './pages/404/404'
import AppLayout from './components/layout/AppLayout'
import BlogPosts from './pages/blog-posts/BlogPosts'
import BlogPost from './pages/blog-post/BlogPost'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/posts' element={<BlogPosts/>}/>
            <Route path='/posts/:id' element={<BlogPost/>}/>
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App