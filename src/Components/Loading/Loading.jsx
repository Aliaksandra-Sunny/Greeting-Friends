import React from 'react';
import style from './Loading.module.css';


class Loading extends React.Component {
    render = () => {
        return (
            <div className={style.loading}>
                <div className={style.windows8}>
                    <div className={style.wBall} id={style.wBall_1}>
                        <div className={style.wInnerBall}>
                        </div>
                    </div>
                    <div className={style.wBall} id={style.wBall_2}>
                        <div className={style.wInnerBall}>
                        </div>
                    </div>
                    <div className={style.wBall} id={style.wBall_3}>
                        <div className={style.wInnerBall}>
                        </div>
                    </div>
                    <div className={style.wBall} id={style.wBall_4}>
                        <div className={style.wInnerBall}>
                        </div>
                    </div>
                    <div className={style.wBall} id={style.wBall_5}>
                        <div className={style.wInnerBall}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
