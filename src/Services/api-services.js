import config from '../config'

const ApiService = {

    getCats() {
        return fetch(`${config.REACT_APP_API_BASE}/cats`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .catch(err => console.log(err))
    },

    getDogs() {
        console.log('getting dogs')
        return fetch(`${config.REACT_APP_API_BASE}/dogs`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .catch(err => console.log(err))
    },

    getPeople() {
        return fetch(`${config.REACT_APP_API_BASE}/people`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    adoptCat() {
        return fetch(`${config.REACT_APP_API_BASE}/cats/delete`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    adoptDog() {
        return fetch(`${config.REACT_APP_API_BASE}/dogs/delete`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    personAdopted() {
        return fetch(`${config.REACT_APP_API_BASE}/people/delete`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    personAdd() {
        return fetch(`${config.REACT_APP_API_BASE}/people/add`, {
            method: 'POST',
            mode: 'cors',
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
    
}

export default ApiService;