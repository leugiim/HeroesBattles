import express from 'express'
import type User from '@shared/user'

const router = express.Router()

router.get('/users', (req, res) => {
  const user: User = { id: 2, name: 'test2' }
  res.send([user])
})

export default router
