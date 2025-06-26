setInterval(()=>{
    let date= new Date()
    let time= {hour: (date.getHours()%12), minute: date.getMinutes(), seconds: date.getSeconds()}

    console.log(time);

    const hourDeg= time.hour*30 + 0.5*(time.minute)
    const minDeg= 6*(time.minute)
    const secDeg= 6*(time.seconds)

    const hour = document.getElementById('hourHand')
    const minute = document.getElementById('minHand')
    const second = document.getElementById('secHand')

    // hour.style.transformOrigin= '0 0'
    hour.style.transform=`rotate( ${-90+hourDeg}deg)`

    // minute.style.transformOrigin= '0 0'
    minute.style.transform=`rotate(${-90 + minDeg}deg)`

    // second.style.transformOrigin= '0 0'
    second.style.transform=`rotate(${-90 + secDeg}deg)`
}, 10)


