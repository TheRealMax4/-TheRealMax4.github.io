import GPERPS from '../images/rm_home.png';
import PADLET from '../images/padlet.jpg';
import BOT from '../images/bot.png';
import PROG from '../images/2048.png';

export default function NavBar(){
    return <div className="cardProjectsContainer">
        <div class="card">
            <img class="card-img-top" src={GPERPS} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><span className='spanTitleproject'>GPERPS</span></h5>
                <p class="card-text">
                    dispostivo che monitora l'aria e mostra i dati a schermo mediante un sito web.<br></br>
                    Tecnologie utilizzate:
                    <ul>
                        <li>Php: laravel</li>
                        <li>Javascript: leeflet(mappa)</li>
                        <li>Python</li>
                        <li>Mqtt</li>
                        <li>WebSocket</li>
                        <li>Database: SQL</li>
                    </ul>
                </p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src={PADLET} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><span className='spanTitleproject'>Padlet</span></h5>
                <p class="card-text">Replica del noto sito web padlet.<br></br>
                    Tecnologie utilizzate:
                    <ul>
                        <li>Php: laravel</li>
                        <li>Bootstrap</li>
                        <li>Database: SQL</li>
                    </ul>
                </p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src={BOT} alt="Card image cap"></img>
            <div class="card-body">
            <h5 class="card-title"><span className='spanTitleproject'>BOT TELEGRAM</span></h5>
                <p class="card-text">
                    Creazione di un bot telegram che risponde alle domande dell'utente mediate l'utilizzo di API di StackOverflow e, come seconda funzionalità,
                    generà delle password, che poi verranno criptate,. e le salva in un database con il relativo sito
                    <ul>
                        <li>Php</li>
                        <li>Telegram: telegram API</li>
                        <li>StackOverflow API</li>
                        <li>Database: SQL</li>
                    </ul>
                </p>
            </div>
        </div>

        <div class="card">
            <img class="card-img-top" src={PROG} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><span className='spanTitleproject'>2048</span></h5>
                <p class="card-text">Replica del noto gioco per telefoni 2048. <br></br>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                </p>
            </div>
        </div>

        {/* <div class="card">
            <img class="card-img-top" src={GPERPS} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><span className='spanTitleproject'>GPERPS</span></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> */}

        {/* <div class="card">
            <img class="card-img-top" src={GPERPS} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><span className='spanTitleproject'>GPERPS</span></h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div> */}
    </div>
}