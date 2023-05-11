import React, { useState } from "react"

const totalMeal = React.createContext({
    total:0,
    changeTotal:()=>{},
    removeTotal:()=>{},
})


export const AddedMealDataManager = (props)=>{
    const [total, setTotal] = useState(0)

    const onAddTotal = (input)=>{
        setTotal((prevValue)=>{return prevValue >= 0 ?prevValue += Number(input):0})
    }
    const onRemoveTotal = (input)=>{
        setTotal((prevValue)=>{return prevValue > 0 ? prevValue -= input:0})
    }
    return(
      <totalMeal.Provider value={{total:total, changeTotal:onAddTotal, removeTotal:onRemoveTotal}}>
        {props.children}
      </totalMeal.Provider>
    )
  }
  
export default totalMeal