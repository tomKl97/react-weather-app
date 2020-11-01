//pridobitev lokacij
import axios from 'axios';
export function historyLogSave(parameter) {
    axios.post('http://localhost:3333/locations', {
        address: parameter
    }).then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
export async function getAllLocations(){
    let response;
    response = await axios.get('http://localhost:3333/locations');
    return response.data;
}
