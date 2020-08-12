import React from 'react';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import AdminOrders from '../../pages/Orders/AdminOrders';
import AdminProducts from '../../pages/Products/AdminProducts';
import Checkout from '../../pages/Checkout/CheckOut';
import Orders from '../../pages/Orders/Orders';
import OrderSuccess from '../../pages/Orders/OrderSuccess';
import Shoppingcart from '../../pages/Orders/OrderSuccess';
import { Route, Switch } from 'react-router';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/products" component={Products}></Route>
      <Route exact path="/adminorders" component={AdminOrders}></Route>
      <Route exact path="/adminproducts" component={AdminProducts}></Route>
      <Route exact path="/checkout" component={Checkout}></Route>
      <Route exact path="/orders" component={Orders}></Route>
      <Route exact path="/ordersuccess" component={OrderSuccess}></Route>
      <Route exact path="/shoppingcart" component={Shoppingcart}></Route>
    </Switch>
  );
}

export default Main;
