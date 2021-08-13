/**
 * @param {string} state
 * @returns {string}
 */
export const getApiLineAuthorizeUrl = (state) => {
  const qs = new URLSearchParams()
  qs.append('state', state)
  return `/api/line/authorize?${qs.toString()}`
}

/**
 * @returns {boolean}
 */
export const isBrowser = () => typeof window !== 'undefined'

/**
 * @param {Object[]} array
 * @returns {Object[]}
 */
export const shuffle = (array) => {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}
