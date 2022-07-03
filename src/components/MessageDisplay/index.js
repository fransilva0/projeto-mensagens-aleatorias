import React, { useEffect, useState } from 'react'
import AdviceSlip from '../../services/AdviceSlipAPI'

export function MessageDisplay() {
  const [user, setUser] = useState()

  useEffect(() => {
    AdviceSlip
      .get('/advice')
      .then((response) => setUser(response.data))
  }, [])

  return (
    <>
      <section>
        <p>{user?.slip.advice}</p>
      </section>
      <style jsx>{`
      section {
        display: flex;
        justify-content: center;
        margin: 1rem;
        border-radius: 2rem;
        background: #c9c9c9;
        height: 10rem;
        align-items: center;
      }
      `}</style>
    </>
  )
}
