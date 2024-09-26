import { DebtInfo } from "./DebtType";

const Results = ({info}:{info:DebtInfo}) => {
    
    if(info.desiredMonthsTopay != undefined){
        // Calculate interest per month
        const interest = (info.interest * 0.01) / 12;
        const amount = info.principal;
        
        const p = Math.pow(1 + interest, info.desiredMonthsTopay);
        const monthly = ((amount * p * interest) / (p - 1)).toFixed(2);

        const totalInterest = Number((Number(monthly) * info.desiredMonthsTopay)) - info.principal;
        console.log(totalInterest.toFixed(2))

        info.totalInterestPaid = "$"+totalInterest.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        info.totalPayment = "$"+monthly.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
 

    return(
        <>
        <div className="resultsDiv">
            <h2>Your estimated monthly payment</h2>
            <h2>{info.totalPayment}</h2>
            <label>Months to pay off</label>
            <br />
            <label className="resultsValue">{info.desiredMonthsTopay} months</label>
            <p>
                <label>Total principal paid</label>
                <br />
                <label className="resultsValue">{info.principal.toLocaleString("en-us", {style: "currency", currency: "USD"})}</label>
            </p>
            <p>
                <label>Total interest paid</label>
                <br />
                <label className="resultsValue">{info.totalInterestPaid}</label>
            </p>            

            <p>
                <label>Total interest paid</label>
                <br />
                <label className="resultsValue">{info.interest.toFixed(2)}%</label>
            </p>  
        </div>
        </>
    );
};





export{
    Results
}