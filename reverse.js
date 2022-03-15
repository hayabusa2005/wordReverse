import { LightningElement } from 'lwc';

export default class Reverse extends LightningElement {
    originalWord;
    reversedWord;
    reverseWord(event){
        var splitString = this.originalWord.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        this.reversedWord = joinArray;
    }

    changeHandler(event){
        this.originalWord = event.target.value;
    }
}