import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const FilmItem = ({name, src}) => (
    <div className='film'>
        <div className='film__name'>
            {name}
        </div>
        <iframe width="560" height="315" src={src}
                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
        </iframe>
    </div>
)

class Films extends Component {
    // Автоматически вызывается super() === new Component();
    state = {
        films: [{
            name: 'Lords of the Rings: The Fellowship of the Ring',
            src: 'https://www.youtube.com/embed/4BE5u9itrsY',
        },{
            name: 'Lords of the Rings: The Two Towers',
            src: 'https://www.youtube.com/embed/BWfDCfeoGQs',
        },{
            name: 'Lords of the Rings: The Return of The King',
            src: 'https://www.youtube.com/embed/QVIt5n94LL0',
        }],
        serials: [{
            name: 'Sillicon Valley',
            src: 'https://www.youtube.com/embed/Lt6PPiTTwbE',
        },{
            name: 'Brooklyn 99',
            src: 'https://www.youtube.com/embed/ffyKY3Dj5ZE',
        }],
        active: 'films',
        name: '',
        src: ''
    }

    // React Children can be:
    // Primitve(String, Number, Boolean), Components, Elements
    // and Array of (Primitive, Components, Elements)
    changeFilm(active) {
        this.setState({
            active
        })
    }

    changeInput(field, event) {
        const value = event.target.value;
        this.setState({
            [field]: value
        });
    }

    // Perfomance improve solution
    changeName(event) {
        this.changeInput.call(this, 'name', event);
    }

    addFilm = () => {
        // Если важно предыдущее состояние, то используете функцию в первом аргументе
        // Пример:
        // this.setState((prevState) => {
        //     return {
        //         // состояние основанное на предыдущем
        //     }
        // })

        // Если неважно, используете объект с новым состоянием в setState();
        // Пример:
        // this.setState({
        //     // новое состояние
        // })

        this.setState((prevState) => ({
            films: [...prevState.films, {
                name: prevState.name,
                src: prevState.src
            }]
        }))
    }

    render(){
        // const filmsNew = this.state[this.state.active];
        const filmsNew = [...this.state.films];
        return (
            <div className='films__wrapper'>
                <button onClick={this.changeFilm.bind(this, 'films')}>
                    Films
                </button>
                <button onClick={this.changeFilm.bind(this, 'serials')}>
                    Serial
                </button>
                <div className="film__add">
                    <div>
                        Name:
                        <input type="text"
                               className="film__name"
                               value={this.state.name}
                               onChange={this.changeInput.bind(this, 'name')}
                        />
                    </div>
                    <div>
                        Src:
                        <input type="text"
                               className="film__name"
                               value={this.state.src}
                               onChange={this.changeInput.bind(this, 'src')}
                        />
                    </div>
                    <button onClick={this.addFilm}>Add Film!</button>
                </div>
                {filmsNew.map((film, index) => <FilmItem {...film} />)}
            </div>
        )
    }
}

ReactDOM.render(<Films/>, document.getElementById('root'));
registerServiceWorker();