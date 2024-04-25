// setTimeout(function ()
// function stopInterval(){
//     clearInterval(seconds)
//     clearTimeout(second)

const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const hour = document.querySelector('#hour')


function startWatch(){ 
    let second = 0
    setInterval(function () {
        second += 1
        sec.innerHTML = second
    }, 1000)}
    //  let minute = 0
//     setInterval(function () {
//         minute += 1
//         min.innerHTML = minute
//     }, 10000)
//     let hours = 0
//     setInterval(function () {
//         hours += 1
//         hour.innerHTML = hours
//     }, 100000   )
// }



function stopInterval() {
    clearInterval(function () {
        clearInterval(second)
        clearTimeout(second)
    })
}
// function resetWatch(){

// }
