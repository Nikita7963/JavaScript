//Ques5. Manipulating DOM

function updateElementText(id){
    return function (content){
        document.querySelector("#"+id).textContent = content;
    };
};

const UpdateHeader = updateElementText("heading");
UpdateHeader("Welcome Nikita");
