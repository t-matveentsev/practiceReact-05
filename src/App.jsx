import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Aim from "./components/NestedRoutes/Aim";
import Company from "./components/NestedRoutes/Company";
import Team from "./components/NestedRoutes/Team";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./components/NestedRoutes/UserPosts";

export default function App() {
  return (
    <main>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/* localhost/about/aim */}
          <Route path="aim" element={<Aim />} />
          {/* localhost/about/company */}
          <Route path="company" element={<Company />} />
          {/* localhost/about/team */}
          <Route path="team" element={<Team />} />
        </Route>

        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="info" element={<h2>Info about user</h2>} />
          <Route path="posts" element={<UserPosts />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
