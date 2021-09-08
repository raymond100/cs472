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

    btnCreate.addEventListener('click', () => {
        const inputName = document.querySelector('input[name=name]').value;
        const inputDeposit = parseFloat(document.querySelector('input[name=deposit]').value);
        textArea.disabled = true;

        if (inputName != "" && inputDeposit > 0) {
            const newAccount = account.createAccount(inputName, inputDeposit);
            accountInfoList.push(newAccount);
        }

        accountInfoList.forEach(acc => {
            result += `Account name: ${acc.getName()} Balance: ${acc.getDeposit()}\n`
        });

        textArea.value = result;
        result = '';
    });
})












