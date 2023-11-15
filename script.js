let dropdown = document.querySelector(".dropdown");
dropdown.onclick = () => {
    dropdown.classList.toggle("active")
}
const valueFun = (e) => {
    let textValue = document.querySelector('.text1');
    textValue.value = e;
    
    
}