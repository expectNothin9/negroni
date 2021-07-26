const handler = (req, res) => {
  const { query } = req
  res.status(200).json({ query })
}

export default handler
