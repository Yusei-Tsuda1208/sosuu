document.getElementById("keisan1").addEventListener("click",function(){
    const n = document.getElementById("nyuuryoku").value;
    let answer;
    for (let i=2; i<n; i++){
        if(n%i === 0){
            alert(i+"で割れる");
            answer = 1;
            break;
        }
    }
    if(answer !== 1){
        alert("素数");
    }
});