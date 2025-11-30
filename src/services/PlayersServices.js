
const url = 'https://692aa9fc7615a15ff24d4910.mockapi.io/api/players';

export const getPlayers = async() => {
    const response = await fetch(url);
    const players = await response.json();
    let playersRows = '<tbody>';
    players.forEach(player => {
         
       

        let row = `<tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>${player.nationality}</td>
        <td><a class='btn btn-secondary' href='/#/player/${player.id}'>Ver Jugador</a></td>
        <td><button class="btn-fav" value="${player.id}">❤️</button>
</td>

        </tr>
        `;
        playersRows+= row;
    });
    playersRows+='</tbody>';
    

   

    return playersRows;

    

    
}








