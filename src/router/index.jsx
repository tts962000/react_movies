import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import Create from '../pages/Create'
import Search from '../pages/Search'
import Layout from '../pages/Layouts/Layout';
import MovieDetail from '../pages/MovieDetail';
const router=createBrowserRouter([
{
  path:"/",
  element:<Layout/>,
      children:[
        {
         path:"",
         element:<Home/>,
        },
        {
          path:"/movies/:id",
          element:<MovieDetail/>,
         },
        {
          path:"/create",
          element:<Create/>,
        },
        {
          path:"/search",
          element:<Search/>,
        },
      ]
},


]);

export default router;