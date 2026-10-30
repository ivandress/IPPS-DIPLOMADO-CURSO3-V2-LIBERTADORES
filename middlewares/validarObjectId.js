export const validarObjectId = (req, res, next) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404)
      .json({ error: 'Id inválido' })
  }
  next()
}