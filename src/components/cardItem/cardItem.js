import React from "react"
import { Link } from "gatsby"
import * as cardStyles from "./cardItem.module.scss"

const CardItem = props => {
  return (
    <div className={cardStyles.wrapperDiv}>
      <li>
        <Link className={cardStyles.cardsItemLink} to={props.path}>
          <figure
            className={cardStyles.cardsItemPicWrap}
            data-category={props.label}
          >
            <img
              className={cardStyles.cardsItemImg}
              alt={props.label}
              src={props.src}
            />
          </figure>
          <div className={cardStyles.cardsItemInfo}>
            <h4 className={cardStyles.cardsItemText}>{props.date}</h4>
            <p className={cardStyles.cardsItemText}>{props.text}</p>
          </div>
        </Link>
      </li>
    </div>
  )
}

export default CardItem
