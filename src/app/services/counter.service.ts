export class CounterService {

    activeNumber: number = 0;
    inactiveNumber: number = 0;

    setActiveNumber(n: number) {
        this.activeNumber = n;
        console.log('Active users : ' + this.activeNumber)
    }

    setInactiveNumber(n: number) {
        this.inactiveNumber = n;
        console.log('Inactive users : ' + this.inactiveNumber)
    }

}