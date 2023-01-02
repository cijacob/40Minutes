import type { NextApiRequest, NextApiResponse } from 'next'
const collections = [
    { id: 1, name: "culotte-1", sizes: [36, 38, 40, 42], colours: ["red", "white", "black"]},
    { id: 2, name: "culotte-2", sizes: [36, 38, 40, 42], colours: ["red", "white", "black"]}
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(collections)
}