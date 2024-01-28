// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Client from '@/model/Client'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(req: NextApiRequest, res: NextApiResponse<Client[]>) {
    const apiRes = await fetch('https://tolvk25ntd.execute-api.us-east-1.amazonaws.com/dev');

    const clients: Client[] = await apiRes.json();

    res.status(200).json(clients)
}
