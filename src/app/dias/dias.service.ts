import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DiasService {

  constructor(private http: Http) { }

  getCor(){
    var cores = ["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"];

    return cores;
  }

  getDias() {
    // var dias = "";
    // var url = 'http://jc.ne10.uol.com.br/blogs/estaticos/audiencia.json';

    // return this.http.get(url).map((teste => console.log(teste))

    var dias = [
      {dia: 1,frase: "Não interrompa a fala de uma mulher, escute o que ela tem a dizer.",background: "#B43E30", cor:"#4BC2CF"},
      {dia: 2,frase: "Se você for acusad@ de machista, não retruque, reflita.",background: "#4BC2CF", cor:"#C67758"},
      {dia: 3,frase: "Ligue para uma amiga e pergunte 'você já sobreu assédio na rua?'. Escute-a com atenção.",background: "#C19F68",cor:"#AD2D1F"},
      {dia: 4,frase: "Se perceber que está julgando uma mulher pela roupa que ela usa, pergunte a si mesmo/a: 'e se fosse eu?'",background: "#C9C6AD", cor:"#3B3855"},
      {dia: 5,frase: "Compartilhe as tarefas domésticas e o cuidado dos filhos/as",background: "#395787", cor:"#CE9F81"},
      {dia: 6,frase: "A partir de hoje abandone as expressões 'comporte-se como uma mocinha' ou 'seja homem'.",background: "#E5D657", cor:"#4400B1"},
      {dia: 7,frase: "Compare e reflita: no seu trabalho, escola ou família, quantos homens e quantas mulheres ocupam cargos de chefia?",background: "#644069", cor:"#9BBF96"},
      {dia: 8,frase: "Anote e compartilhe ao longo do dia quantas vezes você viu uma propaganda que objetificou uma mulher.",background: "#515D61", cor:"#AB9F9A"},
      {dia: 9,frase: "Pergunte a uma mulher da sua convivência como ela se sente usando transporte público e caminhando sozinha pela rua durante a noite.",background: "#C5CDD7", cor:"#6F2D69"},
      {dia: 10,frase: "Pesquise sobre mulheres que foram protagonistas na busca e conquista de seu direitos. Compartilhe sua historia favorita.",background: "#EACC5D", cor:"#4F5B5F"},
      {dia: 11,frase: "Você já julgou uma mulher dizendo: 'engravidou porque quis?' A partir de hoje divida a responsabilidade da prevenção entre o casal.",background: "#374668", cor:"#C8BA97"},
      {dia: 12,frase: "Faça uma lista dos livros escritos por mulheres que você já leu. Peça sugestões para aumentar seu repertório e compartilhe-as.",background: "#994022", cor:"#CC7254"},
      {dia: 13,frase: "Nunca questione: NÃO é NÃO! Denuncie se presenciar assédio sexual, onde quer que seja.",background: "#323B4F", cor:"#C67758"},
      {dia: 14,frase: "Converse com uma ou mais mulheres sobre as profissões que elas gostariam de seguir, e, se essa não for a profissão que elas exercem, pergunte o motivo.",background: "#CEA07B", cor:"#546C82"},
      {dia: 15,frase: "Ressignifique: um beijo entre dois homens não é uma ofensa. Um beijo entre duas mulheres não é um convite.",background: "#4BC2CF", cor:"#B43C2E"},
      {dia: 16,frase: "Quantas vezes você já presenciou violência doméstica, na sua casa, no seu prédio ou na sua vizinhança? A partir de hoje, comprometa-se a denunciar essa prática.",background: "#8D6A37", cor:"#AFB512"},
      {dia: 17,frase: "Ao elogiar uma menina, fale sobre suas habilidades e não apenas sobre sua aparência.",background: "#1633A2", cor:"#EACC5D"},
      {dia: 18,frase: "Toda vez que ouvir alguém dizer: 'Só podia ser mulher!', ligue para uma amiga e pergunte como ela se sente quando escuta essa frase.",background: "#9BBF96", cor:"#644069"},
      {dia: 19,frase: "Existe algo que você gostaria de fazer, mas nunca fez por considerar 'coisa de mulher' ou 'coisa de homem'? É hora de experimentar compartilhar a sensação.",background: "#505C60", cor:"#AFB512"},
      {dia: 20,frase: "Relembre ditados populares ou expressões comuns que se referem à mulher de forma perjorativa. Comprometa-se a nunca mais repeti-los.",background: "#8C9EB0", cor:"#73614F"},
      {dia: 21,frase: "Experimente adotar atitudes colaborativas ao invés de competitivas entre mulheres.",background: "#A1C306", cor:"#FFFEFE"},
      {dia: 22,frase: "Quando você presenciar olhares e abordagens invasivas a uma mulher, repreenda esses comportamentos.",background: "#374668", cor:"#CEBF99"},
      {dia: 23,frase: "procure saber qual a política de enfretamento ao assédio sexual e moral na empresa que vocÇe trabalha ou onde você estuda.",background: "#4BC2CF", cor:"#B43D2F"},
      {dia: 24,frase: "Nem 'louca', nem 'histérica', muito menos 'irracional': não use mais esses termos para desqualificar a fala de uma mulher.",background: "#B43E30", cor:"#AFA915"},
      {dia: 25,frase: "Respeitar as mulheres não é ser 'pau-mandado'. Tenha orgulho e valorize essa postura.",background: "#CEA07B", cor:"#315F84"},
      {dia: 26,frase: "Somos 85% de mulheres nesta campanha - convide um homem para se juntar ao desafio.",background: "#323B4F", cor:"#B43E30"},
      {dia: 27,frase: "Procure saber quais as candidatas a vereadoras e prefeitas em 2016.",background: "#C67758", cor:"#934425"},
      {dia: 28,frase: "A 'novinha' é uma criança: não hipersexualize ou erotive meninas.",background: "#C19F68", cor:"#BA2E2C"},
      {dia: 29,frase: "Pergunte a uma mulher uma situação que ela se sentiu #DonaDeSi. Compartilhe hostórias inspiradoras.",background: "#3F00A1", cor:"#ECD850"},
      {dia: 30,frase: "Comprometa-se a nunca mais usar expressões machistas na presença de uma criança.",background: "#8DC796", cor:"#3B3B4E"},
      {dia: 31,frase: "Não use a expressão 'mulata tipo exportação' para elogiar a beleza de uma mulher negra.",background: "#505C60", cor:"#EE9C1F"},
      {dia: 32,frase: "Chame uma mulher negra de negra, isso não é uma ofensa.",background: "#EE9C1F", cor:"#56071F"},
      {dia: 33,frase: "Volte para o dasafio 1 e repita até tirar o machismo da sua vida.",background: "#644069", cor:"#9BBF96"} 
    ];

    return dias;
  }


}
