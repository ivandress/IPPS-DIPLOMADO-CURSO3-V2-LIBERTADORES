import express from 'express'

export const clubRoutes = Router()

import * as controller from '../controllers/club.controllers'

clubRoutes.get('/', controller.listarClubes)