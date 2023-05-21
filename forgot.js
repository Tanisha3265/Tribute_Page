document.getElementById("idd").addEventListener('click',generateOTP);
document.getElementById("gn").addEventListener('click',generateOTP);
function generateOTP(event) {
	event.preventDefault();
	var digits = '0123456789';
	let OTP = '';
	for (let i = 0; i < 4; i++ ) {
		OTP += digits[Math.floor(Math.random() * 10)];
	}
	document.getElementById("tel").value=OTP;
	}