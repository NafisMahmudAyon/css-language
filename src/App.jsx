import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import AccentColor from "./component/Properties/AccentColor/AccentColor";
import Pages from "./component/Pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />

				{/* Properties Routes */}
				{/* <Route path="/properties/accent-color" element={<AccentColor />} /> */}
				<Route path="/properties/:propertyName" element={<Pages />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

