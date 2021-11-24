let token = ` 7081635c35517c6589a29a5cb16fff2ff9def50472d24554`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory75-nico.herokuapp.com/`,{
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {} ) => {
        const response = await fetch(`https://drone-inventory75-nico.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,',
                'x-access-token':` Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create a new drone')
        }
        return await response.json() 
    },

    update: async (id:string, data: any = {} ) => {
        const response = await fetch(`https://drone-inventory75-nico.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,',
                'x-access-token':` Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update a new drone')
        }
        return await response.json() 
    },

    delete: async (id:string ) => {
        const response = await fetch(`https://drone-inventory75-nico.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,',
                'x-access-token':` Bearer ${token}`
            },
           
        });
        if(!response.ok){
            throw new Error('Failed to delete a new drone')
        }
        return await response.json() 
    }
   
}