import { Destination } from "../shared/types"
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
})

export const getDestinations = async (): Promise<Destination[]> => {
  const entries = await client.getEntries()

  const data = entries.items.map((item: any) => {
    const image = item.fields.image
    const imageUrl = {
      image: image ? `${image.fields.file.url}?w=240` : null,
    }
    return { ...item.fields, ...imageUrl }
  })

  return data
}
