let colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
    let color = document.getElementById('color').value;
    document.body.style.background = color;
    sessionStorage.setItem("color", color)
});