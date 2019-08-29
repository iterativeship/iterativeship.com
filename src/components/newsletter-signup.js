/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useState } from 'react'

const API_URL = 'https://hooks.zapier.com/hooks/catch/5247843/o3320wl/'

export default () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()

    const data = { data: { email } }

    const response = await fetch(API_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        sx={{
          backgroundColor: 'primary',
          color: 'white',
          borderRadius: 4,
          px: 4,
          py: 3,
        }}
      >
        <Styled.h3 sx={{ m: 0 }}>Thanks! Submitted successfully.</Styled.h3>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 4,
        px: 4,
        py: 3,
        backgroundColor: 'muted'
      }}
    
    >
      <Styled.h3 sx={{ mt: 0, mb: 2 }}>Join the newsletter for updates</Styled.h3>
      <label
        sx={{
          visibility: 'hidden',
          display: 'block',
          position: 'absolute'
        }}
      >
        Email
      </label>
      <input
        type="email"
        value={email}
        placeholder="name@example.com"
        sx={{
          fontSize: [2, 3, 3],
          px: 3,
          py: 2
        }}
        onChange={e => {
          setEmail(e.target.value)
        }}
      />
    </form>
  )
}
