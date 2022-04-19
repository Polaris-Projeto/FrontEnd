import Tema from "./Tema" //importo o caminho da model Tema
import User from "./User" //importa o caminho da model User

interface Postagem { 
    id: number
    titulo: string
    texto: string
    data: string
    tema?: Tema | null // aqui passo a estrutura do campo Tema, pois ela é mais complexa, visto que tema esta vinculado à postagem
    usuario: User | null
}

export default Postagem;