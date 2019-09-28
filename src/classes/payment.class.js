class Payment {
  constructor(paymentAmountCents, paymentMessage, userWhoPaid, userWhoReceived) {
    this.userWhoPaid = { ...userWhoPaid};
    this.userWhoReceived = { ...userWhoReceived};
    this.paymentAmountCents = paymentAmountCents;
    this.paymentMessage = paymentMessage;
    this.paymentCreatedAt = { '.sv': 'timestamp' };
  }
}
export default Payment;