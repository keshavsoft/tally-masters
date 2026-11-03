function isPlainObject(value) {
    return value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype;
};

const startFunc = (inCollection) => {
    const alteredArray = inCollection.map(element => {
        let loopInsideObject = {};

        for (const [key, value] of Object.entries(element)) {
            switch (key) {
                case "metadata":
                    loopInsideObject.tallyName = value?.name;
                    loopInsideObject.tallyType = value?.type;
                    loopInsideObject.tallyReservedname = value?.reservedname;
                    
                    break;

                default:
                    if (isPlainObject(value)) {
                        switch (value?.type) {
                            case "String":
                                loopInsideObject[key] = value?.value;
                                break;
                            case "Amount":
                                loopInsideObject[key] = parseFloat(value?.value);
                                break;
                            case "Logical":
                                loopInsideObject[key] = value?.value;
                                break;

                            default:
                                break;
                        };
                    };
                    break;
            };


        };

        return loopInsideObject;
    });

    return alteredArray;


    // parent: { type: 'String', value: 'Investments' },
    // closingbalance: { type: 'Amount', value: '-250000.00' },
    // onaccountvalue: { type: 'Amount', value: '-250000.00' },
    // tbalopening: { type: 'Amount', value: '-250000.00' },
    // closingonacctvalue: { type: 'Amount', value: '-250000.00' },
    // closingdronacctvalue: { type: 'Logical', value: true },
    // ledopeningbalance: { type: 'Amount', value: '-250000.00' },


};

export default startFunc;
