let count = 0;
document.getElementById('positive').addEventListener('click', function () {
    count += 1;
    document.getElementById('number').innerText=count;

})

document.getElementById('negitive').addEventListener('click',function(){
    count -=1;
    document.getElementById('number').innerText=count;
})