
import * as capaNegocioServicio from "../services/club.service"

//import { buscarClubes } from "../services/club.service"
export const listarClubes = async (req, res, next) => {
  try {
    const clubes = await capaNegocioServicio.buscarClubes()
    res.json(clubes)
  } catch (error) {
    next(error)
  }
}