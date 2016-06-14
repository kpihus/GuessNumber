'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const services = require('./services');

server.connection({port: 3000});

server.register(require('vision'), (err) => {
 if(err){
   throw err;
 }
  server.views({
    engines: {
      html: require('handlebars')
    },
    path: 'views',
    layoutPath: './views/layout',
    layout: 'default'
  })
})


server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }
  server.route({
    method: 'GET',
    path: '/public/{filename*}',
    handler: {
      directory: {
        path: __dirname + '/public',
        listing: false,
        index: false
      }
    }
  })
  server.route({
    method: 'GET',
    path: '/bower_components/{filename*}',
    handler: {
      directory: {
        path: __dirname + '/bower_components',
        listing: false,
        index: false
      }
    }
  })
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.view('index')
  }
});

server.route({
  method: 'GET',
  path: '/startgame',
  handler: (request, reply) => {
    reply({result: services.generateNumber()})
  }
});

server.route({
  method: 'POST',
  path: '/testnumber',
  handler: (request, reply) => {
    services.compare(request.payload.input, (err, res)=>{
      if(err){
        throw err;
      }
      reply({
        result: res
      })  
    })
  }
})

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri)
})