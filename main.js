const searchForm = document.querySelector(".search-form")
const pageUl = document.querySelector(".page")
const prevPageBtn = document.querySelector(".prev-btn")
const nextPageBtn = document.querySelector(".next-btn")
const clearContainer = document.querySelector(".clear-container")

const capturedList = []
let bountySum = 0
let pageNumber = 1
const LIMIT = 10

const getPage = async () => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/onepiece/characters?page=${pageNumber}&limit=${LIMIT}`,
    )
    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error("Error: ", err)
  }
}

const getSearch = async (name) => {
  const clean = encodeURIComponent(name.toLowerCase())
  try {
    const res = await fetch(
      `http://localhost:3000/api/onepiece/characters?page=${pageNumber}&limit=${LIMIT}&q=${clean}`,
    )
    if (!res.ok) return null
    return res.json()
  } catch (err) {
    console.error("Error: ", err)
  }
}

const renderPage = (page, isSearch) => {
  pageUl.innerHTML = ""
  clearContainer.innerHTML = ""
  page.forEach((ch) => {
    const li = document.createElement("li")

    const img = document.createElement("img")
    img.src = ch.image_url
    img.alt = `Image of ${ch.name.en}`

    const nameP = document.createElement("p")
    nameP.textContent = ch.name.en

    li.append(img)
    li.append(nameP)
    if (ch.bounties.length > 0) {
      const bountyP = document.createElement("p")
      const bounty = ch.bounties.find((b) => b.is_active)
      bountyP.textContent = `Active Bounty: ${bounty.amount}`

      const bountyLabel = document.createElement("label")
      bountyLabel.textContent = "Capture Pirate"
      const bountyCheck = document.createElement("input")
      bountyCheck.type = "checkbox"
      const isExist = capturedList.some((item) => item.id === ch.id)
      if (isExist) bountyCheck.checked = true
      bountyCheck.addEventListener("change", () => {
        handleCapturePirate(ch, bountyCheck.checked)
      })

      li.append(bountyP)
      li.append(bountyLabel)
      li.append(bountyCheck)
    }
    const additionalUl = document.createElement("ul")
    img.addEventListener("click", () => {
      renderDetails(ch, additionalUl)
    })
    li.append(additionalUl)
    pageUl.append(li)
    if (isSearch) {
      const clearBtn = document.createElement("button")
      clearBtn.textContent = "Clear Search"
      clearBtn.addEventListener("click", async () => {
        pageNumber = 1
        renderPage(await getPage())
      })
      clearContainer.append(clearBtn)
    }
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
  bountySum = capturedList.reduce((acc, prev) => {
    const bounty = prev.bounties.find((b) => b.is_active)
    return acc + bounty.amount
  }, 0)
  const bountySpan = document.querySelector(".bounty-number")
  bountySpan.textContent = bountySum
}

const handleCapturePirate = (pirate, captured) => {
  if (captured) {
    capturedList.push(pirate)
  } else {
    const index = capturedList.indexOf(pirate)
    if (index > -1) {
      capturedList.splice(index, 1)
    }
  }
  sumTheBounty()
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  pageNumber = 1
  const searchInput = document.querySelector(".search-input")
  const value = searchInput.value
  const result = await getSearch(value)
  if (result.length === 0) return alert("Character not found!")
  const isSearch = true
  renderPage(result, isSearch)
})

const renderDetails = (pirate, container) => {
  container.innerHTML = ""

  const statusLi = document.createElement("li")
  statusLi.textContent = `Status: ${pirate.status}`

  const originLi = document.createElement("li")
  originLi.textContent = `Origin: ${pirate.extra_data.origin}`

  container.append(statusLi)
  container.append(originLi)
}

renderPage(await getPage())
