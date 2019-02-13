const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: 'wangx',
  password: 'wang8328',
  host: '192.168.25.225',
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: '/h5/1024/',
  include: [ '*', '**/*' ],
  exclude: [ '*.map' ],
  deleteRemote: true,
  forcePasv: true
}

ftpDeploy.deploy(config).then((res) => console.log('finished', res)).catch((err) => console.log(err))
