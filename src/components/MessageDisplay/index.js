import React, { useEffect, useState } from 'react'
import AdviceSlip from '../../services/AdviceSlipAPI'
import { ReactionButton } from '../ReactionButton'

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
        <p>{user.slip.advice}</p>
        <div>
          <ReactionButton content="😍"/>
          <ReactionButton content="😂"/>
          <ReactionButton content="😢"/>
          <ReactionButton content="😌"/>
        </div>
      </section>
      <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        margin: 1rem;
        border-radius: 2rem;
        background: transparent;
        height: 10rem;
        align-items: center;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
      }
      `}</style>
    </>
  )
}
