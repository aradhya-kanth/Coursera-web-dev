function output() {
    const w = document.getElementById("initial_bio").offsetWidth;
    const h = document.getElementById("initial_bio").offsetHeight;
    document.getElementById("output").innerHTML = "width: " + w + "<br>" + "Height: " + h;
}

function uploadImage(){
    const input = document.getElementById("imageInput");
    const image = document.getElementById("selectedImage");
    const container = document.getElementById("imageContainer");
    const h = document.getElementById("initial_bio").offsetHeight;
    if(input.files && input.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            image.src = e.target.result;
            image.height = h;
            container.style.display = "block";
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function modeContact() {
    const Node1 = document.getElementById("contactMail");
    const Node2 = document.getElementById("contactMobile");
    if (Node1.checked){
        const NodeMail = document.getElementById('modeMail');
        NodeMail.style.display = "inline";
        const mail = document.getElementById('email');
        mail.setAttribute('required', true);
    }
    else if(!Node1.checked){
        const NodeMail = document.getElementById('modeMail');
        NodeMail.style.display = "none";
        const mail = document.getElementById('email');
        mail.removeAttribute('required');
    }
    if (Node2.checked){
        const NodeMobile = document.getElementById('modeMobile');
        NodeMobile.style.display = "inline";
        const mobile = document.getElementById('ph');
        mobile.setAttribute('required', true);
    }
    else if(!Node2.checked){
        const NodeMobile = document.getElementById('modeMobile');
        NodeMobile.style.display = "none";
        const mobile = document.getElementById('ph');
        mobile.removeAttribute('required');
    }
}

function addressChecker(){
    if (document.getElementById('add_chk').checked){
        const Add1 = document.getElementById("addr1");
        const Add2 = document.getElementById("addr2");
        const Add3 = document.getElementById("addr3");
        const Add4 = document.getElementById("addr4");
        document.getElementById("P_addr1").value = Add1.value;
        document.getElementById("P_addr2").value = Add2.value;
        document.getElementById("P_addr3").value = Add3.value;
        document.getElementById("P_addr4").value = Add4.value;
    }
    else{
        document.getElementById("P_addr1").value = "";
        document.getElementById("P_addr2").value = "";
        document.getElementById("P_addr3").value = "";
        document.getElementById("P_addr4").value = "";
    }
}

function changeOver() {
    const image = document.getElementById("selectedImage");
    const container = document.getElementById("imageContainer");
    const h = document.getElementById("initial_bio").offsetHeight;
    const imageUrl = "https://media.licdn.com/dms/image/D5603AQE_LU81N7JQMg/profile-displayphoto-shrink_800_800/0/1695019374393?e=2147483647&v=beta&t=KnA3jw-RB0FNYtaGc1K3q7tLB4ggxest_Rx88trnc4k";
    image.src = imageUrl;
    image.height = h;
}

function function1() {
    const imageElement = document.getElementById("photo");
    imageElement.src = "https://media.licdn.com/dms/image/D5616AQFtW6Zb7hkMqA/profile-displaybackgroundimage-shrink_200_800/0/1695021667685?e=2147483647&v=beta&t=EW7uEEiX7KxAPtz6O7HehiNSMUiWVL92TJU28arw_uY";
}

function function2() {
const imageElement = document.getElementById("");
imageElement.src = "https://media.licdn.com/dms/image/D5603AQE_LU81N7JQMg/profile-displayphoto-shrink_800_800/0/1695019374393?e=2147483647&v=beta&t=KnA3jw-RB0FNYtaGc1K3q7tLB4ggxest_Rx88trnc4k"
}