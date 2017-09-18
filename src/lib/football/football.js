import axios from 'axios';

class FootballAPI {
	constructor() {
		this.BASE_URL = 'http://api.football-data.org/v1';
		this.API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
		this.http = axios;
	}

	sendRequest(method, url, data, headers) {
		const cloneHeaders = {
			...headers,
			'X-Auth-Token': this.API_KEY,
		}
		
		return axios({
			method,
			url: `${this.BASE_URL}/${url}`,
			data,
			headers: cloneHeaders,
		});
	}

	async getCompeitions() {
		const request = await this.sendRequest('GET', 'competitions');

		if (request.status === 200) {
			return request.data;
		} 

		return null;
	}

	async getCompetitionTable(id) {
		const request = await this.sendRequest('GET', `competitions/${id}/leagueTable`);

		if (request.status === 200) {
			return request.data;
		}

		return null;
	}

	async getTeam(id) {
		return Promise.all([
			this.sendRequest('GET', `teams/${id}`),
			this.sendRequest('GET', `teams/${id}/fixtures`),
			this.sendRequest('GET', `teams/${id}/players`)
		]).then(
			responses => this.processTeamResponse(responses), 
			error => error
		);
	}

	processTeamResponse(team) {
		const data = team.map(team => team.data);
		return {
			...data[0],
			fixtures: data[1],
			players: data[2],
		}
	}
}

export default new FootballAPI();
