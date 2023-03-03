const count = Number(Deno.args[0]) || 6
const fmt = n => (Math.round(n * 1000) / 1000).toFixed(2)

console.log(`
For ${count} peoples:

INGREDIENTS:
  ${fmt((100 / 6) * count)}gr of chocolat
  ${fmt((100 / 6) * count)}gr of butter
  ${fmt((50 / 6) * count)}gr of flour
  ${fmt((150 / 6) * count)}gr of sugar
  ${fmt((0.36 / 6) * count)}gr of salt
  ${fmt((3 / 6) * count)} eggs


STEPS:
  0. Fully melt the butter & the chocolate
  1. Beat the eggs with the sugar
  2. Mix in the flour and salt
  3. add chocolate mix
  4. keep mixing for 10 min
  5. Add in a butterd receptacle??? and put in hoven at 160 celcius
  6. wait 20 min
  7. ???
  8. profit
`)
