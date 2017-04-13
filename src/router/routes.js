import Home from '../components/Home'
import Portfolio from '../components/portfolio/Portfolio'
import Stocks from '../components/stocks/Stocks'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks
  }
]
