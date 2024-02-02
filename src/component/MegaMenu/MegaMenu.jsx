import React, { useState } from "react";
import data from "../NavMenuList/index.json";
// import "./MegaMenu.css";

const MegaMenu = () => {

	
	const [activeLetter, setActiveLetter] = useState(null);
	console.log(activeLetter)

	const handleLetterClick = (letter) => {
		setActiveLetter((prevLetter) => (prevLetter === letter ? null : letter));
	};

	const renderSelectorsAndProperties = (activeLetter) => {
		const letterData = data[activeLetter];

		if (!letterData) {
			return null;
		}

		return (
			<div className="code-no-bg bg-zinc-700 rounded-lg pt-6 px-3 lg:p-6 absolute top-[110%] w-full lg:w-[90vw] left-1/2 -translate-x-1/2 shadow-lg flex gap-3 max-h-[300px] overflow-auto z-10 ">
				<div className="selectors relative px-4  min-w-[30%] group ">
					<h3 className="text-lg font-bold absolute mb-2 -top-[14px]  px-[10px] left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgba(0,160,100,.9)] after:-bottom-[2px] after:left-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-in-out group-hover:text-[rgba(0,160,100,.9)] ">
						Selectors
					</h3>
					<div className="flex flex-wrap gap-2 py-6 ">
						{letterData.selectors?.map((selector, index) => (
							<span
								key={index}
								className="text-nowrap flex flex-col border border-[rgba(0,0,0,.4)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,160,100,.9)] group/selector shadow-sm px-3 py-2 rounded-md  ">
								<span>{selector.label}</span>
								<code className="code-font text-sm text-[rgba(0,160,100,.9)] group-hover/selector:text-[rgba(0,0,0,.9)] ">
									{selector.value}
								</code>
							</span>
						))}
					</div>
				</div>
				<div className="properties relative px-4 group ">
					<h3 className="text-lg font-bold absolute mb-2 -top-[14px]  px-[10px] left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgba(67,138,231,0.9)] after:-bottom-[2px] after:left-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-in-out group-hover:text-[rgba(67,138,231,0.9)] ">
						Properties
					</h3>
					<div className="flex flex-wrap gap-2 py-6  ">
						{letterData.properties?.map((property, index) => (
							<a
								href={property.link}
								key={index}
								className="text-nowrap flex flex-col border border-[rgba(0,0,0,.4)] shadow-sm px-3 py-2  rounded-md transition-all duration-300 ease-in-out hover:bg-[rgba(67,138,231,0.9)] group/selector ">
								<span>{property.label}</span>
								<code className="code-font text-sm text-[rgba(67,138,231,0.9)] group-hover/selector:text-[rgba(0,0,0,.9)]">
									{property.value}
								</code>
							</a>
						))}
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<div className="mega-menu relative flex justify-center min-w-[90%] max-w-[1400px] ">
				<div className="flex space-x-2 lg:space-x-4 justify-between bg-[rgba(0,0,0,.33)]  px-10 py-4 rounded-xl w-full max-w-[1440px] ">
					{Object.keys(data).map((letter, index) => (
						<span
							key={index}
							className={`text-lg lg:text-2xl cursor-pointer capitalize hover:text-blue-500 ${letter == activeLetter ? "text-blue-500 " : ""} `}
							onClick={() => handleLetterClick(letter)}>
							{letter}
						</span>
					))}
				</div>
				{renderSelectorsAndProperties(activeLetter)}
			</div>
		</>
	);
};

export default MegaMenu;
