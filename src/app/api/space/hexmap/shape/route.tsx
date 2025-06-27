import { shapeHexmap } from '@base/002.space'

export async function GET() {

  var bit = await shapeHexmap(0)
  return Response.json({ intBit: { idx: 'init-earth', src: 'i love you', dat:bit } })
}




