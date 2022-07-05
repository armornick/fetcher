import { MaybeProject, Project } from './types';

type ProjectMap = {[name: string]: Project};

export class ProjectList {
    
    map: ProjectMap = {};

    defaults?: string[];

    get(name: string): Project {
        return this.map[name];
    }

    define(project: Project) {
        this.map[project.name] = project;
    }
}

export function BasicProject(name: string, packages: string[]): Project {
    return { name, packages };
}

export function SuperProject(name: string, subProjects: string[]): Project {
    return { name, subs: subProjects };
}

export function DegitProject(name: string, url: string, folder: string|false = name): Project {
    return {
        name,
        npx: {
            command: `degit ${url} ${folder ? folder : ''}`,
            install: folder ? folder : undefined,
        }
    }
}

export function ContainerProject(name: string, subs: MaybeProject[]): Project {
    return { name, subs, topCache: true };
}

export function CommandProject(name: string, command: string, install: string|false = false) {
    const project = {
        name,
        npx: {
            command,
            install: install ? install : undefined,
        }
    };
    return project;
}

/**
 * 
 * @param {string} name 
 * @param {string} pakage 
 * @param {string | string[] | false} postCommand 
 * @returns {Project}
 */
export function AppProject(name: string, pakage: string, postCommand: string|string[]|false = false): Project {
    const project: Project = {
        name,
        global: { 
            package: pakage,
            postCommand: typeof(postCommand) === 'string' ? postCommand : undefined,
        },
        commands: Array.isArray(postCommand) ? postCommand : undefined,
    }
    return project;
}

