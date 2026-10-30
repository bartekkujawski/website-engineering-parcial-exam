// https://www.onepieceapi.com/api/characters?page=1&?limit=3

const capturedList = []
let rewardsCounter = 0
let page = 1
const LIMIT = 10

const getPage = async () => {
  const res = await fetch(
    `https://www.onepieceapi.com/api/characters?page=${page}&?limit=${LIMIT}`,
  )
  if (!res.ok) return null
  return res.json()
}
