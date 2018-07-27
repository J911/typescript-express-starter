import { Request, Response } from 'express'

export function echo(req: Request, res: Response) {
  res.json(req.query)
}
