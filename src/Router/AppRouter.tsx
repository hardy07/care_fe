import React from 'react';
import { useRedirect, useRoutes } from 'hookrouter';
import Header from '../Components/Common/Header';
import {PrivateDashboard} from "../Components/Dashboard/PrivateDashboard";
import { FacilityCreate } from '../Components/Facility/FacilityCreate';
import { HospitalOnboarding } from '../Components/Facility/HospitalOnboarding';
import {Analytics} from "../Components/Dashboard/Analytics";
import {Stats} from "../Components/Dashboard/Stats";

const routes = {
    '/': () => <PrivateDashboard/>,
    '/privatedashboard': () => <PrivateDashboard/>,
    '/analytics': () => <Analytics/>,
    '/facilities': () => <HospitalOnboarding />,
    '/stats' : () => <Stats/>,
    '/facilities/create': () => <FacilityCreate/>,
};

const AppRouter = () => {
    useRedirect('/', '/privatedashboard');
    const pages = useRoutes(routes);
    return (
        <div>
            <Header />
            <div className="main-content w3-padding">
                {pages}
            </div>
            <div className="app-footer">
                <div className="copy-right">
                    Corona Care Network
                </div>
            </div>
        </div>
    );
};

export default AppRouter;
