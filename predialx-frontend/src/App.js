import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { LayoutAdmin } from "./pages/Admin/LayoutAdmin";
import { Dashboard } from "./pages/Admin/Dashboard";
import { Orders } from "./pages/Admin/Orders";
import { CreateOrder } from "./pages/Admin/CreateOrder";
import { Users } from "./pages/Admin/Users";

import { AuthContextProvider } from "./contexts/AuthContext";
import { OrderContextProvider } from "./contexts/OrderContext";
import { UserContextProvider } from "./contexts/UserContext";

import "./assets/scss/Global.scss";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <OrderContextProvider>
          <UserContextProvider>
            <Switch>
              <Route path="/admin" exact>
                <LayoutAdmin>
                  <Dashboard />
                </LayoutAdmin>
              </Route>
              <Route path="/admin/orders" exact>
                <LayoutAdmin>
                  <Orders />
                </LayoutAdmin>
              </Route>
              <Route path="/admin/orders/create" exact>
                <LayoutAdmin>
                  <CreateOrder />
                </LayoutAdmin>
              </Route>
              <Route path="/admin/users" exact>
                <LayoutAdmin>
                  <Users />
                </LayoutAdmin>
              </Route>
              <Route path="/" exact component={Login} />
            </Switch>
          </UserContextProvider>
        </OrderContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
