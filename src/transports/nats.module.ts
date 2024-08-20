// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { envs, NATS_SERVICE } from 'src/config';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: NATS_SERVICE,
//         transport: Transport.NATS, // debe tener el mismo protocolo de comunicación que se configuro en los micros
//         options: {
//           servers: envs.NATS_SERVER,
//         },
//       },
//     ]),
//   ],
//   exports: [
//     ClientsModule.register([
//       {
//         name: NATS_SERVICE,
//         transport: Transport.NATS, // debe tener el mismo protocolo de comunicación que se configuro en los micros
//         options: {
//           servers: envs.NATS_SERVER,
//         },
//       },
//     ]),
//   ],
// })
// export class NatsModule {}
