
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Users from './component/Users/Users';
import AddUser from './component/AddUser/AddUser';
import UpdateUser from './component/UpdateUser/UpdateUser';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header></Header>
          <Routes>
            <Route index path='/' element={<Home></Home>}></Route>
            <Route index path='/users' element={<Users></Users>}></Route>
            <Route path='/user/add' element={<AddUser></AddUser>}></Route>
            <Route path='/user/update/:id' element={<UpdateUser></UpdateUser>}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
