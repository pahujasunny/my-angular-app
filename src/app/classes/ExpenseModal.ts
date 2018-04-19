export class ExpenseModal {

    constructor(
        public id: number,
        public category: string,
        public amount: number,
        public details?: string
    ) {}

}
