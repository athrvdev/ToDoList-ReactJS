import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewPost, {action as submitFormAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  {path: '/', 
  element: <RootLayout />, 
  children:[
    { path : '/', 
      element: <Posts />, 
      loader : postsLoader,
      children : [{path:'/create-post', element: <NewPost />, action: submitFormAction}]}
      ]}  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
