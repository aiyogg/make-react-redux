import ReactDOM from 'react-dom'
import App from './components/Index'
import { Provider } from './react-redux'
import { store } from './redux/index'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
