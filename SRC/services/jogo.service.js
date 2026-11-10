import{jogorepository} from " / jogo.repository.js" 

async getAll(){ 
    const jogo = await jogorepository.getAll();
    return jogo 
}