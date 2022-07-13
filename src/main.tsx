import './index.css'
import "../fontello-6508384b/css/fontello.css"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faAddressBook } from '@fortawesome/free-solid-svg-icons'


const faUsers = {
    prefix: 'fas',
    icon: [
      24, 
      24, 
      //randos signature and name
      [
        322321,
        'users'
      ], 
      //random signature
      'da2', 
      "M12 21L7.5 16.5L8.95 15.05L12 18.1L15.05 15.05L16.5 16.5L12 21ZM8.95 9.05L7.5 7.6L12 3.1L16.5 7.6L15.05 9.05L12 6L8.95 9.05Z"
    ],
    iconName: 'users'
}
const faIconCircle = {
  prefix: 'fas',
  icon: [
    16, 
    16, 
    //randos signature and name
    [
      322321,
      32132,
      'icon-circle'
    ], 
    //random signature
    'da3', 
    "M8 10.25L4 6.25L4.93333 5.31667L8 8.38333L11.0667 5.31667L12 6.25L8 10.25Z"
  ],
  iconName: 'icon-circle'
}

// console.log(faAddressBook.icon[4])

//@ts-ignore
library.add(faCheckSquare, faCoffee, faIconCircle, faUsers, faAddressBook)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
