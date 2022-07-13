export function ReactionButton(props) {
  return (
    <>
      <button>{props.content}</button>
      <style jsx>{`
      button {
        font-size: 1.5rem;
        border: none;
        border-radius: 5rem;
        padding: 0.2rem;
        margin: 0.5rem;
        background: #F9C823;
      }

      button:hover {
        background: #f6d770;
      }

      `}</style>
    </>
  )
}
