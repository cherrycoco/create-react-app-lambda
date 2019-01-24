export function handler(event, context, callback) {
  console.log('event', JSON.parse(event.body));
  callback(null, {
    statusCode: 200,
    body: event.body,
  });
}
