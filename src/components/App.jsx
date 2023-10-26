import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks/useAuth";
import { Route, Routes } from "react-router";
import { SharedLayout } from "./SharedLayout";
import { Home } from "./Home/Home";
import { PrivateRoute } from "./PrivateRoute";
import { ContactsPage } from "pages/ContactPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { RegisterPage } from "pages/RegisterPage";
import { LoginPage } from "pages/LoginPage";

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefresh ? (
      <b>Refreshing user...</b>
    ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contacts"
              element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
            <Route path="register"
              element={<RestrictedRoute component={<RegisterPage />} redirectTo="/login" />} />
            <Route path="login"
            element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>}/>
          </Route>
        </Routes>
    )
  );
};