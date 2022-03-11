function changeTheme(){
	var homeLogo = document.getElementsByClassName("nav__logo-img"),
		homeLogoLink = document.getElementById("nav__logo-link"),
		btnChange = document.getElementById("theme-button"),
		bodyChange = document.getElementsByTagName("body");

	for(var i=0; i<homeLogo.length; i++){
		homeLogo[i].classList.toggle("logo--active");
	}
	homeLogoLink.classList.toggle("nav__logo-link-active");
	btnChange.classList.toggle("change-time--active");
	bodyChange[0].classList.toggle("dark-theme");
	
}

/*==================== SHOW MODAL MENU LIST ====================*/
const menuToggle = document.getElementById("nav--toggle"),
	  menuModalContainer = document.getElementById("modal-menu"),
	  menuModalOverlay = document.getElementById("modal-overlay-menu"),
	  menuList = document.getElementById("nav-menu");

	/*========== MENU SHOW ==========*/
if(menuToggle){
	menuToggle.addEventListener('click', ()=>{
		menuModalContainer.classList.add("modal--active");
		menuModalOverlay.classList.add("modal__overlay--active");
		menuList.classList.add("show-menu");
	})
}
	/*========== MENU HIDDEN ==========*/
if(menuModalOverlay){
	menuModalOverlay.addEventListener('click', ()=>{
		menuModalContainer.classList.remove("modal--active");
		menuModalOverlay.classList.remove("modal__overlay--active");
		menuList.classList.remove("show-menu");
	})
}

/*==================== ACCORDION TOPICS ====================*/
const menuWrapper = document.getElementsByClassName('nav__menu-content-wrapper'),
	  menuTitles = document.querySelectorAll('.nav__menu-content-title');

function toggleNavItems(){
	let itemClass = this.parentNode.className;

	for(i=0; i<menuWrapper.length; i++){
		menuWrapper[i].className = 'nav__menu-content-wrapper nav-item--close';
	}
	if(itemClass === 'nav__menu-content-wrapper nav-item--close'){
		this.parentNode.className = 'nav__menu-content-wrapper nav-item--open';
	}
}

menuTitles.forEach((el) =>{
	el.addEventListener('click', toggleNavItems);
})

/*==================== SHOW MODAL REGISTER/LOGIN ====================*/
const loginToggle = document.getElementById("navLogin"),
	  registerToggle = document.getElementById("navRegister"),
	  modalLogin = document.getElementById("modalLogin"),
	  modalRegister = document.getElementById("modalRegister"),
	  modalBack = document.getElementById("modal--back"),
	  modalContainer = document.getElementById("modal"),
	  modalOverlay = document.getElementById("modal-overlay"),
	  btnModalLogin = document.getElementById("btnLogin"),
	  btnModalRegister = document.getElementById("btnRegister");

	/*========== LOGIN FORM SHOW ==========*/
if(loginToggle){
	loginToggle.addEventListener('click', ()=>{
		modalActive = document.getElementsByClassName("modal__content--active");
		if(modalActive){
			for(let i=0; i<modalActive.length; i++){
				modalActive[i].classList.remove("modal__content--active");
			}
		}
		if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
			for(let i=0; i<btnModalActived.length; i++){
				btnModalActived[i].classList.remove("buttonModal--active");
			}
		}
		modalLogin.classList.add("modal__content--active");
		modalContainer.classList.add("modal--active");
		modalOverlay.classList.add("modal__overlay--active");
		btnModalLogin.classList.add("buttonModal--active");
	});
}

	/*========== REGISTER FORM SHOW ==========*/
if(registerToggle){
	registerToggle.addEventListener('click', ()=>{
		modalActive = document.getElementsByClassName("modal__content--active");
		if(modalActive){
			for(let i=0; i<modalActive.length; i++){
				modalActive[i].classList.remove("modal__content--active");
			}
		}
		if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
			for(let i=0; i<btnModalActived.length; i++){
				btnModalActived[i].classList.remove("buttonModal--active");
			}
		}
		modalRegister.classList.add("modal__content--active");
		modalContainer.classList.add("modal--active");
		modalOverlay.classList.add("modal__overlay--active");
		btnModalRegister.classList.add("buttonModal--active");
	})
}

	/*========== FORM HIDDEN ==========*/
if(modalOverlay || modalBack){
	modalOverlay.addEventListener('click', ()=>{
		modalContainer.classList.remove("modal--active");
		modalOverlay.classList.remove("modal__overlay--active");
		if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
			for(let i=0; i<btnModalActived.length; i++){
				btnModalActived[i].classList.remove("buttonModal--active");
			}
		}
	});
	modalBack.addEventListener('click', ()=>{
		modalContainer.classList.remove("modal--active");
		modalOverlay.classList.remove("modal__overlay--active");
		if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
			for(let i=0; i<btnModalActived.length; i++){
				btnModalActived[i].classList.remove("buttonModal--active");
			}
		}
	});
}

/*==================== LOGIN FORM ====================*/
const btnLogin = document.getElementById("btnLogin");

if(btnLogin){
	btnLogin.addEventListener('click', ()=>{
		login();
	})
}

function login(){
	let login_Name = document.getElementById("loginName").value;
	let login_Pass = document.getElementById("loginPass").value;

	// alert(login_Name);
	// alert(login_Pass);

	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "ajax/login.php?loginName="+login_Name+"&loginPass="+login_Pass;
	var asynchronous = true;

	ajax.open(method, url, asynchronous);

	ajax.send();

	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.responseText;
			// alert(response);
			if(response !== "false"){
				alert('Đăng nhập thành công, chào mừng ' + response + ' !');
				location.reload();
			}else{
				alert('Sai tài khoản hoặc mật khẩu, vui lòng thử lại');
				window.location.href = "./index.php?status=login";
			}
		}
	}
}

/*==================== REGISTER FORM ====================*/
const btnRegister = document.getElementById("btnRegister");

if(btnRegister){
	btnRegister.addEventListener('click', ()=>{
		register();
	})
}

function register(){
	let regis_RealName = document.getElementById("regisRealName").value;
	let regis_UserName = document.getElementById("regisUserName").value;
	let regis_Pass = document.getElementById("regisPass").value;
	let regis_ConfirmPass = document.getElementById("regisConfirmPass").value;

	// alert(login_Name);
	// alert(login_Pass);

	if(regis_RealName && regis_UserName && regis_Pass && regis_ConfirmPass){
		if(regis_UserName.length <= 30){
			if(regis_Pass == regis_ConfirmPass){
				var ajax = new XMLHttpRequest();
				var method = "GET";
				var url = "ajax/register.php?regisRealName="+regis_RealName+"&regisUserName="+regis_UserName+"&regisPass="+regis_Pass;
				var asynchronous = true;

				ajax.open(method, url, asynchronous);

				ajax.send();

				ajax.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200){
						var response = this.responseText;
						// alert(response);
						if(response !== "false"){
							alert('Tạo tài khoản thành công, chào mừng ' + response + ' !');
							location.reload();
						}else{
							alert('Tên tài khoản đã tồn tại!');
							window.location.href = "./index.php?status=login";
						}
					}
				}
			}else{
				alert("Nhập lại mật khẩu không đúng!");
			}
		}else{
			alert("Tên tài khoản không được vượt quá 30 ký tự!");
		}
	}else{
		alert("Thông tin không được để trống");
	}
}

/*==================== LOGIN | REGISTER | LOGOUT FUNCTION ====================*/
function showLoginForm(){
	const modalLogin = document.getElementById("modalLogin"),
		  modalContainer = document.getElementById("modal"),
		  modalOverlay = document.getElementById("modal-overlay"),
		  btnModalLogin = document.getElementById("btnLogin");
	modalActive = document.getElementsByClassName("modal__content--active");
	if(modalActive){
		for(let i=0; i<modalActive.length; i++){
			modalActive[i].classList.remove("modal__content--active");
		}
	}
	if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
		for(let i=0; i<btnModalActived.length; i++){
			btnModalActived[i].classList.remove("buttonModal--active");
		}
	}
	modalLogin.classList.add("modal__content--active");
	modalContainer.classList.add("modal--active");
	modalOverlay.classList.add("modal__overlay--active");
	btnModalLogin.classList.add("buttonModal--active");
}

function showRegisterForm(){
	const modalRegister = document.getElementById("modalRegister"),
		  modalContainer = document.getElementById("modal"),
		  modalOverlay = document.getElementById("modal-overlay"),
		  btnModalRegister = document.getElementById("btnRegister");
	modalActive = document.getElementsByClassName("modal__content--active");
	if(modalActive){
		for(let i=0; i<modalActive.length; i++){
			modalActive[i].classList.remove("modal__content--active");
		}
	}
	if(btnModalActived = document.getElementsByClassName("buttonModal--active")){
		for(let i=0; i<btnModalActived.length; i++){
			btnModalActived[i].classList.remove("buttonModal--active");
		}
	}
	modalRegister.classList.add("modal__content--active");
	modalContainer.classList.add("modal--active");
	modalOverlay.classList.add("modal__overlay--active");
	btnModalRegister.classList.add("buttonModal--active");
}

function userLogOut(){
	if(confirm("Bạn có thật sự muốn đăng xuất?"))
		location.href='./index.php?status=logout';
}

/*==================== ACCORDION TOPICS ====================*/
const forumTopics = document.getElementsByClassName('forum__topics'),
	  forumHeaders = document.querySelectorAll('.forum__topics_header');

function toggletopics(){
	let itemClass = this.parentNode.className;

	for(i=0; i<forumTopics.length; i++){
		forumTopics[i].className = 'forum__topics topics__close';
	}
	if(itemClass === 'forum__topics topics__close'){
		this.parentNode.className = 'forum__topics topics__open';
	}
}

forumHeaders.forEach((el) =>{
	el.addEventListener('click', toggletopics);
})


/*==================== SEND COMMENT ====================*/
const commentSend = document.getElementById("detail_comment-btnsend");

function sendComment(str){
	let newstr = str.replace(/(\r\n|\n\r|\r|\n)/g, '</p> <p>');
	let user_name = document.getElementById("userName").innerHTML;
	let topic_id = document.getElementById("topicID").innerHTML;

	// alert(user_name);
	// alert(topic_id);
	// alert(newstr);

	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "ajax/addComment.php?user_name="+user_name+"&topic_id="+topic_id+"&comment="+newstr;
	var asynchronous = true;

	ajax.open(method, url, asynchronous);

	ajax.send();

	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.responseText;
			// alert(response);
			if(response == "true"){
				alert('Thêm câu trả lời thành công!');
				location.reload();
			}else{
				alert('Xảy ra lỗi trong quá trình thêm câu trả lời!');
			}
		}
	}
}

if(commentSend){
	commentSend.addEventListener('click', ()=>{
		var commentInput = document.getElementById("detail_comment-input").value;
		// alert(commentInput);
		sendComment(commentInput);
	})
}

/*==================== SHOW MODAL ADDING TOPIC ====================*/
const addToggle = document.getElementById("add-topic--toggle"),
	  addBack = document.getElementById("addModal--back"),
	  addmodal = document.getElementById("addModal"),
	  addmodalOverlay = document.getElementById("addModal-overlay");

	/*========== ADD FORM SHOW ==========*/
if(addToggle){
	addToggle.addEventListener('click', ()=>{
		addmodal.classList.add("modal--active");
		addmodalOverlay.classList.add("modal__overlay--active");
	});
}

	/*========== ADD FORM HIDDEN ==========*/
if(addmodalOverlay || addBack){
	addmodalOverlay.addEventListener('click', ()=>{
		if(addmodal)
			addmodal.classList.remove("modal--active");
		addmodalOverlay.classList.remove("modal__overlay--active");
	});
	addBack.addEventListener('click', ()=>{
		if(addmodal)
			addmodal.classList.remove("modal--active");
		addmodalOverlay.classList.remove("modal__overlay--active");
	});
}

/*==================== ADDING NEW QUESTION ====================*/
const btnAddQuestion = document.getElementById("btn_add_question");

function checkAddQuestion(){
	let questionTitle = document.getElementById("add_question_title").value;
	let questionContent = document.getElementById("add_question_content").value;

	if(questionTitle.length && questionContent.length)
		return true;

	alert("Vui lòng không để trống thông tin");
	return false;
}

let questionContentText = document.getElementById("add_question_content");
if(questionContentText){
	questionContentText.onkeypress = function(e){
		if (e.which === 13) {
			var text = questionContentText.value;
			// alert(text);
			questionContentText.value = text + "\n";
		}
	};
}

function addQuestion(){
	let user_name = document.getElementById("userName").innerHTML;
	let questionTitle = document.getElementById("add_question_title").value;
	let questionContent = document.getElementById("add_question_content").value;
	let newContent = questionContent.replace(/(\r\n|\n\r|\r|\n\n)/g, '</p><p>');
	let questionCategory = document.getElementById("add_question_category").value;

	// alert(user_name);
	// alert(questionTitle);
	// alert(questionContent);
	// alert(newContent);
	// alert(questionCategory);

	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "ajax/addQuestion.php?user_name="+user_name+"&question_title="+questionTitle+"&question_content="+newContent+"&question_category="+questionCategory;
	var asynchronous = true;

	ajax.open(method, url, asynchronous);

	ajax.send();

	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.responseText;
			// alert(response);
			if(response == "true"){
				alert('Thêm câu hỏi thành công!');
				location.reload();
			}else{
				alert('Xảy ra lỗi trong quá trình thêm câu hỏi!');
			}
		}
	}
}

if(btnAddQuestion){
	btnAddQuestion.addEventListener('click', ()=>{
		if(checkAddQuestion()){
			addQuestion();
		}
	})
}

/*==================== TOGGLE LIKE COMMENT ====================*/
function toggleCommentLike(cmtID, status){
	let user_name = document.getElementById("userName").innerHTML;
	let commentID = cmtID;
	let likeStatus = status;

	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "ajax/toggleLikeComment.php?status="+likeStatus+"&user_name="+user_name+"&comment_id="+commentID;
	var asynchronous = true;

	ajax.open(method, url, asynchronous);

	ajax.send();

	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.responseText;
			// alert(response);
			if(response == "true"){
				location.reload();
			}else{
				alert('Xảy ra lỗi!');
			}
		}
	}
}

/*==================== TOGGLE LIKE TOPIC ====================*/
function toggleTopicLike(cmtID, status){
	let user_name = document.getElementById("userName").innerHTML;
	let topicID = cmtID;
	let likeStatus = status;

	var ajax = new XMLHttpRequest();
	var method = "GET";
	var url = "ajax/toggleLikeTopic.php?status="+likeStatus+"&user_name="+user_name+"&topic_id="+topicID;
	var asynchronous = true;

	ajax.open(method, url, asynchronous);

	ajax.send();

	ajax.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var response = this.responseText;
			// alert(response);
			if(response == "true"){
				location.reload();
			}else{
				alert('Xảy ra lỗi!');
			}
		}
	}
}
