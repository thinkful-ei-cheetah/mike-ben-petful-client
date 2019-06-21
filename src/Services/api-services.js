import config from '../config'

const ApiService = {

    getCats() {
        return fetch(`${config.REACT_APP_API_BASE}/cats`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getDogs() {
        console.log('getting dogs')
        return fetch(`${config.REACT_APP_API_BASE}/dogs`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
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

    getCat(catId) {
        return fetch(`${config.REACT_APP_API_BASE}/cats/${catId}`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getDog(dogId) {
        return fetch(`${config.REACT_APP_API_BASE}/dogs/${dogId}`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    
    getPerson(personId) {
        return fetch(`${config.REACT_APP_API_BASE}/people/${personId}`, {
            headers: {
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default ApiService;