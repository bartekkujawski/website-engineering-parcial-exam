const pageUl = document.querySelector(".page")
const prevPageBtn = document.querySelector(".prev-btn")
const nextPageBtn = document.querySelector(".next-btn")

const capturedList = []
let rewardsCounter = 0
let pageNumber = 1
const LIMIT = 10

const characters = [
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "9c7fbf86-d25c-43dd-a52d-bd2c0345e66f",
    name: {
      en: "Pandora",
      jp: "パンドラ",
      romaji: "Pandora",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/pandora.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "b216b544-2571-4d79-8182-75005fcf55a6",
    name: {
      en: "Noble Croc",
      jp: "貴族ワニ",
      romaji: "Kizoku Wani",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/noble-croc.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "d647b1ef-1624-4f6e-a97b-fa977650e1fe",
    name: {
      en: "Ideaman",
      jp: "アイデアマン",
      romaji: "Aideaman",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/ideaman.webp",
    extra_data: {
      origin: "East Blue",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "f34fa8c1-666d-4e0f-afbf-dc0fa2c91497",
    name: {
      en: "Kasagoba",
      jp: "カサゴバ",
      romaji: "Kasagoba",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/kasagoba.webp",
    extra_data: {
      origin: "Grand Line (Ryugu Kingdom)",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "75cb930d-f055-49e7-8c53-3e7025ce22c3",
    name: {
      en: "Lady Tree",
      jp: "レディツリー",
      romaji: "Redi Tsurī",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/lady-tree.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "732a4bfc-6876-47a7-9d0f-199372802000",
    name: {
      en: "Napoleon",
      jp: "ナポレオン",
      romaji: "Naporeon",
    },
    age: 38,
    status: "Alive",
    height: 848,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/napoleon.webp",
    extra_data: {
      origin: "Grand Line",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "e748a126-7957-4c05-856e-3a10fbe05672",
    name: {
      en: "Eggplant Soldier",
      jp: "ナス兵",
      romaji: "Nasu-hei",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/eggplant-soldier.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "ab0cfa17-4afc-4559-aecd-704f523463aa",
    name: {
      en: "Hustle",
      jp: "ハッスル",
      romaji: "Hassuru",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/hustle.webp",
    extra_data: {
      origin: "East Blue",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "c41b38c3-d8ba-4f9d-8cdd-ecfac1cd45ae",
    name: {
      en: "Kagikko",
      jp: "カギッコ",
      romaji: "Kagikko",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/kagikko.webp",
    extra_data: {
      origin: "East Blue",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "f2fb10f4-3f38-447e-8dfa-96887e55684e",
    name: {
      en: "Jean Noueilles",
      jp: "ジャン・ヌエイユ",
      romaji: "Jan Nueiyu",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/jean-noueilles.webp",
    extra_data: {
      origin: "Grand Line (Ryugu Kingdom)",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "d7e64141-9a66-4207-bcad-379cbcb3a8ff",
    name: {
      en: "Kingbaum",
      jp: "キングバーム",
      romaji: "Kingubāmu",
    },
    age: null,
    status: "Alive",
    height: 2340,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/kingbaum.webp",
    extra_data: {
      origin: "Grand Line (Totto Land)",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "ee9ad4de-4d41-42d4-a4a7-254e13714a30",
    name: {
      en: "Kyuin",
      jp: "キュイーン",
      romaji: "Kyuīn",
    },
    age: 20,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/kyuin.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "19c18585-ce63-4071-90af-d96c2dc92411",
    name: {
      en: "Lassoo",
      jp: "ラッスー",
      romaji: "Rassū",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/lassoo.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "bf03462b-faca-4b61-866e-6c438a2b5475",
    name: {
      en: "Momoo",
      jp: "モーム",
      romaji: "Mōmu",
    },
    age: 14,
    status: "Alive",
    height: 3600,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/momoo.webp",
    extra_data: {
      origin: "Grand Line",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "8984e324-109e-4a83-9dce-05406efe4aaf",
    name: {
      en: "Buche",
      jp: "ブッシュ",
      romaji: "Busshu",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/buche.webp",
    extra_data: {},
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "52e4de44-749c-4fc2-a324-486303da6d57",
    name: {
      en: "Carmel",
      jp: "カルメル",
      romaji: "Karumeru",
    },
    age: null,
    status: "Deceased",
    height: 185,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/carmel.webp",
    extra_data: {
      origin: "West Blue",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "7a18b734-836d-4e64-8877-18ad49512667",
    name: {
      en: "Gyro",
      jp: "ジャイロ",
      romaji: "Jairo",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/gyro.webp",
    extra_data: {},
    bounties: [
      {
        id: "0a142751-d8b2-4aef-b220-1f8ad3593a34",
        amount: 73000000,
        is_active: true,
        created_at: "2026-09-13T00:48:32.727305+00:00",
        character_id: "7a18b734-836d-4e64-8877-18ad49512667",
      },
    ],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "7db66aa4-a3ba-4abd-9b08-76503da674cf",
    name: {
      en: "Hammond",
      jp: "ハモンド",
      romaji: "Hamondo",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/hammond.webp",
    extra_data: {
      origin: "Grand Line (Ryugu Kingdom)",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "b7c02473-e1b2-4176-9e39-f765d204117f",
    name: {
      en: "Banchi",
      jp: "バンチ",
      romaji: "Banchi",
    },
    age: null,
    status: "Alive",
    height: null,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/banchi.webp",
    extra_data: {
      origin: "West Blue",
    },
    bounties: [],
  },
  {
    created_at: "2026-09-13T00:48:01.90982+00:00",
    id: "4a6ea254-e643-4412-9e60-dd8ad6077687",
    name: {
      en: "Pearl",
      jp: "パール",
      romaji: "Pāru",
    },
    age: 23,
    status: "Alive",
    height: 239,
    blood_type: "Unknown",
    birthday: null,
    image_url:
      "https://hlryizauzapedkefdviw.supabase.co/storage/v1/object/public/characters/pearl.webp",
    extra_data: {
      origin: "East Blue",
    },
    bounties: [],
  },
]

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
      const bounty = bountiues.find((b) => b.is_active)
      bountyP.textContent = `Active Bounty: ${bounty}`
      li.append(bountyP)
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

renderPage(await getPage())
