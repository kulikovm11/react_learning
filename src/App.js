import React from 'react';
import {Route, Routes} from "react-router-dom";


import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (

        <Routes>

            <Route path={'/'} element={<MainLayout/>}>

                <Route index element={<HomePage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Routes>

    );
};

export {App};