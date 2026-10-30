
import { Club } from '../models/club.model'


export const crearClub = (datos) => {
 
  return Club.create(datos)
}

export const buscarClubes = () => {
  return Club.find()
}

export const buscarClubPorId = (id) => {
  return Club.findById(id)
}

export const agregarJugador = async (id, jugador) => {
  const club = await Club.findById(id)
  if (!club) return null

  club.jugadores.push(jugador)
  await club.save()

  return club
}