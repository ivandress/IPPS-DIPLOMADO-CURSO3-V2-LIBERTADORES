export const openapiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'API de la Copa Libertadores — Clase 12',
    version: '1.0.0',
  },
  paths: {
    '/partidos/{id}/goles': {
      post: { summary: 'Registrar un gol' },
    },
  },
}