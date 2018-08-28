import ConnectMongoose from './mongoose';
import LineBot from './line';

export default () => {
  ConnectMongoose();
  LineBot();
}