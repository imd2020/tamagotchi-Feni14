

export default class Character {
    constructor(sanrioCharacter) {
        this.sanrioCharacter = sanrioCharacter;
    }

    display(){
        image(this.sanrioCharacter, 130, 200);
    }
}