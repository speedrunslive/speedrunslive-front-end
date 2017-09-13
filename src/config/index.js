//export const apiUrl = 'http://api.speedrunslive.com'
export const DEV = process.env.NODE_ENV !== 'production';
export const port = process.env.PORT || 3000;
export const apiUrl = 'http://192.168.99.100:3000'; // This is your docker-machine IP

export const externalApi = {
  twitch: {
    url: 'https://api.twitch.tv/kraken',
    clientId: '77j5cesl781f4gpduf1278i38j8icr1',
    getChannelUrl: function(user) {
      return `${this.url}/channels/${user}?client_id=${this.clientId}`;
    },
    getStreamsUrl: function(users) {
      const channels = '?channel=' + users.join(',');
      return `${this.url}/streams${channels}&client_id=${this.clientId}`;
    }
  },
  hitbox: {
    url:'https://api.hitbox.tv',
    getChannelUrl: function(user) {
      return `${this.url}/user/${user}`;
    }
  }
}