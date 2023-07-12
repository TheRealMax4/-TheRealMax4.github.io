import me from '../images/me.jpg';

export default function Me(){
    return <div className="meCardContainer">
        <div className="imgContainer">
            <img src={me} alt="ciao" width="200px" height="200px"></img>
        </div>
        <div className="textContainer">
            <ul>
                <li className="active">
                    <h3><span>JavaScript: React, Angular, Ionic, Node, ExpressJS</span></h3>
                </li>
                <li className="active">
                    <h3><span>PHP: Laravel</span></h3>
                </li>
                <li className="active">
                    <h3><span>Database: SQL, MySQl, MongoDB</span></h3>
                </li>
                <li className="active">
                    <h3><span>C#: Dot net</span></h3>
                </li>
                <li className="active">
                    <h3><span>Java</span></h3>
                </li>
                <li className="active">
                    <h3><span>Certificaione CISCO: CCNAv7</span></h3>
                </li>
                <li className="active">
                    <h3><span>Certificaione inglese B2</span></h3>
                </li>
            </ul>
        </div>
    </div>
}