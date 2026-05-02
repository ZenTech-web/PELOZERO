import logo from "../assets/ImgBanner/elegancia.png";
import Logosimbolo from "../assets/Logos/LogoSimbolo.png";


const Data = [

    {
        Banner: [
            {src: logo , alt:"Logo elegancia do Pelo Zero"}
        ]
    },

    {
        Service: [
            {simbulo: Logosimbolo , tema:"Depilação Feminina", descricao:"Especialistas em depilação para todos os tipos de pele, com cera quente e fria. Resultado duradouro e pele lisa."},
            {simbulo: Logosimbolo , tema:"Design de Sobrancelhas", descricao:"Modelagem personalizada que valoriza o olhar e realça a beleza única de cada cliente."},
            {simbulo: Logosimbolo , tema:"Micropigmentação", descricao:"Técnica semipermanente realizada pela micropigmentadora Gerusa Cordeiro. Sobrancelhas perfeitas todos os dias."},
            {simbulo: Logosimbolo , tema:"Henna", descricao:"Coloração natural de sobrancelhas com henna de alta qualidade e acabamento sofisticado."},
            {simbulo: Logosimbolo , tema:"Limpeza de Pele", descricao:"Tratamento facial completo para pele limpa, saudável e radiante com produtos selecionados."},  
        ]
    },

    {
        Prices: [

           {
        tema: "Estética Facial",
        simbulo: Logosimbolo, // Use o caminho da sua imagem
        servicos: [
            { nome: "Limpeza de pele", valor: "R$ 60,00" },
            { nome: "Rosto completo", valor: "R$ 23,00" },
            { nome: "Design de sobrancelhas", valor: "R$ 17,00" },
            { nome: "Sobrancelhas de rena", valor: "R$ 25,00" }
        ]
    },
    {
        tema: "Depilação — Rosto",
        simbulo: Logosimbolo,
        servicos: [
            { nome: "Buço", valor: "R$ 8,00" },
            { nome: "Nariz", valor: "R$ 8,00" },
            { nome: "Queixo", valor: "R$ 3,00" },
            { nome: "Queixo duplo", valor: "R$ 6,00" },
            { nome: "Face lateral", valor: "R$ 8,00" }
        ]
    },
    {
        tema: "Depilação — Corpo",
        simbulo: Logosimbolo,
        servicos: [
            { nome: "Axilas", valor: "R$ 15,00" },
            { nome: "Virilha", valor: "R$ 25/30/35" },
            { nome: "Perna completa", valor: "R$ 40,00" },
            { nome: "Meia perna", valor: "R$ 20,00" },
            { nome: "Bumbum", valor: "R$ 20,00" },
            { nome: "Barriga", valor: "R$ 22,00" },
            { nome: "Mamilo", valor: "R$ 10,00" },
            { nome: "Braço completo", valor: "R$ 22,00" },
            { nome: "Meio braço", valor: "R$ 15,00" },
            { nome: "Costa", valor: "R$ 23,00" },
            { nome: "Umbigo", valor: "R$ 6,00" }
        ]
    }
        ]
    }

]

export default Data