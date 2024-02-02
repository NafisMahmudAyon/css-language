import React from 'react'
import MegaMenu from "../MegaMenu/MegaMenu";

const NavMenu = () => {
  return (
		<>
			<div className="px-6 pt-4">
				<div className="flex flex-col items-center gap-3 justify-between  ">
					<span className="text-3xl font-bold ">CSS </span>
					<MegaMenu />
				</div>
			</div>
		</>
	);
}

export default NavMenu