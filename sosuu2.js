document.getElementById("keisan2").addEventListener("click",function(){
    const n = document.getElementById("nyuuryoku").value;
    let answer;
    const yakusuu=[];
    let i=2;
    yakusuu.push(1);

    while (i<n){
        if(n%i === 0){
            yakusuu.push(i);
            answer = 1;
        }
    i += 1;
    }
    if(answer !== 1){
        alert("素数です");
    }else {
        yakusuu.push(n);
        alert(`約数${yakusuu}`);
    }
});