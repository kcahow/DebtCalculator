
export type DebtInfo = {
    principal: number;
    interest: number;
    desiredMonthsTopay ? : number;
    desiredMonthlyPayment ? : number;
    totalInterestPaid ? : string;
    totalPaymentsOverTime ? : number;
    totalPayment ? : string;
};