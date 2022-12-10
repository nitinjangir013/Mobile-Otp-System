let selectedMainDiv = document.getElementsByClassName('mobile_screen_container');
var selectedNextBtnDiv = document.getElementById('next_btn');
var selectedVerifyBtnDiv = document.getElementById('verify_btn');
const input1 = document.getElementById('mobile_no_input');
const input2 = document.getElementById('otp_input');
let selectedMessageDiv = document.getElementById('message_container');
var isMatch = false;
var check_num = false;
var result_num = false;
var randomValue;
function match1() {
	const selectedDiv1 = document.getElementById('error');
	var num_str = input1.value;
	if(num_str.length==10)
	{
		check_num = true;
		selectedDiv1.innerText = "";
		input1.style.border = "2px solid rgba(0, 0, 0, 1.0)";
		selectedDiv1.style.opacity = "0";
	}
	else
	{
		check_num = false;
		input1.style.border = "2px solid rgba(241, 33, 83, 1.0)";
		selectedDiv1.innerText = 'Enter your mobile number correctly';
		selectedDiv1.style.opacity = "1";
		selectedDiv1.style.color = "rgba(241, 33, 83, 1.0)";
	}
	if(check_num == true)
	{
		if(num_str[0] == 9 || num_str[0] == 8 || num_str[0] == 7 || num_str[0] == 6)
 		{
			result_num = true;
			input1.style.border = "2px solid rgba(0, 0, 0, 1.0)";
			selectedDiv1.innerText = "";
			selectedDiv1.style.opacity = "0";

		}
		else
		{
			result_num = false;
			input1.style.border = "2px solid rgba(241, 33, 83, 1.0)";
			selectedDiv1.innerText = 'Enter your mobile number correctly';
			selectedDiv1.style.opacity = "1";
			selectedDiv1.style.color = "rgba(241, 33, 83, 1.0)";
		}
	}
	if (check_num == true && result_num == true) 
	{
		selectedNextBtnDiv.style.pointerEvents = "unset";
	}
}


function nextBtn()
{
	selectedMainDiv[0].style.display = 'none';
	selectedMainDiv[1].style.display = 'block';
	randomValue = parseInt(Math.random()*100000);
	console.log("OTP is : "+randomValue);
	selectedMessageDiv.innerHTML = "Your OTP is : <b>"+randomValue+"</b>";
	setTimeout(function(){
		selectedMessageDiv.style.top = "0";
	},500);
}

function otpVerify()
{
	const error2 = document.getElementById('error1');
	var inputValue = input2.value;
	if (inputValue==randomValue) 
	{
		error2.innerText = "Valid OTP";
		error2.style.color = "rgba(73,176,60,1)";
		selectedVerifyBtnDiv.style.pointerEvents = "unset";
		isMatch = true;
	}
	else
	{
		error2.innerText = "Invalid OTP";
		error2.style.color = "red";
		isMatch = false;
	}
}

let selectedReg = document.getElementById('reg');
function verifyBtn()
{
	selectedMainDiv[1].style.display = 'none';
	selectedMainDiv[2].style.display = 'block';
	setTimeout(function(){
		selectedReg.style.transform = 'scale(1)';
	},100);
}