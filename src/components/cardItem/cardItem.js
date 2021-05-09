import React from "react"
import { Link } from "gatsby"
import cardStyles from "./cardItem.module.scss"

function cardItem(props) {
  return (
    <>
      <li className={cardStyles.cardsItem}>
        <Link className={cardStyles.cardsItemLink} to={props.path}>
          <figure
            className={cardStyles.cardsItemPicWrap}
            data-category={props.label}
          >
            <img
              className={cardStyles.cardsItemImg}
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className={cardStyles.cardsItemInfo}>
            <h4 className={cardStyles.cardsItemText}>{props.date}</h4>
            <p className={cardStyles.cardsItemText}>{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  )
}

export default cardItem
