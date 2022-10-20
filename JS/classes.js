class Requests{
    static baseUrl = "http://www.apielsa.somee.com"

    static get(url,data={}){
        return fetch(this.baseUrl+url+"?"+ $.param(data))
    }

    static async post(url, data={}, headers={}){
        console.log(data)
        let r = await fetch(this.baseUrl+url,{
            method: 'POST',
            // mode: 'no-cors',
            redirect: 'follow',
            headers: headers,
            body: JSON.stringify(data)
        })
        return r.json()
    }

    static async patch(url, data={}){
        return await fetch(this.baseUrl+url+"?"+ $.param(data),{
            method: 'PATCH'
        })
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