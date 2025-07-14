
export class Details {
    async getGameById(gid){
         const options = {
	     method: 'GET',
	     headers: {
		'x-rapidapi-key': '3461176476msha85242f83f4528ep14b1dejsn880ecaa2267b',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	    }
        };
        let res=await fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id="+gid,options);
        let data= await res.json();
        return data;
       
    }
}