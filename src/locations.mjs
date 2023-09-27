import fsPath from 'node:path'

export const CATALYST_HOME = () => process.env.CATALYST_HOME || fsPath.join(process.env.HOME, '.config', 'catalyst')
export const CATALYST_API_SPEC = () => fsPath.join(CATALYST_HOME(), 'api.json')
export const CATALYST_SERVER_DB = () => fsPath.join(CATALYST_HOME(), 'server')
export const CATALYST_SERVER_PID_FILE = () => fsPath.join(CATALYST_SERVER_DB(), 'catalyst-server.pid')
export const CATALYST_SERVER_PLUGINS = () => process.env.CATALYST_PLUGIN_PATH
  || fsPath.join(CATALYST_HOME(), 'plugins', 'server')
