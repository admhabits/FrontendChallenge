import { NextApiRequest, NextApiResponse } from 'next'

const bill = (req: NextApiRequest, res: NextApiResponse) => {
  const billData : {
    adminfee: string,
    billid: string,
    currency: string,
    title: string,
    description: string,
    body: object
  }[] = [
    {
        adminfee: "0.0",
        billid: "8",
        currency: "360",
        title: "TELKOMSEL 50rb - 50.146",
        description: "null",
        body: [
            "DENOM : 50000"
            ]
    },
    {
        adminfee: "0.0",
        billid: "9",
        currency: "360",
        title: "TELKOMSEL 75rb - 74.050",
        description: "null",
        body: [
            "DENOM : 75000"
            ]
    },
    {
        adminfee: "0.0",
        billid: "10",
        currency: "360",
        title: "TELKOMSEL 100 rb - 98.264",
        description: "null",
        body: [
            "DENOM : 100000"
            ]
    },
    {
        adminfee: "0.0",
        billid: "11",
        currency: "360",
        title: "TELKOMSEL 150 rb - 146.600",
        description: "null",
        body: [
            "DENOM : 150000"
            ]
    },{
        adminfee: "0.0",
        billid: "12",
        currency: "360",
        title: "TELKOMSEL 200rb - 194.900",
        description: "null",
        body: [
            "DENOM : 200000"
            ]
    }
]
  res.status(200).json(billData)
}

export default bill
