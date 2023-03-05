import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublikRoute from './components/PublikRoute/PublikRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function UserRoutes() {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route element={<PublikRoute />}>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Route>

          <Route path={"/"} element={<HomePage />} />
          <Route path={"/news"} element={<NewsPage />} />

        <Route element={<PrivateRoute />}>
          <Route path={"/profile"} element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
    // <Switch>
    //   <Route exact path="/" component={HomePage} />
    //   <Route exact path="/news" component={News} />
    //   <Route exact path="/login" component={LoginPage} />
    //   <Route exact path="/register" component={RegisterPage} />
    // </Switch>
  );
}

export default UserRoutes;
