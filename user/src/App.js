import React from 'react';
import './App.css';
import './responsive.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import Login from './screens/Login';
import Register from './screens/Register';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import NewsScreen from './screens/NewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BuyingProductScreen from './screens/BuyingProductScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import NotFound from './screens/NotFound';
import PrivateRouter from './PrivateRouter';
import GiftScreen from './screens/GiftScreen';
import Reset from './components/profileComponents/Reset';
import UpdatePass from './screens/updatePass';
import RegisterAccount from './screens/registerAccount';
import LoadingOrder from './screens/LoadingOrders';

// path - router - user

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/search/:keyword" component={HomeScreen} exact />
                <Route path="/category/:category" component={HomeScreen} exact />
                <Route path="/page/:pageNumber" component={HomeScreen} exact />
                <Route path="/search/:keyword/page/:pageNumber" component={HomeScreen} exact />
                <Route path="/category/:category/page/:pageNumber" component={HomeScreen} exact />
                <Route path="/sortProducts/:sortProducts/page/:pageNumber" component={HomeScreen} exact />
                <Route path="/rating/:rating/page/:pageNumber" component={HomeScreen} exact />
                <Route
                    path="/sortProducts/:sortProducts/rating/:rating/page/:pageNumber"
                    component={HomeScreen}
                    exact
                />
                <Route
                    path="/search/:keyword/sortProducts/:sortProducts/rating/:rating/page/:pageNumber"
                    component={HomeScreen}
                    exact
                />
                <Route
                    path="/category/:category/sortProducts/:sortProducts/rating/:rating/page/:pageNumber"
                    component={HomeScreen}
                    exact
                />
                <Route path="/products/:id" component={SingleProduct} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/news/:id" component={NewsScreen} />
                <Route path="/reset" component={Reset} />
                <Route path="/verify/register/:email/:token" component={RegisterAccount} />
                <Route path="/verify/register/:email" component={RegisterAccount} />
                <Route path="/updatePass/:email" component={UpdatePass} />
                <PrivateRouter path="/profile" component={ProfileScreen} />
                <PrivateRouter path="/byproduct" component={BuyingProductScreen} />
                <PrivateRouter path="/gift" component={GiftScreen} />
                <PrivateRouter path="/cart/:id?" component={CartScreen} />
                <PrivateRouter path="/shipping" component={ShippingScreen} />
                <PrivateRouter path="/payment" component={PaymentScreen} />
                <PrivateRouter path="/placeorder/:payment" component={PlaceOrderScreen} />
                <PrivateRouter path="/order/:id" component={OrderScreen} />
                <PrivateRouter path="/loadingOrder/:id" component={LoadingOrder} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
