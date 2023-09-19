import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TasksService } from '../tasks.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class TaskTimerGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly tasksService: TasksService) {}

  @WebSocketServer()
  server: Server;

  private timeSpent: number = 0;
  private taskId: number;

  async handleDisconnect(client: Socket) {
    if (client.data.timer) {
      clearInterval(client.data.timer);
      client.data.timer = null;
    }
    console.log('client disconnected', client.id);
    const task = await this.tasksService.findOne(this.taskId);
    if (task) {
      await this.tasksService.update(this.taskId, {
        ...task,
        timeSpent: this.timeSpent,
      });
    }
  }
  handleConnection(_client: Socket) {
    // client.emit('timerUpdate', { timeSpent: this.timeSpent });
  }
  @SubscribeMessage('startTimer')
  handleStartTimer(
    client: Socket,
    data: { taskId: number; timeSpent: number },
  ) {
    this.taskId = data.taskId;
    this.timeSpent = data.timeSpent;
    const timer = setInterval(() => {
      this.timeSpent += 1;
      this.server.emit('timerUpdate', { timeSpent: this.timeSpent });
    }, 1000);
    client.data.timer = timer;
  }

  @SubscribeMessage('stopTimer')
  async handleStopTimer(client: Socket) {
    if (client.data.timer) {
      clearInterval(client.data.timer);
      client.data.timer = null;
    }
    const task = await this.tasksService.findOne(this.taskId);
    if (task) {
      await this.tasksService.update(this.taskId, {
        ...task,
        timeSpent: this.timeSpent,
      });
    }
  }
}
