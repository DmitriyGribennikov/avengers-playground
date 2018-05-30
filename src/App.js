import React from 'react';
import { Route } from 'react-router-dom'
import { Grid } from 'react-bootstrap'
import Home from './containers/Home'
import About from './containers/About'

const App = () => (
    <Grid>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
    </Grid>
);

export default App;