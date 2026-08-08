import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export const CONTACT_FUNCTIONS_PORT = 8788;

export function createDevProcessSpecs(viteArguments = []) {
  return [
    {
      name: 'functions',
      command: process.execPath,
      args: [
        resolve(projectRoot, 'node_modules/wrangler/bin/wrangler.js'),
        'pages',
        'dev',
        'public',
        '--port',
        String(CONTACT_FUNCTIONS_PORT),
      ],
    },
    {
      name: 'frontend',
      command: process.execPath,
      args: [resolve(projectRoot, 'node_modules/vite/bin/vite.js'), ...viteArguments],
    },
  ];
}

export function runDevServers(viteArguments = process.argv.slice(2)) {
  const processes = createDevProcessSpecs(viteArguments).map((spec) => ({
    spec,
    child: spawn(spec.command, spec.args, {
      cwd: projectRoot,
      env: process.env,
      stdio: 'inherit',
      windowsHide: true,
    }),
  }));
  let stopping = false;

  const stop = (exitCode) => {
    if (stopping) return;
    stopping = true;
    for (const { child } of processes) {
      if (!child.killed) child.kill();
    }
    process.exitCode = exitCode;
  };

  for (const { spec, child } of processes) {
    child.on('error', (error) => {
      console.error(`[dev:${spec.name}] ${error.message}`);
      stop(1);
    });
    child.on('exit', (code, signal) => {
      if (stopping) return;
      if (code && code !== 0) {
        console.error(`[dev:${spec.name}] exited with code ${code}.`);
      } else if (signal) {
        console.error(`[dev:${spec.name}] stopped by ${signal}.`);
      }
      stop(code ?? (signal ? 1 : 0));
    });
  }

  process.once('SIGINT', () => stop(0));
  process.once('SIGTERM', () => stop(0));
}

const invokedDirectly = process.argv[1]
  ? pathToFileURL(resolve(process.argv[1])).href === import.meta.url
  : false;

if (invokedDirectly) runDevServers();
