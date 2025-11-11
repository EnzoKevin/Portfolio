import express from 'express'
import { supabase } from './supabaseClient'

const app = express()
app.use(express.json())

const GetData = app.get('/items', async (req, res) => {
  const { data, error } = await supabase.from('items').select('*')

  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

const PostData = app.post('/items', async (req, res) => {
  const { name, price } = req.body

  const { data, error } = await supabase.from('items').insert([{ name, price }])

  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json(data)
})

const DelData = app.del(`/items/${id}`, async (req, res) => {
  const error = await supabase.from('items').delete([{ id }])

  if (error) return res.status(500).json({ error: error.mensage })
})

const UpData = app.put(`/items/${id}`, async (req, res) => {
  const { name, price } = req.body

  const { data, error } = await supabase.from('items').update([{ name, price }])

  if (error) return res.status(500).json({ error: error.mensage })
})

/* const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
}) */

export { GetData, PostData, DelData, UpData }
