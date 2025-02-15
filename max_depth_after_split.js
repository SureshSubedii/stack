var maxDepthAfterSplit = function(seq) {
    let balance = 0;
    let answer = [];

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            answer.push(balance % 2);
            balance++;
        } else {
            balance--;
            answer.push(balance % 2);
        }
    }

    return answer;
}
