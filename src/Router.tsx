import {Route, Routes} from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BlogScreen } from "./pages/Blog";
import { PostScreen } from "./pages/Post";

export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<BlogScreen />} />
          <Route path="/post/:id" element={<PostScreen />} />
        </Route>
      </Routes>
    );
}