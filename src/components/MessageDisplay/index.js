import React, { useState } from 'react'
import AdviceSlip from '../../services/AdviceSlipAPI'
import { ReactionButton } from '../ReactionButton'

export function MessageDisplay() {
  const [messageList, setMessageList] = React.useState([])
  const [user, setUser] = useState()
  const finalMessage = {
    id: messageList.length + 1,
    text: user?.slip.advice,
  }

  const getMessage = () => {
    AdviceSlip
      .get('/advice')
      .then((response) => setUser(response.data))
  }

  const addMessageList = () => {
    setMessageList([
      ...messageList,
      finalMessage,
    ])
  }

  return (
    <>
      <section>
        <p>{user?.slip.advice}</p>
        <div>
          <ReactionButton content="😍" function={addMessageList}/>
          <ReactionButton content="😂" function={addMessageList}/>
          <ReactionButton content="😢" function={addMessageList}/>
          <ReactionButton content="😌" function={addMessageList}/>
        </div>
        <button onClick={getMessage}>raffle message</button>
      </section>
      <br />
      <section>
        {messageList.map((message) => {
          return (
            <li key={message.id}>
              {message.text}
            </li>
          )
        })}
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

      button {
        padding: 0.5rem;
        border: none;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
        background: transparent;
      }
      `}</style>
    </>
  )
}
