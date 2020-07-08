import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductItems from './components/ProductItems';



const RouteConfig = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route exact path="/product/:id" component={ProductItems} />
                    <Route path="*" component={() => <h1>Page not found 404</h1>} />

                    
                </Switch>
            </Router>
        </div>
    )
}

export default RouteConfig
