import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import NavMenuList from "../NavMenuList";
import { useParams } from "react-router-dom";



const Pages = () => {
	const { propertyName } = useParams();
	// console.log(propertyName[0])
	console.log(NavMenuList[propertyName[0]].properties);
	const [pageData, setPageData] = useState(
		findLabelByValue("accent-color", NavMenuList[propertyName[0]].properties)
	);
  console.log(pageData)

	function findLabelByValue(valueToFind, propertiesArray) {
		for (const property of propertiesArray) {
			if (property.value === valueToFind) {
				return property;
			}
		}
		return null; // Return null if the value is not found
	}
	//   {
	// 		title: "accent-color",
	// 		definition: {
	// 			label: "Definition",
	// 			value:
	// 				"The <code>accent-color</code> property in CSS is capable of re-tinting the accented color of form controls provided by the browser’s default styles with a custom color value.",
	// 		},
	// 		syntax: { label: "Syntax", value: `accent-color: auto | <color>;` },
	// 		formalDefinition: {
	// 			label: "Formal Definition",
	// 			value: {
	// 				initialValue: {
	// 					label: "Initial Value",
	// 					value: "auto",
	// 				},
	// 				appliesTo: {
	// 					label: "Applies to",
	// 					value: "all elements",
	// 				},
	// 				inherited: {
	// 					label: "Inherited",
	// 					value: "yes",
	// 				},
	// 				computedValue: {
	// 					label: "Computed value",
	// 					value:
	// 						"<code>auto</code> is computed as specified and <color> values are computed as defined for the color property",
	// 				},
	// 				animationType: {
	// 					label: "Animation type",
	// 					value: "by computed value type",
	// 				},
	// 			},
	// 		},
	// 		syntaxes: {
	// 			label: "Values",
	// 			value: `/* Keyword values */
	// accent-color: auto;

	// /* <color> values */
	// accent-color: darkred;
	// accent-color: #5729e9;
	// accent-color: rgb(0 200 0);
	// accent-color: hsl(228 4% 24%);

	// /* Global values */
	// accent-color: inherit;
	// accent-color: initial;
	// accent-color: revert;
	// accent-color: revert-layer;
	// accent-color: unset;`,
	// 		},
	// 	};
	return (
		<div>
			<NavMenu />
			{pageData == null && (
				<div className=" h-screen justify-center">
					<div className="mt-24 m-auto text-center">
						{/* <svg
							className="emoji-404 "
							enable-background="new 0 0 226 249.135"
							height="249.135"
							id="Layer_1"
							overflow="visible"
							version="1.1"
							viewBox="0 0 226 249.135"
							width="226"
							xml:space="preserve">
							<circle cx="113" cy="113" fill="#FFE585" r="109" />
							<line
								enable-background="new    "
								fill="none"
								opacity="0.29"
								stroke="#6E6E96"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="8"
								x1="88.866"
								x2="136.866"
								y1="245.135"
								y2="245.135"
							/>
							<line
								enable-background="new    "
								fill="none"
								opacity="0.17"
								stroke="#6E6E96"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="8"
								x1="154.732"
								x2="168.732"
								y1="245.135"
								y2="245.135"
							/>
							<line
								enable-background="new    "
								fill="none"
								opacity="0.17"
								stroke="#6E6E96"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="8"
								x1="69.732"
								x2="58.732"
								y1="245.135"
								y2="245.135"
							/>
							<circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
							<path
								d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
								enable-background="new    "
								fill="#FF9900"
								opacity="0.24"
							/>
							<circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
							<ellipse
								cx="67.732"
								cy="140.894"
								enable-background="new    "
								fill="#FF0000"
								opacity="0.18"
								rx="17.372"
								ry="8.106"
							/>
							<ellipse
								cx="154.88"
								cy="140.894"
								enable-background="new    "
								fill="#FF0000"
								opacity="0.18"
								rx="17.371"
								ry="8.106"
							/>
							<path
								d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
								fill="#FFEFB5"
							/>
							<circle
								cx="113"
								cy="113"
								fill="none"
								r="109"
								stroke="#6E6E96"
								stroke-width="8"
							/>
						</svg> */}
						<div className=" tracking-widest mt-4">
							<span className="text-gray-500 text-6xl block">
								<span>4 0 4</span>
							</span>
							<span className="text-gray-500 text-xl">
								Sorry, We couldn't find what you are looking for!
							</span>
						</div>
					</div>
					<div className="mt-6 text-center">
						<a
							href="/"
							className="text-gray-500 font-mono text-xl bg-[rgba(0,0,0,.33)] p-3 rounded-md hover:shadow-md">
							Go Home{" "}
						</a>
					</div>
				</div>
			)}
			{pageData !== null && (
				<div className="mx-auto w-[90%] max-w-[1440px] mt-8 px-3 group transition-all duration-400 ease-in-out ">
					<h2 className="mx-auto pt-2 mb-5 text-center text-4xl font-semibold relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgba(255,255,255,.9)] after:-bottom-[2px] after:left-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-in-out w-[max-content] ">
						{pageData?.details?.title}
					</h2>
					<div className="my-5">
						<h4 className="text-2xl mb-2 font-medium relative inline-block after:content-[':'] after:absolute after:pl-1 after:inline-block after:w-[max-content] ">
							{pageData?.details?.definition?.label}
						</h4>
						<p
							dangerouslySetInnerHTML={{
								__html: pageData?.details?.definition?.value,
							}}
						/>
					</div>
					<div className="my-5">
						<h4 className="text-2xl mb-2 font-medium relative inline-block after:content-[':'] after:absolute after:pl-1 after:inline-block after:w-[max-content] ">
							{pageData?.details?.syntax?.label}
						</h4>
						<SyntaxHighlighter language="css" style={vscDarkPlus}>
							{pageData?.details?.syntax?.value}
						</SyntaxHighlighter>
					</div>
					<div className="my-5">
						<h4 className="text-2xl mb-2 font-medium relative inline-block after:content-[':'] after:absolute after:pl-1 after:inline-block after:w-[max-content] ">
							{pageData?.details?.formalDefinition?.label}
						</h4>
						<table className="text-left border border-gray-600/25">
							<tbody className="">
								<tr className="text-lg  odd:bg-gray-600/25  ">
									<th className="px-4 py-2 text-nowrap">
										{
											pageData?.details?.formalDefinition?.value?.initialValue
												?.label
										}
									</th>
									<td className="px-4 py-2 text-md ">
										<code>
											{
												pageData?.details?.formalDefinition?.value?.initialValue
													?.value
											}
										</code>
									</td>
								</tr>
								<tr className="text-lg  odd:bg-gray-600/25  ">
									<th className="px-4 py-2 text-nowrap">
										{
											pageData?.details?.formalDefinition?.value?.appliesTo
												?.label
										}
									</th>
									<td className="px-4 py-2 text-md ">
										{
											pageData?.details?.formalDefinition?.value?.appliesTo
												?.value
										}
									</td>
								</tr>
								<tr className="text-lg  odd:bg-gray-600/25  ">
									<th className="px-4 py-2 text-nowrap">
										{
											pageData?.details?.formalDefinition?.value?.inherited
												?.label
										}
									</th>
									<td className="px-4 py-2 text-md ">
										<code>
											{
												pageData?.details?.formalDefinition?.value?.inherited
													?.value
											}
										</code>
									</td>
								</tr>
								<tr className="text-lg  odd:bg-gray-600/25  ">
									<th className="px-4 py-2 text-nowrap">
										{
											pageData?.details?.formalDefinition?.value?.computedValue
												?.label
										}
									</th>
									<td
										className="px-4 py-2 text-md "
										dangerouslySetInnerHTML={{
											__html:
												pageData?.details?.formalDefinition?.value
													?.computedValue?.value,
										}}></td>
								</tr>
								<tr className="text-lg  odd:bg-gray-600/25  ">
									<th className="px-4 py-2 text-nowrap">
										{
											pageData?.details?.formalDefinition?.value?.animationType
												?.label
										}
									</th>
									<td className="px-4 py-2 text-md ">
										{
											pageData?.details?.formalDefinition?.value?.animationType
												?.value
										}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="my-5">
						<h4 className="text-2xl mb-2 font-medium relative inline-block after:content-[':'] after:absolute after:pl-1 after:inline-block after:w-[max-content] ">
							{pageData?.details?.syntaxes?.label}
						</h4>
						<SyntaxHighlighter language="css" style={vscDarkPlus}>
							{pageData?.details?.syntaxes?.value}
						</SyntaxHighlighter>
					</div>
				</div>
			)}
		</div>
	);
};

export default Pages;
