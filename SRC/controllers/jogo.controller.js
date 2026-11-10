import { error } from "node:console";
import { get } from "node:http"
import path from "node:path";
import {jogosServices} from "router/services/jogo"


async = getAll(req,res) {
    try{

    
    const jogo = await jogosServices.getAll();
    res.json(jogosServices);
    }
path(error)}