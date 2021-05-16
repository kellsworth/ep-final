import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';


export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/cart" component={Cart} />
    <Route path="/contact" component={Contact} />
    <Route path="/shop" component={Shop} />
  </Switch>
)