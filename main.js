const pageUl = document.querySelector(".page")
const prevPageBtn = document.querySelector(".prev-btn")
const nextPageBtn = document.querySelector(".next-btn")

const capturedList = []
let bountySum = 0
let pageNumber = 1
const LIMIT = 10

const getPage = async () => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/onepiece/characters?page=${pageNumber}&limit=${LIMIT}`,
    )
    console.log(res)
    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error("Error: ", err)
  }
}

const getSearch = async () => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/onepiece/characters?page=${pageNumber}&limit=${LIMIT}`,
    )
    console.log(res)
    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error("Error: ", err)
  }
}

const renderPage = (page) => {
  console.log(page)
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
      const bounty = ch.bounties.find((b) => b.is_active)
      bountyP.textContent = `Active Bounty: ${bounty}`
      li.append(bountyP)
    }
    pageUl.append(li)
  })
}

const prevPage = async () => {
  pageNumber -= 1
  if (pageNumber < 1) pageNumber = 1
  renderPage(await getPage())
}

const nextPage = async () => {
  pageNumber += 1
  renderPage(await getPage())
}

prevPageBtn.addEventListener("click", async () => {
  await prevPage()
})

nextPageBtn.addEventListener("click", async () => {
  await nextPage()
})

const sumTheBounty = () => {
  bountySum = capturedList.reduce((acc, prev) => acc + prev, 0)
}

const handleCapturePirate = (pirate) => {
  if (capturedList.includes(pirate))
    return alert("You already captured this pirate!")
}

const renderDetails = (char, container) => {}

renderPage(await getPage())
