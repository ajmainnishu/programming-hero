import React from 'react';
import Player from '../Player/Player';
import Teacher from '../Teacher/Teacher';





const User = (props) => {
    const {familiar} = props
    let greeting
    if (familiar) {
        greeting = <h5>How are you ?</h5>
    } else {
        greeting = <h5>Who are you ?</h5>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h2>Food</h2>
                {familiar ? <h5>Kacchi Biriyani</h5> : <h5>Taka nai</h5>}
            </div>
            <div>
                <h2>Profession</h2>
                {
                    familiar ? 
                    <div>
                        <h5>Web Developer</h5>
                        <h5>Salary: 300000$</h5>
                    </div>
                    :
                    <div>
                        <h5>Bekar Manus</h5>
                        <h5>Salary Nai</h5>
                    </div>
                }
            </div>
            <div>
                <h2>Connection</h2>
                {familiar && <div>Borolox Man</div>}
                {familiar && <Player></Player>}
            </div>
            <div>
                <h2>Other Connection</h2>
                {familiar || <div>Gorib Man</div>}
            </div>
            <div>
                <h2>Other</h2>
                {familiar ? <Player></Player> : <Teacher></Teacher>}
            </div>
        </div>
    );
};





export default User;