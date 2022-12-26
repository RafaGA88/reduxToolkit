import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostContainer from '../components/Post/PostContanier'

export default function Router () {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route path='posts' element={<PostContainer />}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );

}