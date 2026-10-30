const pageUl = document.querySelector(".page")

const capturedList = []
let rewardsCounter = 0
let pageNumber = 1
const LIMIT = 10

const getPage = async () => {
  try {
    const res = await fetch(
      `https://www.onepieceapi.com/api/characters?page=${pageNumber}&?limit=${LIMIT}`,
    )
    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error("Error: ", err)
  }
}

// image_url, name.romaji, bounties

const renderPage = (page) => {
  pageUl.innerHTML = ""
  page.forEach((ch) => {
    const li = document.createElement("li")

    const img = document.createElement("img")
    img.src = ch.image_url
    img.alt = `Image of ${ch.name.romaji}`

    const nameP = document.createElement("p")
    nameP.textContent = ch.name.romaji

    li.append(img)
    li.append(nameP)
    if (ch.bounties.length > 0) {
      const bountyP = document.createElement("p")
      bountyP.textContent = `Active Bounty: ${capturedList.bounties[0].amount}`
      li.append(bountyP)
    }
  })
}

renderPage(await getPage())
