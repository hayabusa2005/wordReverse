import { LightningElement } from 'lwc';

export default class Reverse extends LightningElement {
    originalWord;
    reversedWord;
    reverseWord(event){
        this.originalWord = event.target.value;
        var splitString = this.originalWord.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        this.reversedWord = joinArray;
        return joinArray; 
    }
}