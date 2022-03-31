import axios from 'axios'; 

export const api = axios.create({ 
    baseURL: "https://conectapolaris.herokuapp.com"
    
})

export const cadastroUsuario = async (url: any, dados: any, setDados: any) => { 
    const resposta = await api.post(url, dados) 
    setDados(resposta.data) 
}

export const login = async (url: any, dados: any, setDados: any) => { 
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token) //aqui acesso unicamente o atributo token do arquivo Login.tsx
}

export const busca = async(url: any, setDados: any, header: any) =>  { 
    const resposta = await api.get(url, header)
    setDados(resposta.data) // a resposta é um obj que tem dentro varios objs. Nesse caso vamos acessar os atributos da model Tema (id e descrição)
}