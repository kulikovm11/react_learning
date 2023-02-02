import React from 'react';
import {Route, Routes} from "react-router-dom";


import {UsersPage} from "./pages/UsersPage/UsersPage";
import {Layout} from "./layout/Layout";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";







const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>


        </Routes>
    );
};

export {App};