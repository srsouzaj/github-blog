import {Route, Routes} from "react-router-dom"
import { BlogScreen } from "./pages/Blog";

export const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<BlogScreen />}>
            
        </Route>
      </Routes>
    );
}