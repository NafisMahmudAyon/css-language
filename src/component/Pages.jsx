import React, { useState } from "react";
import NavMenu from "./Navmenu";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import NavMenuList from "./NavMenuList";
import { useParams } from "react-router-dom";

const Pages = () => {
	const { propertyName } = useParams();
	// console.log(propertyName[0])
	// console.log(NavMenuList[propertyName[0]].properties);
	const [pageData, setPageData] = useState(
		findLabelByValue(propertyName, NavMenuList[propertyName[0]].properties)
	);
	console.log(pageData.details);

	function findLabelByValue(valueToFind, propertiesArray) {
		for (const property of propertiesArray) {
			if (property.value === valueToFind) {
				return property;
			}
		}
		return null; // Return null if the value is not found
	}
// 	  const pageData = {
// 			details: {
// 				title: "align-content",
// 				definition: {
// 					label: "Definition",
// 					value:
// 						"The CSS <code>align-content</code> property sets the distribution of space between and around content items along a <a href='/properties/flex'>flexbox</a>'s cross-axis or a <a href='/properties/grid'>grid</a>'s block axis.",
// 				},
// 				syntax: {
// 					label: "Syntax",
// 					value: `align-content: flex-start | flex-end | center | space-between | space-around | stretch

// .flex-container {
//   align-content: space-around;
// }`,
// 				},
// 				formalDefinition: {
// 					label: "Formal Definition",
// 					value: {
// 						initialValue: {
// 							label: "Initial Value",
// 							value: "normal",
// 						},
// 						appliesTo: {
// 							label: "Applies to",
// 							value: "multi-line flex containers",
// 						},
// 						inherited: {
// 							label: "Inherited",
// 							value: "no",
// 						},
// 						computedValue: {
// 							label: "Computed value",
// 							value: "as specified",
// 						},
// 						animationType: {
// 							label: "Animation type",
// 							value: "discrete",
// 						},
// 					},
// 				},
// 				syntaxes: {
// 					label: "Values",
// 					value: `align-content = 
//   normal                                   |
//   <baseline-position>                      |
//   <content-distribution>                   |
//   <overflow-position>? <content-position>  

// <baseline-position> = 
//   [ first | last ]?  &&
//   baseline           

// <content-distribution> = 
//   space-between  |
//   space-around   |
//   space-evenly   |
//   stretch        

// <overflow-position> = 
//   unsafe  |
//   safe    

// <content-position> = 
//   center      |
//   start       |
//   end         |
//   flex-start  |
//   flex-end    
// `,
// 				},
// 			},
// 		};
	return (
		<div className="border min-h-screen bg-[#dff9fb] dark:bg-[#242424] text-[#242424] dark:text-[#dff9fb] ">
			<NavMenu />
			{pageData.details == null && (
				<div className=" h-screen justify-center">
					<div className="mt-24 m-auto text-center">
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
			{(pageData.details !== null || pageData.details !== undefined) && (
				<div className="mx-auto w-[90%] max-w-[1440px] mt-8 px-3 group transition-all duration-400 ease-in-out ">
					<h2 className="mx-auto pt-2 mb-5 text-center text-4xl font-semibold relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[rgba(255,255,255,.9)] after:-bottom-[2px] after:left-0 group-hover:after:w-full after:transition-all after:duration-500 after:ease-in-out w-[max-content] ">
						{pageData?.details?.title}
					</h2>
					<div className="my-5">
						<h4 className="text-2xl mb-2 font-medium relative inline-block after:content-[':'] after:absolute after:pl-1 after:inline-block after:w-[max-content] ">
							{pageData?.details?.definition?.label}
						</h4>
						<p
							className="text-sm lg:text-md"
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
									<td className="px-4 py-2 text-sm ">
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
									<td className="px-4 py-2 text-sm ">
										{
											pageData?.details?.formalDefinition?.value?.inherited
												?.value
										}
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
										className="px-4 py-2 text-sm "
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
									<td className="px-4 py-2 text-sm ">
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
