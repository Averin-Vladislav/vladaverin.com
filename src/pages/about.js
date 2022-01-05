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
        
        <h1>Обо мне</h1>
        <StaticImage
            src="../images/about-me.JPG"
            width="500"
            alt="Profile picture"
        />

        <div>
            <h2>&#x1F44B; Интро</h2>
            <p>Мне 25 лет. Отучился на программиста в Минске, но всегда был про дизайн, визуал и восприятие.
                Пока западнее Парижа и восточнее Москвы нигде не бывал. Неплохо шпарю по-английски, учу чешский
                и кайфую от немецкого. Под боком всегда любимая мышка и кот.</p>
        </div>
           
        <div>
            <h2>&#x1F4CD; Локация</h2>
            <p>Барановичи детство -> Минск отрочество -> Прага юность. Живу в афигенном районе Praha 5 с шикарным видом из окна,
            бомжами, волосатыми шаурмичными и огромными парками.</p>
        </div>

        <div>
            <h2>&#x1F4BB; Работаю</h2>
            <p>Я DesignOps в <a href="https://www.pandadoc.com/" target="_blank">PandaDoc</a>. Отвечаю за дизайн систему и помогаю дизайнерам цифровых продуктов работать эффективно и качественно. В работе ценю порядок, здравый смысл и адекватных людей.</p>
        </div>

        <div>
            <h2>&#x2764; От чего кайфую</h2>
            <ul>
                <li>
                    Дизайн
                </li>
                <li>
                    ФК Арсенал Лондон (особо часто не кайфую)
                </li>
                <li>
                    LEGO
                </li>
                <li>
                    Культура огнестрельного оружия
                </li>
                <li>
                    Наруто
                </li>
                <li>
                    Барахолки
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
                    BMW (пилот 425d F36 2016)
                </li>
                <li>
                    Under Armour (любимый спортивный бренд)
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
                    Когда-то прокидывал в очко только так на футбольчике. Сейчас могу 15 минут побегать и побить по воротам.
                </li>
                <li>
                    Пару раз в год прохожу курс <a href="https://sektaschool.ru/" target="_blank">Sekta</a>.
                </li>
                <li>
                    Катаюсь на грэвеле <a href="https://rondo.cc/ruut-al-2,467,pl" target="_blank">Rondo RUUT AL2 2020</a>.
                </li>
                <li>
                    Залипаю на армреслинг(ютуб канал <a href="https://www.youtube.com/channel/UC6eMRqZWwSBYS6IlVYD7dwQ" target="_blank">ARMWRESLING TV</a>)
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