function divideNumbers(a, b) {
    try {
        const result = a / b;
        return result;
    } catch (error) {
        if (error instanceof ZeroDivisionError) {
            console.log("Error: Cannot divide by zero.");
            return null;
        } else {
            throw error;
        }
    }
}

const result = divideNumbers(10, 2);

if (result !== null) {
    console.log(`The result is: ${result}`);
}
