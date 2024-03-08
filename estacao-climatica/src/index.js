import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import ReactDOM from "react-dom"
import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null,
            data: null,
            icone: null, 
            erro: null
        }
    }

    obterEstacao = (data, latitude) => {
        const anoAtual = data.getFullYear()
        // 21/06
        const d1 = new Date(anoAtual, 5, 21)
        // 24/09
        const d2 = new Date(anoAtual, 8, 24)
        // 22/12
        const d3 = new Date(anoAtual, 11, 22)
        // 21/03
        const d4 = new Date(anoAtual, 2, 21)
        const estouNoSul = latitude < 0

        if (data >= d1 && data < d2)
            return estouNoSul ? 'Inverno' : 'Verão'
        if (data >= d2 && data < d3)
            return estouNoSul ? 'Primavera' : 'Outono'
        if (data >= d3 || data < d4)
            return estouNoSul ? 'Verão' : 'Inverno'
        return estouNoSul ? 'Outono' : 'Primavera'
    }

    obterLocalizacao = () => {
        window.navigator.geolocation.getCurrentPosition(
            (posicao) => {
                // this.setState({
                //     latitude: posicao.coords.latitude,
                //     longitude: posicao.coords.longitude
                // });
                // const estacao = this.obterEstacao(this.state.data, this.state.latitude);
                // const icone = this.icones[estacao];
                // this.setState({ estacao, icone });
                let dataAtual = new Date()
                let estacao = this.obterEstacao(dataAtual, posicao.coords.latitude)
                let icone = this.icones[estacao]
                this.setState({
                    latitude : posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    estacao : estacao,
                    data: dataAtual.toLocaleTimeString(),
                    icone: icone
                })
            },
            (erro) => {
                this.setState({ erro: 'Por favor, permita o acesso à sua localização' })
            }
        )
    }

    icones = {
        'Primavera' : 'fa-fan',
        'Verão' : 'fa-sun',
        'Outono' : 'fa-canadian-maple-leaf',
        'Inverno' : 'fa-snowflake'
    }

    render() {
        return(
            <div className='container mt-4'>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <div className="card-body">
                                
                                <div style={{height: '6rem'}} className="d-flex align-items-center border rounded mb-2">
                                    <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
                                    <p className="w-75 ms-3 text-center fs-1">{this.state.estacao}</p>
                                </div>

                                <div>    
                                    <p className="text-center">
                                        {
                                            this.state.latitude ? 
                                            `Coords: ${this.state.latitude},${this.state.longitude}. Data: ${this.state.data}` : 
                                            `Clique no botão para saber sua estação climática`
                                        }
                                    </p>
                                    <p className="text-center text-danger">{this.state.erro}
                                    </p>
                                </div>

                                <div>
                                    <button className="btn btn-outline-primary w-100 mt-2" onClick={this.obterLocalizacao}>
                                        Qual a minha estação?
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
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