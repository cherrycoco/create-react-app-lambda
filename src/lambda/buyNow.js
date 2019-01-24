var stripe = require("stripe")("sk_test_iY8MDV2jGiM1sAoyWXR2W83F");

export function handler(event, context, callback) {
  const charge = stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  });
  console.log('charge', charge);
  console.log('queryStringParameters', event.queryStringParameters);
  console.log('event', JSON.parse(event.body));
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: JSON.parse(event.body)})
  });
}
