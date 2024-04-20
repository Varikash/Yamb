import React from "react";
import {TotalSpanProps} from "../../Types/Types.ts";
import Style from './TotalSpan.module.css'

const TotalSpan: React.FC<TotalSpanProps> = ({total}) => {
    return <span className={Style.totalSpan}>{total}</span>
}

export default TotalSpan