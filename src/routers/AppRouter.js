import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeFeedPage from '../components/HomeFeedPage'
import WritePostPage from '../components/WritePostPage'
import NotFoundPage from '../components/NotFoundPage'
import SearchPeoplePage from '../components/SearchPeoplePage'
import ProfilePage from '../components/ProfilePage'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomeFeedPage} exact={true} />
            <Route path="/writepostpage" component={WritePostPage} />
            <Route path="/searchpeoplepage" component={SearchPeoplePage} />
            <Route path="/profilepage" component={ProfilePage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter