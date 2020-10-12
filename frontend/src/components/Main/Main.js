import React from 'react';
import { Route, Switch } from 'react-router';

import Products from '../../pages/Products';
import AdminOrders from '../../pages/admin-orders';
import AdminProducts from '../../pages/admin-products';
import Checkout from '../../pages/check-out';
import Orders from '../../pages/Orders';
import OrderSuccess from '../../pages/order-success';
import Shoppingcart from '../../pages/order-success';
import AdminProductsNew from '../../pages/admin-products-new';
import routes from '../../utils/routes';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path={routes.home} component={Products}></Route>
        <Route exact path={routes.products} component={Products}></Route>
        <Route exact path={routes.adminOrders} component={AdminOrders}></Route>
        <Route
          exact
          path={routes.adminProducts}
          component={AdminProducts}
        ></Route>
        <Route
          exact
          path={routes.adminProductsNewId}
          component={AdminProductsNew}
        />
        <Route
          exact
          path={routes.adminProductsNew}
          component={AdminProductsNew}
        />
        <Route exact path={routes.checkout} component={Checkout}></Route>
        <Route exact path={routes.orders} component={Orders}></Route>
        <Route
          exact
          path={routes.ordersSuccess}
          component={OrderSuccess}
        ></Route>
        <Route exact path={routes.cart} component={Shoppingcart}></Route>
      </Switch>
    </div>
  );
}

export default Main;