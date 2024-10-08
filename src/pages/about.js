import * as React from "react"
import { graphql } from "gatsby"
import {useState, useEffect} from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMePage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata?.social
    const [temperatureInfo, setTempString] = useState();

    const getTempString = async () => {
        const responseJson = await fetch(data.site.siteMetadata.weatherAPI)
                                .then((response) => response.json())
                                .then((responseJson) => {
                                return responseJson;
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    
        const temperature = Math.round(responseJson.current.temp_c);

        switch (true) {
            case (temperature < -5):
                setTempString(<span>У нас тут сейчас {temperature}° &#x1F976;</span>);
                break;
            case (temperature < 5):
                setTempString(<span>У нас тут сейчас {temperature}° &#x1F927;</span>);
                break;
            case (temperature < 20):
                setTempString(<span>У нас тут сейчас {temperature}° &#x1F60C;</span>);
                break;
            case (temperature < 50):
                setTempString(<span>У нас тут сейчас {temperature}° &#x1F975;</span>);
                break;
            default:
                setTempString("");
                break;
            }
    };
  
    useEffect(() => {
        getTempString();
    });

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="Обо мне" />
        
        <h1 className="about-me-heading">Обо мне</h1>
        <span className="about-me-update">Обновлено 23 августа 2024</span>
        <img className="about-me-img" src="https://i.ibb.co/JxjbZ2c/about-me.jpg" alt="Я стою на деревянном мосту улыбаюсь на фоне лесных холмов" title="Я стою на деревянном мосту улыбаюсь на фоне лесных холмов"/>

        <div>
            <h2>&#x1F44B; Халоу</h2>
            <p>Я Влад Аверин. Мне 28 лет. Отучился на программиста, но всегда был про визуал и восприятие.
                 Под боком всегда любимая мышка Надя и кот Оливер.</p>
        </div>
           
        <div>
            <h2>&#x1F4CD; Локация</h2>
            <p>Детство в Барановичах → отрочество в Минске → юность в Праге. Живу в афигенном
                районе <a href="https://goo.gl/maps/ZCYXQvAJDVc5Pxjq9" target="_blank" rel="noreferrer">Velká Chuchle</a>: 
                деревенские вайбы, кони с козами, ипподром, пожарная станция с одной машиной,
                топовый вид из окна, и все здесь друг друга знают. {temperatureInfo}</p>
        </div>

        <div>
            <h2>&#x2764; От чего кайфую</h2>
            <ul>
                <li>
                    Велик. Катаюсь на аэро-ракете <a href="https://99spokes.com/en-EU/bikes/orbea/2022/orca-aero-m20ltd" target="_blank" rel="noreferrer">Orbea Orca Aero M20LTD</a>. 
                    Моя <a href={social.strava} target="_blank" rel="noreferrer">Strava</a>.
                </li>
                <li>
                    Оружие и всякое тактическоe. Под подушкой <a href="https://www.sigsauer.com/p226-mk25-full-size.html" target="_blank" rel="noreferrer">Sig Sauer P226 MK25</a>.
                </li>
                <li>
                    Топлю за лондонский Арсенал
                </li>
                <li>
                    Фоткаю на пленку (Зенит TTL + Юпитер 37А / Гелиос-44М)
                </li>
                <li>
                    BMW (пилотирую 425d F36 2016)
                </li>
                <li>
                    Наруто
                </li>
                <li>
                    Звездные войны
                </li>
                <li>
                    Сырный борт в Papa Johns
                </li>
                <li>
                    Uniqlo и Stone Island
                </li>
                <li>
                    Сделано в СССР (конструктивизм, утилитарный дизайн, техника, вес предметов)
                </li>
                <li>
                    Порядок на грани с ОКР и списки, списки, списки
                </li>
            </ul>
        </div>

        {/* <div>
            <h2>&#x1F480; Мертвые увлечения</h2>
            <ul>
                <li>
                    Дизайн
                </li>
                <li>
                    Фингерборд
                </li>
                <li>
                    Нумизматика
                </li>
                <li>
                    Дзюдо
                </li>
                <li>
                    Электрогитара
                </li>
                <li>
                    Барабаны
                </li>
                <li>
                    Рисуем с девушкой картины
                </li>
                <li>
                    Залипаю на армреслинг (ютуб канал <a href="https://www.youtube.com/channel/UC6eMRqZWwSBYS6IlVYD7dwQ" target="_blank" rel="noreferrer">ARMWRESLING TV</a>).
                </li>
                <li>
                    LEGO
                </li>
                <li>
                    Время от времени прохожу курс <a href="https://sektaschool.ru/" target="_blank" rel="noreferrer">Sekta</a>.
                </li>
            </ul>
        </div> */}
        
        {/* <div>
            <h2>&#x26BD; Спортик</h2>
            <ul>
                <li>
                    Велик. Катаюсь на аэро-ракете <a href="https://www.orbea.com/cz-en/bicycles/road/orca-aero/cat/orca-aero-m20ltd" target="_blank" rel="noreferrer">Orbea Orca Aero M20LTD</a>. 
                    Моя <a href={social.strava} target="_blank" rel="noreferrer">Strava</a>.
                </li>
                <li>
                    Когда-то на футбольчике прокидывал в очко только так.
                </li>
            </ul>
        </div> */}
        
        <div>
            <h2>&#x1F4BB; Откуда бабки</h2>
            <p>Я дизайнер в <a href="https://www.pandadoc.com/" target="_blank" rel="noreferrer">PandaDoc</a>. Я 
            отвечаю за <a href="https://w.wiki/4e9e" target="_blank" rel="noreferrer">дизайн систему</a>, 
            которая называется <a href="https://thesis.pandadoc.com/" target="_blank" rel="noreferrer">Thesis</a>. 
            В работе ценю порядок, здравый смысл, адекватных людей и когда отвечают за базар в общем.</p>
        </div>

        <div>
            <h2>&#x1F517; Ссылки</h2>
            <ul>
                <li>
                    <a href={`https://t.me/${social?.telegram || ``}`} target="_blank" rel="noreferrer">
                        Телеграм
                    </a> (+ 
                    <a href="https://t.me/addstickers/nemnozko_oreshkov" target="_blank" rel="noreferrer">
                        лучший стикерпак на свете
                    </a>)
                </li>
                <li>
                    <a href={social.movie_library} target="_blank" rel="noreferrer">
                        Библиотека фильмов и сериалов
                    </a>
                </li>
                <li>
                    <a href="https://roundnsquare.club/averin.vladislav" target="_blank" rel="noreferrer">
                        Небольшая коллекция винила
                    </a>
                </li>
                <li>
                    <a href={social.portfolio} target="_blank" rel="noreferrer">
                        Портфолио
                    </a>
                </li>
            </ul>
        </div>
    </Layout>
  )
}

export default AboutMePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        weatherAPI
        social {
            instagram
            telegram
            portfolio
            strava
            movie_library
        }
      }
    }
  }
`