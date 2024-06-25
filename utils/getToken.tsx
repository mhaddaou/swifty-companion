import axios from "axios"

const getToken = async () =>{
    
    const res =  await axios.post("https://api.intra.42.fr/v2/oauth/token",{
        grant_type: "client_credentials",
        client_id: "u-s4t2ud-e1309259b626a6762d007dbdfe04fe70c05d5dc28be1bcc0706ecf9f48380657",
        client_secret: "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",
    })
    

    return await res.data.access_token;
    
}

export default getToken;












