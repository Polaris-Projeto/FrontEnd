import Tema from "./Tema" //importo o caminho da model Tema

interface Postagem { 
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Tema | null // aqui passo a estrutura do campo Tema, pois ela é mais complexa, visto que tema esta vinculado à postagem

}

export default Postagem;