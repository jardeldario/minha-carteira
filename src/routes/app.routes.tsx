import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import List from '../pages/List';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/List/:type" exact component={List} />
        </Switch>
    </Layout>
);

export default AppRoutes;