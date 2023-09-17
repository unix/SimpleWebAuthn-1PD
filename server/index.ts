import express from 'express'
import cors from 'cors'
import { generateRegistrationOptions } from '@simplewebauthn/server'

const app = express()
app.use(cors())
const user = {
  id: 1,
  username: 'witt',
}

app.get('/registration', async (req, res) => {
  const origin = req.get('origin')
  const rpId = new URL(origin!).hostname
  console.log(`> SET rpId: "${rpId}"`)
  const options = await generateRegistrationOptions({
    rpName: '1pd-test',
    rpID: 'example.site',
    userID: `${user.id}`,
    timeout: 60000,
    userName: user.username,
    attestationType: 'none',
  })
  res.json(options)
})

app.listen(3001, () => console.log('listening on port 3001'))
