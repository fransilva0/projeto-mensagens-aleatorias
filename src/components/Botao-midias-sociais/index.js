import { Icon } from '@iconify/react'

export function BotaoMidiasSociais(props) {
  return (
    <>
      <div className="bloco-midias-sociais__midia-link">
          <Icon icon={props.iconID} color="#999" width="30" />
          <a className="bloco-midias-sociais__midia-link--space" href={props.URLLink} target="_blank" rel="noreferrer" >{props.titleLink}</a>
        </div>
        <style jsx>{`
          .bloco-midias-sociais__midia-link {
            display: flex;
            align-items: center;
            padding: 0.5rem;

          }

          .bloco-midias-sociais__midia-link--space {
            margin-left: 0.5rem;
          }
        `}</style>
    </>
  )
}
