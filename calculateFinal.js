function calculateFinalScore(input){
 if (typeof input !== "object" || input === null || Array.isArray(input)) {
        return "Invalid Input";
    };

    const { name, testScore, schoolGrade, isFFamily } = input;

     if (typeof name !== "string" ||
        typeof testScore !== "number" || testScore > 50 ||
        typeof schoolGrade !== "number" || schoolGrade > 30 ||
        typeof isFFamily !== "boolean") {
        return "Invalid Input";
    };

     let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

     return finalScore >= 80;

}


const result = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  });
console.log('result:', result)
