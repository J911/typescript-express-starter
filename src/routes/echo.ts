import { Router } from 'express'

const router = Router()

import * as echo from '../controllers/echo'
router.get('/echo', echo.echo)

module.exports = router
