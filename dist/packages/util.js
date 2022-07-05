"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProject = exports.CommandProject = exports.ContainerProject = exports.DegitProject = exports.SuperProject = exports.BasicProject = exports.ProjectList = void 0;
class ProjectList {
    constructor() {
        this.map = {};
    }
    get(name) {
        return this.map[name];
    }
    define(project) {
        this.map[project.name] = project;
    }
}
exports.ProjectList = ProjectList;
function BasicProject(name, packages) {
    return { name, packages };
}
exports.BasicProject = BasicProject;
function SuperProject(name, subProjects) {
    return { name, subs: subProjects };
}
exports.SuperProject = SuperProject;
function DegitProject(name, url, folder = name) {
    return {
        name,
        npx: {
            command: `degit ${url} ${folder ? folder : ''}`,
            install: folder ? folder : undefined,
        }
    };
}
exports.DegitProject = DegitProject;
function ContainerProject(name, subs) {
    return { name, subs, topCache: true };
}
exports.ContainerProject = ContainerProject;
function CommandProject(name, command, install = false) {
    const project = {
        name,
        npx: {
            command,
            install: install ? install : undefined,
        }
    };
    return project;
}
exports.CommandProject = CommandProject;
/**
 *
 * @param {string} name
 * @param {string} pakage
 * @param {string | string[] | false} postCommand
 * @returns {Project}
 */
function AppProject(name, pakage, postCommand = false) {
    const project = {
        name,
        global: {
            package: pakage,
            postCommand: typeof (postCommand) === 'string' ? postCommand : undefined,
        },
        commands: Array.isArray(postCommand) ? postCommand : undefined,
    };
    return project;
}
exports.AppProject = AppProject;
