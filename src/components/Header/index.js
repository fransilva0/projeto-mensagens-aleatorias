import { ButtonSocialMedia } from '../ButtonSocialMedia/index'

export function Header() {
  return (
    <>
    <header>
      <div className="bloco-text-header">
        <h1>Mensagens Aleatórias</h1>
      </div>
      <div className="bloco-midias-sociais">
        <ButtonSocialMedia iconID="akar-icons:github-fill" URLLink="https://github.com/fransilva0" titleLink="FranSilva0" />
        <ButtonSocialMedia iconID="entypo-social:linkedin-with-circle" URLLink="https://www.linkedin.com/in/francileudo-oliveira/" titleLink="Francileudo Oliveira" />
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #999;
      }

      .bloco-text-header {
        font-size: 0.9rem;
      }

      .bloco-midias-sociais {
        display: flex;
        flex-direction: column;
      }

    `}</style>
    </>
  )
}
