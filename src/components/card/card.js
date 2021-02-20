import React from "react"
import Styles from "./card.module.scss"

const EmpCard = () => {
  return (
    <div className={Styles.frame}>
      <p className={Styles.name}>Ashish Thakur</p>
      <p className={Styles.disc}>lorem ipsum dolor sit amet, consectetur</p>
      <div className={Styles.picFrame}>
        <view className={Styles.pic}></view>
      </div>
    </div>
  )
}

export default EmpCard
