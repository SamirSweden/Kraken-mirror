
const API_URL = process.env.API_URL;


type RequestOptions = RequestInit & {
    json?:  unknown;
}

export async function api <T = unknown>
(
    endpoint: string,
    options: RequestOptions = {}
): Promise<T>{
    const {json,headers,...rest} = options;

    const res = await fetch(`${API_URL}${endpoint}`, {
        ...rest,
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: json ? JSON.stringify(json) : undefined
    })

    if(!res.ok)
    {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.detail || res.statusText || "Request failed.");
    }

    return res.json()
}



export const authApi = {
    login: (username: string,password: string)=>
        api("/login",{
            method:"POST",
            json: {
                username,
                password
            }
        }),
    logout: () => api("/logout", {method:"POST"}),

    me: () => api("/me")
}


