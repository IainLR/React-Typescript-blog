import ReactDom from 'react-dom'

const App = () => {
  return (
    <h1>
      React and TypeScript <br /> Together at last
    </h1>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
