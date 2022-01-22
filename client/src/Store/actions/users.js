export function loginWithNormalAccount(payload){
  return async function(dispatch){
    try{
        payload["accountType"] = "internal";
        const res = await axios.post(`${SERVER}/user/login`, payload);
        let data = {
            lastUpdate: 0,
            isVerified: false,
            user: {
                ...res.data
            },
            error: false
        }
        localStorage.setItem("user", JSON.stringify(data.user));

        return dispatch({
            type: LOGIN,
            payload: {
                ...data,
            }
        });
    }catch(e){
        return dispatch({
            type: LOGIN,
            payload: {
                lastUpdate: 0,
                isVerified: false,
                user: {idUser: null},
                error: true
            }
        });
    }
  }
}