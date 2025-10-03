import { delay, scale } from "framer-motion";

export const ScrollUp = {
    initial :{opacity: 0, y:20}, 
    whileInView:{opacity:1, y:0}, 
    transition:{duration: 1},
}
export const ScrollUpNext = {
    initial :{opacity: 0, y:20}, 
    whileInView:{opacity:1, y:0}, 
    transition:{duration: 1, delay: 0.4},
}
export const CardHover = {
    whileHover : {scale : 1.02},
    transition : {duration : 0.2}
    
}
export const CardClicks = {
    whileTap : {scale: 0.95}
}
export const scrollLeft ={
    initial : {opacity : 0, x:40},
    whileInView : {opacity: 1, x:0},
    transition : {duration : 1, delay : 0.3}
}
export const scrollRight ={
    initial : {opacity : 0, x:-40},
    whileInView : {opacity: 1, x:0},
    transition : {duration : 1, delay : 0.3}
}
