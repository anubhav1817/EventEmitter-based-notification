const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('notificationCreated', (data) => console.log(`[EMAIL] To ${data.email}: ${data.message}`));
emitter.on('notificationCreated', (data) => console.log(`[SMS]   To ${data.phone}: ${data.message}`));
emitter.on('notificationCreated', (data) => console.log(`[APP]   To user ${data.userId}: ${data.message}`));

emitter.emit('notificationCreated', {
  userId: 42,
  email: 'asha@example.com',
  phone: '+91-98765-43210',
  message: 'Your order has shipped!',
});