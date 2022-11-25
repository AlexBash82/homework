async function lottery() {
  console.log("Вы начали игру");
  return await new Promise((res, rej) => {
    setTimeout( () => {
      Math.random(0) > 0.5 ? res("Вы выиграли") : rej("Вы промахнулись")
    }, 1000) 
  })
}

lottery()
.then(msg => console.log(msg))
.then(() => console.log("Вам заплатили"))
.catch(err => console.log(err))
.finally(console.log("Игра закончена"))
