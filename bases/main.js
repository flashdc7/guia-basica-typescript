"use strict";
(() => {
    class Avenger {
        static getAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (- ${this.team} -)`;
        }
    }
    const avenger = new Avenger('antman', 'capitan');
    console.log(avenger.bio());
    console.log(Avenger.getAge());
})();
//# sourceMappingURL=main.js.map