const metal = ['Aluminum', 'Copper', 'Iron', 'Gold', 'Silver', 'Zinc', 'Lead', 'Tin', 'Nickel', 'Chromium', 'Platinum']
console.log(metal)

let metal2 = [...metal , 'dimond' , 'steel']

console.log(metal2)

const met = document.getElementById('met')
const colors = document.getElementById('colors')

const but2 = document.getElementById('but2')
const loop = []
const colours = [aluminum = '#D9D9D9', copper = '#B87333', iron = '#4B4B4B', gold = '#FFD700', silver = '#C0C0C0', zinc = '#7F8C8D', lead = '#6D6D6D', tin = '#D6D6D6', nickel = '#AFAFAF', chromium = '#B0B7C0', platinum = '#E5E4E2', mercury = '#B8BCC2', titanium = '#878681', magnesium = '#C0C8CF', calcium = '#F5F5F5', sodium = '#C9D4D8', potassium = '#B0C4DE', lithium = '#DCDCDC', cobalt = '#3D59AB', manganese = '#808A87']
//for(i=0; i<metal.length; i++){


but2.onclick = function()
{const loops = Math.floor(Math.random()*metal.length)
loop.push(metal[loops])

met.textContent = `Your metal is ${metal[loops]}`
colors.style.backgroundColor = colours[loops]
}

