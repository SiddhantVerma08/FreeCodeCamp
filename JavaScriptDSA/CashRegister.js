function checkCashRegister(price, cash, cid) {
    const UNIT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let totalCid = 0;
    for (let element of cid) {
        totalCid += element[1];
    }
    totalCid = totalCid.toFixed(2);
    let changeToGive = cash - price;
    const changeArray = [];
    if (changeToGive > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (changeToGive.toFixed(2) === totalCid) {
        return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();
        for (let elem of cid) {
            let temp = [elem[0], 0];
            while (changeToGive >= UNIT[elem[0]] && elem[1] > 0) {
                temp[1] += UNIT[elem[0]];
                elem[1] -= UNIT[elem[0]];
                changeToGive -= UNIT[elem[0]];
                changeToGive = changeToGive.toFixed(2);
            }
            if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
    }
    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray };

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);