// heart increases
let heartCount = 0;
document.querySelectorAll('.heart-icon').forEach(function(icon){
    icon.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Hello World");
        heartCount++;
        document.getElementById('nav-heart-icon').innerText = heartCount;
    });
});
