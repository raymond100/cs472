let account = (() => {
    const createAccount = (name, deposit) => {
        let accountName = name;
        let accountDeposit = deposit;
        return {

            getName() {
                return accountName;
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
    let inputName = '';
    let inputDeposit = '';

    btnCreate.addEventListener('click', () => {
        inputName = document.querySelector('input[name=name]');
        inputDeposit = document.querySelector('input[name=deposit]');
        textArea.disabled = true;

        if (inputName.value != "" && parseFloat(inputDeposit.value) > 0) {
            const newAccount = account.createAccount(inputName.value, inputDeposit.value);
            accountInfoList.push(newAccount);

            accountInfoList.forEach(acc => {
                result += `Account name: ${acc.getName()} Balance: ${acc.getDeposit()}\n`;
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
        inputName.value = '';
        inputDeposit.value = '';
    }
});














