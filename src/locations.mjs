import * as fsPath from 'node:path'

const configDir = process.env.XDG_CONFIG_HOME || fsPath.join(process.env.HOME, '.config')

export const COMPLY_HOME = () => process.env.COMPLY_HOME || fsPath.join(configDir, 'comply-server')
export const COMPLY_API_SPEC_PATH = () => fsPath.join(COMPLY_HOME(), 'api.json')
export const COMPLY_PID_PATH = () => fsPath.join(COMPLY_HOME(), 'comply-server.pid')
export const COMPLY_SERVER_PLUGIN_DIR = () => process.env.COMPLY_PLUGIN_PATH || fsPath.join(COMPLY_HOME(), 'plugins')
