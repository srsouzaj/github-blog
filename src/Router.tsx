import {Route, Routes} from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BlogScreen } from "./pages/Blog";

export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<BlogScreen/>}/>
        </Route>
      </Routes>
    );
}