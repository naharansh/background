function getcolor() {
	const letter='0123456789ABCDEF';
	let color="#";
	for(let i=0;i<6;i++)
	{
		color=color+letter[Math.floor(Math.random()*16)]
	}
	return color;
}
let d=document.querySelector("#paste");
document.querySelector("#preconnect").addEventListener("click",()=>{
	let e=getcolor();
	d.innerText=e;
	document.querySelector("body").style.backgroundColor=e;
})