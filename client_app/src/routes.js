import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import LinksPage from './pages/LinksPage';


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path='/links' render={props => <LinksPage {...props} />} />
                <Route exact path='/create' render={props => <CreatePage {...props} />} />
                <Route path='/detail/:id' render={props => <DetailPage {...props} />} />
                <Redirect to='/create' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path='/' render={props => <AuthPage {...props} />} />
            <Redirect to='/' />
        </Switch>
    )
}