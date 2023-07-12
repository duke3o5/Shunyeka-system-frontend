import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { AddNewUser } from './AddNewUser';
import { AllUsers } from './AllUsers';
import { SingleUser } from './SingleUser';
import { EditUser } from './EditUser';

export const AllRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path='/add' element={<AddNewUser/>}/>
        <Route path='/' element={<AllUsers/>}/>
        <Route path='/:id' element={<SingleUser/>}/>
        <Route path='/update/:id' element={<EditUser/>}/>
       </Routes>
    </div>
  )
}
