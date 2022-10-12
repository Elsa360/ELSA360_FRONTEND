class Requests{
    constructor(){
        this.baseUrl = "http://www.apielsa.somee.com"
    }

    static get(url){
        return fetch(this.baseUrl+url)
    }

    static async post(url, data={}, headers={}){
        let r = await fetch(this.baseUrl+url,{
            method: 'POST',
            mode: 'no-cors',
            headers: headers,
            body: JSON.stringify(data)
        })

        return r.json()
    }

    static async patch(url, data={}){
        let r = await fetch(this.baseUrl+url,{
            method: 'PATCH',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return r.json()
    }

    static async put(url, data={}){
        let r = await fetch(this.baseUrl+url,{
            method: 'PUT',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return r.json()
    }
}

export {Requests}