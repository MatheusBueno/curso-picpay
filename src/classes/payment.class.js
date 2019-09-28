class Payment {
  constructor(paymentAmountCents, paymentMessage, userWhoPaid, userWhoReceived) {
    this.userWhoPaid = { ...userWhoPaid};
    this.userWhoReceived = { ...userWhoReceived};
    this.paymentAmountInCents = paymentAmountCents;
    this.paymentMessage = paymentMessage ? paymentMessage : null;
    this.paymentCreatedAt = { '.sv': 'timestamp' };
  }
}
export default Payment;