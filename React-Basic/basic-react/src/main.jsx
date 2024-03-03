import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'

render(<App />, document.getElementById('app'))
// ReactDOM.createRoot(document.getElementById('app')).render(
//     <App />,
// )
