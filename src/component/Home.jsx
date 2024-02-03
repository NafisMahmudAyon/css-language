import { useEffect, useState } from "react";
import NavMenu from "./Navmenu";

function Home() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const htmlElement = document.documentElement;
		isDarkMode
			? htmlElement.classList.add("dark")
			: htmlElement.classList.remove("dark");
	}, [isDarkMode]);
	return (
		<>
			<main className="">
				<button onClick={() => setIsDarkMode(!isDarkMode)}>
					Toggle Dark Mode
				</button>
				<NavMenu />
				{/* <MegaMenu /> */}
			</main>
		</>
	);
}

export default Home;
