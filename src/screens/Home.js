import '../css/homestyle.css'

import Left from './components/home/Left'
import Right from './components/home/Right'

export default function Home(){
    return(
        <div className="container">
            <Left />
            <Right />
        </div>
    )
}