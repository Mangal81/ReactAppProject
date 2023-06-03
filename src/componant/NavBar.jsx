 
 
 
 
 function NavBar(){
 
 	return (
 		<div className="flex justify-evenly bg-slate-700 text-white py-4">
 			<div>
 				<p className="text-2xl font-extrabold">NewsWorld</p>
 			</div>
 			<div>
 				<ul className="flex gap-3">
 					<li>Home</li>
 					<li>About</li>
 					<li>Tech</li>
 				</ul>
 			</div>
 			<div className="flex gap-4">
 				<input type="text" placeholder="Search" className="px-2 text-black"/>
 				<button className="border-[1px] px-3">Search</button>
 			</div>
 			
 		</div>
 	)
 
 
 }
 
 
 export default NavBar;
 
 
 
 
 
 
 
 
 
 
 
 
 
