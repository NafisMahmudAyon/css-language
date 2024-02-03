import React, { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import useThemeSwitcher from "./useThemeSwitcher";

const NavMenu = () => {
	const [mode, setMode] = useThemeSwitcher();
	return (
		<>
			<div className="px-6 pt-4">
				<div className="flex flex-col items-center gap-3 justify-between  ">
					<a href="/" className="text-3xl font-bold ">CSS </a>
					<button
						onClick={() => setMode(mode === "light" ? "dark" : "light")}
						className={`ml-3 flex items-center justify-center rounded-full p-1 ${
							mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
						}`}>
						Toggle Dark Mode
					</button>
					<MegaMenu />
				</div>
			</div>
		</>
	);
};

export default NavMenu;
