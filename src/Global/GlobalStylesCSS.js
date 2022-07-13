export function GlobalCSS() {
  return (
    <style global jsx>{`
       @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
      }

      body {
        background: linear-gradient(90deg, hsla(46, 95%, 56%, 1) 0%, hsla(350, 97%, 65%, 1) 100%);
      }

    `}</style>
  )
}
