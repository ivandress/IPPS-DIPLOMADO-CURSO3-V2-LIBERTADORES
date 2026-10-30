import { Router } from 'express'

export const clubRoutes = Router()

import * as controller from '../controllers/club.controllers.js'

clubRoutes.get('/', controller.listarClubes)