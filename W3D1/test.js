describe(" getNumber", function () {
  it("get acount number", function () {
    let account = new Account(0123456);
    assert.equal(account.getNumber(), 0123456);
  });
});

describe("deposit", function () {
  it("deposit to an account", function () {
    let account = new Account(0123456);
    account.deposit(10000);
    assert.equal(account.getBalance(), 10000);
    assert.throws(() => account.deposit(-1), Error);
  });
});

describe("withdraw", function () {
  it("withdraw from an account", function () {
    let account = new Account(0123456);
    account.deposit(10000);
    account.withdraw(1000);
    assert.equal(account.getBalance(), 9000);
    assert.throws(function () {
      account.withdraw(10000);
    }, Error);
  });
});

describe("toString", function () {
  it("toString method", function () {
    let account = new Account(0123456);
    assert.equal(
      account.toString(),
      "Account " + account.getNumber() + ": balance " + account.getBalance()
    );
  });
});

describe("getInterest", function () {
  it("get interest from savings account", function () {
    let saving = new SavingsAccount(0123456);
    saving.setInterest(1000);
    assert.equal(saving.getInterest(), 1000);
  });
});

describe("toString", function () {
  it("toString Saving account", function () {
    let account = new SavingsAccount(123, 10);
    assert.equal(
      account.toString(),
      "Account " +
        account.getNumber() +
        ": balance " +
        account.getBalance() +
        `interest: ${account.getInterest()}`
    );
  });
});

describe("addInterest", function () {
  it("add interest of a saving account", function () {
    let saving = new SavingsAccount(123, 10);
    saving.deposit(100);
    saving.addInterest();
    assert.equal(saving.getBalance(), 110);
  });
});

describe("withdraw", function () {
  it("withdraw from a checking account", function () {
    let checkingAcc = new CheckingAccount(123, 100);
    checkingAcc.deposit(100);
    checkingAcc.withdraw(50);
    assert.equal(checkingAcc.getBalance(), 50);
  });
});

describe("toString", function () {
  it("toString a Checking account", function () {
    let account = new CheckingAccount(123, 100);
    assert.equal(
      account.toString(),
      "Account " +
        account.getNumber() +
        ": balance " +
        account.getBalance() +
        `overdraft: ${account.getOverdraft()}`
    );
  });
});

describe("addAccount", function () {
  it("Add Account ", function () {
    let bank = new Bank();
    assert.equal(bank.addAccount(), 1);
    assert.equal(bank.addAccount(), 2);
  });
});

describe("addSavingAccount", function () {
  it("adds saving account to bank ", function () {
    let bank = new Bank();
    assert.equal(bank.addSavingsAccount(10), 1);
    assert.equal(bank.addSavingsAccount(10), 2);
  });
});

describe("addCheckingAccount", function () {
  it("adds checking account to bank ", function () {
    let bank = new Bank();
    assert.equal(bank.addCheckingAccount(10), 1);
    assert.equal(bank.addCheckingAccount(10), 2);
  });
});

describe("closeAccount", function () {
  it("close account ", function () {
    let bank = new Bank();
    bank.addCheckingAccount(10);
    bank.addCheckingAccount(10);
    bank.closeAccount(bank.accounts[0].getNumber());

    assert.equal(bank.accounts.length, 1);
    bank.closeAccount(10);

    assert.equal(bank.accounts.length, 1);
    bank.closeAccount(bank.accounts[0].getNumber());
    assert.equal(bank.accounts.length, 0);
  });
});

describe("accountReport", function () {
  it("get report", function () {
    let bank = new Bank();
    bank.addAccount();
    assert.equal(bank.accountReport(), "Account 1: balance 0\n");
  });
});

describe("endOfMonth", function () {
  it("end of month report", function () {
    let account = new Account(10);
    assert.equal(account.endOfMonth(), "");
  });
});

describe("endOfMonth", function () {
  it("end of month report for saving account", function () {
    let account = new SavingsAccount(1, 10);
    account.deposit(100);
    assert.equal(
      account.endOfMonth(),
      "Interest added SavingsAccount 1: balance: 110 interest: 10"
    );
  });
});

describe("endOfMonth", function () {
  it("end of month report for checking account", function () {
    let account = new CheckingAccount(1, 100);
    account.deposit(50);
    account.withdraw(100);
    assert.equal(
      account.endOfMonth(),
      "Warning, low balance CheckingAccount 1: balance: -50 overdraft limit: 100"
    );
  });
});
