import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import ReactDOM from "react-dom"
import React from "react"

class App extends React.Component {
    render() {
        return(
            <div>
                Meu App
            </div>
        )
    }
}

// export default function App() {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position)
//     )
//     return (
//         <div>
//             Meu App
//         </div>
//     )
// }

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)