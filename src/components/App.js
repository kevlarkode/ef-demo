import React from 'react'
import './App.css'
import UserStatus from './UserStatus.js'

function App() {

    // JSON data for Dummy users
    const users = {
        "user1": {
            "userId": 1,
            "name": "John Cena",
            "email": "johncena@gmail.com",
            "stepsWalked": 3500,
            "stepsTarget": 5000,
            "performedDate": "15 Jul",
            "scheduledDate": "25 Aug",
            "calorieIntake": 2000,
            "calorieTarget": 3500,
            "proteinConsumed": 1000,
            "proteinTarget": 1200,
            "carbConsumed": 4000,
            "carbTarget": 5300,
            "fatConsumed": 1000,
            "fatTarget": 2000,
            "feedback": true
        },
        "user2": {
            "userId": 2,
            "name": "The Rock",
            "email": "therockn@gmail.com",
            "stepsWalked": 2890,
            "stepsTarget": 6000,
            "performedDate": "20 Jul",
            "scheduledDate": "26 Jul",
            "calorieIntake": 1560,
            "calorieTarget": 4500,
            "proteinConsumed": 1380,
            "proteinTarget": 2450,
            "carbConsumed": 6000,
            "carbTarget": 7950,
            "fatConsumed": 4560,
            "fatTarget": 5000,
            "feedback": true
        },
        "user3": {
            "userId": 3,
            "name": "Big Show",
            "email": "bigshow@gmail.com",
            "stepsWalked": 3450,
            "stepsTarget": 8000,
            "performedDate": "01 Jul",
            "scheduledDate": "28 Jul",
            "calorieIntake": 4500,
            "calorieTarget": 5600,
            "proteinConsumed": 500,
            "proteinTarget": 1500,
            "carbConsumed": 3400,
            "carbTarget": 5600,
            "fatConsumed": 1700,
            "fatTarget": 2000,
            "feedback": false
        }
    };

    return (
        <div>
            <div className="main">

                <div className="header">
                    <h1>Demo Dashboard</h1>
                    
                    <div className="header-info-div">
                        <div className='header-items' id="steps-header"> <img src="./assets/steps.svg" alt="Steps" width="20px" /> Steps</div>
                        <div className='header-items' id="workout-header"> <img src="./assets/workout.svg" alt="Workout" width="20px" /> Workout</div>
                        <div className='header-items' id="nutrition-header"> <img src="./assets/nutrition.svg" alt="Nutrition" width="18px" /> Nutrition</div>
                    </div>

                    <div className="user-info-rows">
                        <UserStatus user={users.user1} />
                        <UserStatus user={users.user2} />
                        <UserStatus user={users.user3} />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default App
