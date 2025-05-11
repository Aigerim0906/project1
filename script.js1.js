document.getElementById("calcBtn").addEventListener("click", calculatePrice);

function calculatePrice() {
    let basePrice = 100;

    const education = parseFloat(document.getElementById("education").value);
    const netWorth = parseFloat(document.getElementById("netWorth").value);
    const caste = parseFloat(document.getElementById("caste").value);
    const age = parseFloat(document.querySelector('input[name="age"]:checked').value);

    let skillSum = 0;
    document.querySelectorAll(".skill:checked").forEach(el => {
        skillSum += parseFloat(el.value);
    });

    let reputationMultiplier = 1;
    let gossipPenalty = 0;

    document.querySelectorAll(".reputation:checked").forEach(rep => {
        const val = parseFloat(rep.value);
        if (val < 1) {
            if (val < 0) {
                gossipPenalty += val;
            } else {
                reputationMultiplier *= val;
            }
        }
    });

    let finalPrice = basePrice;
    finalPrice *= education;
    finalPrice *= netWorth;
    finalPrice += caste;
    finalPrice += skillSum;
    finalPrice *= age;
    finalPrice *= reputationMultiplier;
    finalPrice += gossipPenalty;

    const result = document.getElementById("result");
    result.textContent = `Dowry Price: $${finalPrice.toFixed(2)}`;

    if (finalPrice < 100) {
        result.style.color = "red";
    } else if (finalPrice > 250) {
        result.style.color = "green";
    } else {
        result.style.color = "black";
    }
}
