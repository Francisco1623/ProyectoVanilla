
const url = 'http://localhost:3000/players';

export const getPlayers = async() => {
    const response = await fetch(url);
    const players = await response.json();
    let playersRows = '<tbody>';
    players.forEach(player => {
         
        // const tr = document.createElement('tr');
        // const tdName = document.createElement('td');
        // const tdAge = document.createElement('td');
        // const tdNationality = document.createElement('td');
        // const tdHeight = document.createElement('td');
        // const tdPosition = document.createElement('td');

        // tdName.textContent=player.name;
        // tdAge.textContent=player.age;
        // tdNationality.textContent=player.nationality;
        // tdHeight.textContent=player.height;
        // tdPosition.textContent=player.position;

        // tBody.appendChild(tr);
        // tr.appendChild(tdName);
        // tr.appendChild(tdAge);
        // tr.appendChild(tdNationality);
        // tr.appendChild(tdHeight);
        // tr.appendChild(tdPosition);

        let row = `<tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>${player.nationality}</td>
        <td><a class='btn btn-secondary' href='/#/player/${player.id}'>Ver Jugador</a></td>
        </tr>
        `;
        playersRows+= row;
    });
    playersRows+='</tbody>';
    return playersRows;

    

    
}

