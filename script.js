
function fun(){
    let time=new Date()
    let day=time.getDay()
    // console.log(day)
    switch(day){
        case 0:day="SUNDAY"
        break;
        case 1:day="MONDAY"
        break;
        case 2:day="TUESDAY"
        break;
        case 3:day="WEDNESDAY"
        break;
        case 4:day="THURSDAY"
        break;
        case 5:day="FRIDAY"
        break;
        case 6:day="SATURDAY"
        break;
    }
    document.getElementById("b1").innerHTML=day


    let date=time.getDate()
    let month=time.getMonth()
    switch(month){
        case 0:month="JAN"
        break;
        case 1:month="FEB"
        break;
        case 2:month="MAR"
        break;
        case 3:month="APR"
        break;
        case 4:month="MAY"
        break;
        case 5:month="JUN"
        break;
        case 6:month="JULY"
        break;
    }
    let year=time.getFullYear()
    let x=date+"-"+month+"-"+year
    document.getElementById("b2").innerHTML=x

    let hours=time.getHours()
    let minutes=time.getMinutes()
    let seconds=time.getSeconds()
    let ampm=""
    if(hours>=12){
        ampm="pm"
    }
    else{
        ampm="am"
    }
    let y=hours+":"+minutes+":"+seconds+" "+ampm
    document.getElementById("b3").innerHTML=y

    setTimeout(function(){fun(),1000})

    if(day=="SATURDAY"){
        document.getElementById("a").style.backgroundColor="green"
        document.getElementById("bg").style.backgroundImage=""
    }
    else if(day=="SUNDAY"){
        document.getElementById("a").style.backgroundColor="purple"
    }
}

