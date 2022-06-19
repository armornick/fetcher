
export class ProjectList {
    
    /** @type { {[name: string]: Project} } */
    map = {};

    /** @type {string[]} */
    defaults;

    /**
     * @param {string} name
     * @returns {Project}
     */
    get(name) {
        return this.map[name];
    }

    /**
     * @param {Project} project
     */
    define(project) {
        this.map[project.name] = project;
    }
}

/**
 * 
 * @param {string} name 
 * @param {string[]} packages 
 * @returns {Project}
 */
export function BasicProject(name, packages) {
    return { name, packages };
}

/**
 * 
 * @param {string} name 
 * @param {string[]} subProjects
 * @returns {Project}
 */
export function SuperProject(name, subProjects) {
    return { name, subs: subProjects };
}

/**
 * 
 * @param {string} name 
 * @param {string} url 
 * @param {string | false} folder 
 * @returns {Project}
 */
export function DegitProject(name, url, folder = name) {
    return {
        name,
        npx: {
            command: `npx degit ${url} ${folder ? folder : ''}`,
            install: folder ? folder : undefined,
        }
    }
}

/**
 * 
 * @param {string} name 
 * @param {MaybeProject[]} subs 
 * @returns {Project}
 */
export function ContainerProject(name, subs) {
    return { name, subs, topCache: true };
}

/**
 * 
 * @param {string} name 
 * @param {string} command 
 * @param {string | false} install 
 * @returns {Project}
 */
export function CommandProject(name, command, install = false) {
    const project = {
        name,
        npx: {
            command,
        }
    };
    if (install) {
        project.npx.install = install;
    }
    return project;
}

/**
 * 
 * @param {string} name 
 * @param {string} pakage 
 * @param {string | false} postCommand 
 * @returns {Project}
 */
export function AppProject(name, pakage, postCommand = false) {
    const project = {
        name,
        global: { package: pakage },
    }
    if (postCommand) {
        project.global.postCommand = postCommand;
    }
    return project;
}

