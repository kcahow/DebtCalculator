import { DebtInfo } from "./DebtType";
import { NumericFormat} from 'react-number-format';
import { useState } from 'react';

const CalcForm = ({calcAction}) => {
    const [principalAmt, setPrincipalAmt] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [radioValue, setRadioValue] = useState("");
    const [desiredPmt, setDesiredPmt] = useState("");
    const [monthsToPay, setmonthsToPay] = useState("");

    const onOptionChange = (e) => {
        setRadioValue(e.target.value)
    }    

    const info:DebtInfo = {
       principal:Number(principalAmt.replace("$","").replace(",","")),
       interest:Number(interestRate.replace("%","")),
       desiredMonthlyPayment: radioValue === "payment" ? Number(desiredPmt) : 0,
       desiredMonthsTopay: radioValue === "months" ? Number(monthsToPay) : 0,
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        calcAction(info);
    }

    return(
        <>
        <div>
            <div id="inputs">
                <h2>Debt Repayment Calculator</h2>  
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <label>Balance Owed</label>
                    </div>
                    <div id="principalDiv" className="container">
                        <NumericFormat name="principal" 
                            placeholder='$0' 
                            className="input"
                            thousandSeparator 
                            prefix={'$'} 
                            maxLength={9} 
                            onChange={(e)=>setPrincipalAmt(e.target.value)}
                            value={principalAmt}                        
                        />
                    </div>
                    <div className="title">
                        <label>Interest Rate</label>
                    </div>
                    <div id="interestDiv" className="container">
                        <NumericFormat name="Interest" 
                            placeholder='0.00%' 
                            className="input"
                            suffix={'%'} 
                            fixedDecimalScale={true}
                            maxLength={6} 
                            onChange={(e)=>setInterestRate(e.target.value)}
                            value={interestRate}                        
                        />
                    </div>
                    <div>
                        <label className="titlesmall">Input only one of the following:</label>
                    </div>
                    <div className="grid-container-element">
                        <div className="grid-child-element" id="inputs">
                            <span className="smallText">Expected monthly payment</span>
                            <br />
                            <input
                                    type="radio"
                                    name="calculateBy"
                                    value="payment"
                                    id="payment"
                                    className="radio"
                                    checked={radioValue === "payment"}
                                    onChange={onOptionChange}
                                />
                                <br />
                                <NumericFormat name="paymentAmount" 
                                    placeholder='$0' 
                                    className="inputSmall"
                                    maxLength={6} 
                                    onChange={(e)=>setDesiredPmt(e.target.value)}
                                    value={desiredPmt}
                                    disabled={radioValue!="payment"} 
                                />
                        </div>
                        <div className="grid-child-element" id="inputs">
                            <span className="smallText">Desired months to pay off</span>
                            <br />
                            <input
                                    type="radio"
                                    name="calculateBy"
                                    value="months"
                                    className="radio"
                                    id="months"
                                    checked={radioValue === "months"}
                                    onChange={onOptionChange}
                                />
                                <br />

                                <NumericFormat name="numberOfMonths" 
                                    placeholder='0' 
                                    className="inputSmall"
                                    maxLength={3} 
                                    onChange={(e)=>setmonthsToPay(e.target.value)}
                                    value={monthsToPay}
                                    disabled={radioValue!="months"} 
                                />
                        </div>                        
                    </div>

                    <div className="spacer">
                        <button>Calculate</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export {
    CalcForm
}