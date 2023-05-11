import React,{useState} from "react";

const CartCtx = React.createContext({
    isClicked:false,
    show:()=>{},  
    hide:()=>{}
})

export const CartCtxManager = (props)=>{
    const [isClicked, setIsClicked] = useState(false)
    const onShow = ()=>{setIsClicked(true)}
    const onHide = ()=>{setIsClicked(false)}
    return(
        <CartCtx.Provider value={{isClicked:isClicked, show:onShow, hide:onHide} }>
            {props.children}
        </CartCtx.Provider>
    )
}

export default CartCtx