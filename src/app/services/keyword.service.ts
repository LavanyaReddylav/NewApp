import{Keyword}from '../models/keyword.model';


export class KeywordService{
    keywords:Keyword[];
    constructor(){
        this.keywords = [new Keyword(20,"gods")]; //passing the parameter 
    }
    addKeyword(searchWord:string){
        var keyword:Keyword= new Keyword(this.keywords.length+1,searchWord);
        this.keywords.push(keyword);//iterating the object
    }
    getKeywords(){
        return this.keywords;
    }
}