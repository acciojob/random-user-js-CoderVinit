//your code here
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const additionalInfo = document.getElementById("additionalInfo");
const getUserBtn = document.getElementById("getUser");
const buttons = document.querySelectorAll(".buttons button");

let currentUser = {};

async function fetchUser(){
	try {
		const response = await fetch("https://randomuser.me/api/");
		const data = await response.json();
		const user = data.results[0];

		currentUser = {
            name: `${user.name.first} ${user.name.last}`,
            image: user.picture.large,
            age: user.dob.age,
            email: user.email,
            phone: user.phone
        };

		userImage.src = currentUser.image;
		userName.textContent = currentUser.name;
		additionalInfo.innerHTML = ""
		
	} catch (error) {
		console.error("Error fetching user:", error);
	}
}

buttons.forEach(button=>{
	button.addEventListener("click",(e)=>{
		additionalInfo.textContent = ""
		const attribute = e.target.getAttribute("data-attr");
		additionalInfo.textContent = currentUser[attribute]
	})
})

getUserBtn.addEventListener("click",fetchUser)

fetchUser();
