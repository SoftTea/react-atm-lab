import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
    }
  }


  handleDeposit =(e)=>{
    
    const newBalance = parseInt(this.inputBox.value) + this.state.balance
    console.log(this.inputBox.value)
    this.setState({
      balance: newBalance,
    })
    this.inputBox.value = '';
  }

  handleWithdraw = (e)=>{
    const newBalance = this.state.balance - parseInt(this.inputBox.value);
    if (newBalance<0){
      return
    } else {
      this.setState({
        balance: newBalance,
      })
      if (newBalance === 0) {

      }
      this.inputBox.value = '';
    }

  }
  render() {
    let balanceClass = 'balance';
    if(this.state.balance === 0 ) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount"  ref={(input)=> this.inputBox = input}/>
        <input onClick={this.handleDeposit} type="button" value="Deposit" />
        <input onClick={this.handleWithdraw} type="button" value="Withdraw" />
      </div>
    )
  }
}

export default Account;
