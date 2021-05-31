import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ImageList } from '../components/ImageList';
import { ImageScreen } from '../components/ImageScreen';



export const DashboardRoutes = () => {
    return (
        <>

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/" component={ ImageList } />
                    <Route exact path="/SDETTest" component={ ImageList } />
                    <Route exact path="/details/" component={ ImageScreen } />

                </Switch>
            </div>


        </>
    )
}
