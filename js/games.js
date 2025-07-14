import UI from "./UI.js";
let ui=new UI();
export class Games {
    async getGames(option){
        let options = {
	    method: 'GET',
	    headers: {
		'x-rapidapi-key': '3461176476msha85242f83f4528ep14b1dejsn880ecaa2267b',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
    };
        let res= await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category='+ option,options);
        res= await res.json();
        ui.displayGames(res);
        

    } 
}