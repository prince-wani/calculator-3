let string=" ";
let buttons=document.querySelectorAll('.bt');
Array.from(buttons).forEach((button)=>{
	button.addEventListener('click',(label)=>{
		if(label.target.innerHTML== "=")
		{
			string=eval(string);
			document.querySelector('input').value=string;
		}
		else if(label.target.innerHTML== "c")
		{
			string=" ";
			document.querySelector('input').value=string;
		}
		else
		{
		console.log(label.target)
		string=string +label.target.innerHTML;
		document.querySelector('input').value=string;
	        	}
	})
})