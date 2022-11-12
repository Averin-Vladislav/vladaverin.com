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
        <Seo title="About" />
        
        <h1 className="about-me-heading">Много обо мне</h1>
        <span className="about-me-update">Обновлено 09.11.2022</span>
        <img className="about-me-img" src="https://dl.dropboxusercontent.com/s/vp2944mnj7v1b2l/about-me.JPG?dl=0" alt="Фото меня на фоне летних гор" title="Фото меня на фоне летних гор"/>

        <div>
            <h2>&#x1F44B; Интро</h2>
            <p>Мне 26 лет. Отучился на программиста в Минске, но всегда был про дизайн, визуал и восприятие.
                Пока западнее Барселоны и восточнее Москвы нигде не бывал. Неплохо шпарю по-английски, чего-то могу выдавить по-чешски
                и кайфую от немецкого. Под боком всегда любимая Мышка и кот.</p>
        </div>
           
        <div>
            <h2>&#x1F4CD; Локация</h2>
            <p>Детство в Барановичах → отрочество в Минске → юность в Праге. Живу в афигенном
                районе <a href="https://goo.gl/maps/ZCYXQvAJDVc5Pxjq9" target="_blank" rel="noreferrer">Velká Chuchle</a>: 
                деревенские вайбы, кони с козами пасутся, ипподром рядом, супер классный полудикий парк, местная пожарная станция с одной машиной,
                достойный вид из окна, и вообще ощущение, что все друг друга знают. {temperatureInfo}</p>
        </div>

        <div>
            <h2>&#x1F4BB; Работа</h2>
            <p>Я дизайнер в <a href="https://www.pandadoc.com/" target="_blank" rel="noreferrer">PandaDoc</a>.
                Отвечаю за <a href="https://w.wiki/4e9e" target="_blank" rel="noreferrer">дизайн систему</a> и
                помогаю остальным дизайнерам работать эффективно и качественно. В работе ценю порядок, 
                здравый смысл и адекватных людей.</p>
        </div>

        <div>
            <h2>&#x2764; От чего кайфую</h2>
            <ul>
                <li>
                    Дизайн
                </li>
                <li>
                    LEGO
                </li>
                <li>
                    Оружие и всякое тактическоe
                </li>
                <li>
                    Наруто
                </li>
                <li>
                    ФК Арсенал Лондон (в последнее время прям очень кайфую)
                </li>
                <li>
                    Сделано в СССР (конструктивизм, утилитарный дизайн, техника, вес предметов)
                </li>
                <li>
                    Фоткаю на пленку (Зенит TTL + Юпитер 37А / Гелиос-44М)
                </li>
                <li>
                    Сырный борт Papa Johns (а в Чехии его нет, R.I.P.)
                </li>
                <li>
                    Звездные войны
                </li>
                <li>
                    BMW (пилот 425d F36 2016)
                </li>
                <li>
                    Uniqlo (бренд шмотья который)
                </li>
                <li>
                    Порядок на грани с <a href="https://w.wiki/4e5r" target="_blank" rel="noreferrer">ОКР</a> и списки, списки, списки
                </li>
            </ul>
        </div>

        {/* <div>
            <h2>&#x1F480; Мертвые увлечения</h2>
            <ul>
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
            </ul>
        </div> */}
        
        <div>
            <h2>&#x26BD; Спортик</h2>
            <ul>
                <li>
                    Катаюсь на аэро-ракете <a href="https://www.orbea.com/cz-en/bicycles/road/orca-aero/cat/orca-aero-m20ltd" target="_blank" rel="noreferrer">Orbea Orca Aero M20LTD</a>. 
                    Моя <a href={social.strava} target="_blank" rel="noreferrer">Strava</a>.
                </li>
                <li>
                    Время от времени прохожу курс <a href="https://sektaschool.ru/" target="_blank" rel="noreferrer">Sekta</a>.
                </li>
                <li>
                    Когда-то на футбольчике прокидывал в очко только так.
                </li>
                <li>
                    Люблю посмотреть хайповые бои UFC.
                </li>
            </ul>
        </div>
        
        <div>
            <h2>&#x1F517; Ссылки</h2>
            <ul>
                <li>
                    <a href={`https://t.me/${social?.telegram || ``}`} target="_blank" rel="noreferrer">
                        Телеграм
                    </a> (+ 
                    <a href="https://t.me/addstickers/nemnozko_oreshkov" target="_blank" rel="noreferrer">
                        мой стикерпак
                    </a>)
                </li>
                <li>
                    <a href={`https://instagram.com/${social?.instagram || ``}`} target="_blank" rel="noreferrer">
                        Инстаграм
                    </a>
                </li>
                <li>
                    <a href={social.portfolio} target="_blank" rel="noreferrer">
                        Портфолио
                    </a>
                </li>
                <li>
                    <a href={social.movie_library} target="_blank" rel="noreferrer">
                        Моя библиотека фильмов и сериалов
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