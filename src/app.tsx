import { startRegistration } from '@simplewebauthn/browser'
import React from 'react'
import { createCredential } from './utils'

export const App: React.FC<unknown> = () => {
  const handler = async () => {
    const data = await createCredential()
    try {
      const verificationRes = await startRegistration(data)
      console.log(verificationRes)
    } catch (err) {
      console.log(err)
    }
    console.log(data)
  }
  return (
    <div>
      <h1>Example</h1>

      <button onClick={handler}>create</button>
    </div>
  )
}
