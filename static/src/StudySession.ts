
export class StudySession {
    private ttlStudyTime: number;
    private ttlBreakTime: number;

    constructor() {
        this.ttlStudyTime = 0;
        this.ttlBreakTime = 0;
    }

    study(): number {
        return this.ttlStudyTime;
    }

    break(breakTime:number): void {
        breakTime = breakTime / 5;
        this.ttlBreakTime += breakTime;
        console.log(this.ttlBreakTime);
    }
}
