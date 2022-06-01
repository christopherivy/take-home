
import React from "react";
import About from "./About";
import { Route, Routes, Navigate } from "react-router-dom";


function AppRoutes () {
	return (
		<Routes>
			<Route path="/about" element={ <About /> } />
			<h1>Home</h1>
		</Routes>
	);
}

export default AppRoutes;
