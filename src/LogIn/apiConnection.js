import { FETCH_POST } from './../Role/constant'

export function submitLogin(login) { 
    console.log(login, "payload")
    // return fetch("https://www.autoncel   l.com/api/login",

        return fetch("http://192.168.31.50:8000/api/login",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin':'*',
                'mode': 'no-cors'
              },
              body: JSON.stringify({ email:login.email,
                password:login.password})
            

        }).then(res=>res.json())
        .then(res => {
            console.log('data is set in localstorage',res);
            localStorage.setItem('token',res.data.token); console.log("response----", res.data)
            return res.data;
        }

        );

}

export function fetchpost(){
    return function(dispatch){
         fetch("http://192.168.31.50:8000/api/app-policy/policy")
         .then(res => res.json())
         .then ( posts => dispatch({
            type: FETCH_POST,
            payload: posts
        }));
        }
    }

    export function createPost(post){
        
        return fetch("http://192.168.31.50:8000/api/userRoles/role/add",
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin':'*',
                'mode': 'no-cors'
              },
              body: JSON.stringify({ RoleName: post.RoleName,
                RoleDescription: post.RoleDescription})
            

        }).then(res=>res.json())
        .then(res => {
            return res.data;
        }

        );

    }

export function UpdateData(data){
    return fetch("http://192.168.31.50:8000/api/",// add complete api
    {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin':'*',
            'mode': 'no-cors'
          },
          body: JSON.stringify({ data: data})
          })
}