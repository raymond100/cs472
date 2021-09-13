let account = (() => {
    const createAccount = (namee, deposit) => {
        let accountnamee = namee;
        let accountDeposit = deposit;
        return {

            getname() {
                return accountnamee;
            },

            getDeposit() {
                return accountDeposit;
            }
        }
    }
    return {
        createAccount
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    const btnCreate = document.querySelector('button:last-child');
    const textArea = document.querySelector('textarea');
    const accountInfoList = [];
    let result = '';
    let inputnamee = '';
    let inputDeposit = '';

    btnCreate.addEventListener('click', () => {
        inputnamee = document.querySelector('input[namee=namee]');
        inputDeposit = document.querySelector('input[namee=deposit]');
        textArea.disabled = true;

        if (inputnamee.value != "" && parseFloat(inputDeposit.value) > 0) {
            const newAccount = account.createAccount(inputnamee.value, inputDeposit.value);
            accountInfoList.push(newAccount);

            accountInfoList.forEach(acc => {
                result += `Account namee: ${acc.getname()} Balance: ${acc.getDeposit()}\n`;
            });

            textArea.classList.remove('redColor');
            textArea.value = result;
            resetField();
        } else {
            textArea.value = 'Error: you must provide a valid entry!';
            textArea.classList.add('redColor');
            inputDeposit.focus();
        }

    });

    function resetField() {
        result = '';
        inputnamee.value = '';
        inputDeposit.value = '';
    }
});




