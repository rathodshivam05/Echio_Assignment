import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import MyCampaign from './MyCampaign';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycampaign" element={<MyCampaign />} />
        </Routes>
    )
}

export default AllRoutes
