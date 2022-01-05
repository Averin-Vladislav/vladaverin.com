import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const AboutMePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata?.social

  return (
    <Layout location={location} title={siteTitle}>
        <Seo title="About" />
        
        <h1>Много обо мне</h1>
        <StaticImage
            src="../images/about-me.JPG"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            width="630"
            quality={95}
            alt="Портрет Влада"
        />

        <div>
            <h2>&#x1F44B; Интро</h2>
            <p>Мне 25 лет. Отучился на программиста в Минске, но всегда был про дизайн, визуал и восприятие.
                Пока западнее Парижа и восточнее Москвы нигде не бывал. Неплохо шпарю по-английски, учу чешский
                и кайфую от немецкого. Под боком всегда любимая мышка и кот.</p>
        </div>
           
        <div>
            <h2>&#x1F4CD; Локация</h2>
            <p>Детство в Барановичах → отрочество в Минске → юность в Праге. Живу в афигенном
                районе <a href="https://goo.gl/maps/W2qfNoGQDw1obnfe7" target="_blank">Praha 5 Smíchov</a>: 
                большие парки, бомжи, шаурмичные с жиром по бороде и шикарный вид из окна.</p>
        </div>

        <div>
            <h2>&#x1F4BB; Работа</h2>
            <p>Я дизайнер в <a href="https://www.pandadoc.com/" target="_blank">PandaDoc</a>.
                Отвечаю за <a href="https://w.wiki/4e9e" target="_blank">дизайн систему</a> и
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
                    Оружие и всякое тактическое (очень заходит ютуб канал <a href="https://www.youtube.com/c/715TEAM" target="_blank">715 team</a>)
                </li>
                <li>
                    Наруто
                </li>
                <li>
                    ФК Арсенал Лондон (особо часто не кайфую)
                </li>
                <li>
                    Сделано в СССР (коструктивизм, утилитарный дизайн, техника, вес предметов)
                </li>
                <li>
                    Фоткаю на пленку (Зенит TTL + Юпитер 37А / Гелиос-44М)
                </li>
                <li>
                    Сырный борт Papa Johns
                </li>
                <li>
                    Звездные войны
                </li>
                <li>
                    Рисуем с девушкой картины
                </li>
                <li>
                    BMW (сам пилот 425d F36 2016)
                </li>
                <li>
                    Under Armour (любимый спортивный бренд)
                </li>
                <li>
                    Недавно начал пробовать себя на барабанах (ютуб канал ударника с приколом <a href="https://www.youtube.com/c/ZackGrooves" target="_blank">ZackGrooves</a>)
                </li>
                <li>
                    Порядок на грани с <a href="https://w.wiki/4e5r" target="_blank">ОКР</a> и списки, списки, списки
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
            </ul>
        </div> */}
        
        <div>
            <h2>&#x26BD; Спортик</h2>
            <ul>
                <li>
                    Когда-то на футбольчике прокидывал в очко только так.
                </li>
                <li>
                    Время от времени прохожу курсы в <a href="https://sektaschool.ru/" target="_blank">Sekta</a>.
                </li>
                <li>
                    Катаюсь на грэвеле <a href="https://rondo.cc/ruut-al-2,467,pl" target="_blank">Rondo RUUT AL2 2020</a>.
                </li>
                <li>
                    Залипаю на армреслинг (ютуб канал <a href="https://www.youtube.com/channel/UC6eMRqZWwSBYS6IlVYD7dwQ" target="_blank">ARMWRESLING TV</a>).
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
                    <a href={`https://instagram.com/${social?.instagram || ``}`} target="_blank">
                        Инстаграм
                    </a>
                </li>
                <li>
                    <a href={`https://t.me/${social?.telegram || ``}`} target="_blank">
                        Телеграм
                    </a>
                </li>
                <li>
                    <a href={social.portfolio} target="_blank">
                        Портфолио
                    </a>
                </li>
            </ul>
        </div>
        <footer>
            <i>Обновлено 05.01.2022</i>
        </footer>
    </Layout>
  )
}

export default AboutMePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
            instagram
            telegram
            portfolio
        }
      }
    }
  }
`