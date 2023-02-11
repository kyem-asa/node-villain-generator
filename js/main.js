document.querySelector('#submit').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#location").textContent = `Your villian era began at ${JSON.stringify(data.locations[Math.floor(Math.random() * data.locations.length)]).replace(/"|'/g, '')}`
  document.querySelector("#companions").textContent = `You were ${JSON.stringify(data.companions[Math.floor(Math.random() * data.companions.length)]).replace(/"|'/g, '')}`
  document.querySelector("#missions").textContent = `Your mission in life is now ${JSON.stringify(data.missions[Math.floor(Math.random() * data.missions.length)]).replace(/"|'/g, '')}`

}

