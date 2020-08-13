import React from 'react';
import Products from '../../pages/Products';
import AdminOrders from '../../pages/AdminOrders';
import AdminProducts from '../../pages/AdminProducts';
import Checkout from '../../pages/CheckOut';
import Orders from '../../pages/Orders';
import OrderSuccess from '../../pages/OrderSuccess';
import Shoppingcart from '../../pages/OrderSuccess';
import { Route, Switch } from 'react-router';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/admin-orders" component={AdminOrders}></Route>
        <Route exact path="/admin-products" component={AdminProducts}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
        <Route exact path="/orders" component={Orders}></Route>
        <Route exact path="/ordersuccess" component={OrderSuccess}></Route>
        <Route exact path="/cart" component={Shoppingcart}></Route>
      </Switch>
    </div>
  );
}

export default Main;
