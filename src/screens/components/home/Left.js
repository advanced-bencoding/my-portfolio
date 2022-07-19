import pf from './placeholder.jpeg'

export default function Left(props){
    return(
        <div className='left'>
            <img src={pf} className='pf' />
            <div className='handleHolder'>
                {/* Make this part dynamic later*/}
                {/* Handle icon, Handle info */}
                <div className='handleIcon'>Phone</div>
                <div className='handleInfo'>767869</div>
            </div>
        </div>
    )
}