import React, { useEffect, useState } from "react";

const ExternalDataComponent = () => {
	const [externalData, setExternalData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// Replace 'https://example.com' with the actual URL of the external website
				const response = await fetch(
					"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content"
				);

				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}

				const htmlContent = await response.text();

				// Use DOMParser to parse the HTML content
				const parser = new DOMParser();
				const doc = parser.parseFromString(htmlContent, "text/html");

				// Extract data using DOM methods
				const sectionElement = doc.querySelector(
					'[aria-labelledby="syntax"]'
				);
console.log(sectionElement)
				if (sectionElement) {
					const sectionText = sectionElement.textContent;
					setExternalData(sectionText);
				} else {
					console.error("Section not found on the external webpage.");
				}
			} catch (error) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	}, []);

	return <div>{externalData ? <p>{externalData}</p> : <p>Loading...</p>}</div>;
};

export default ExternalDataComponent;
