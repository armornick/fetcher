
export type MaybeProject = string | Project;

export interface Project {
    name: string;
    packages?: string[];
    subs?: MaybeProject[];

    npx?: { 
        command: string, 
        install?: string, 
    };

    global?: {
        package: string;
        postCommand?: string;
    };

    commands?: string[];

    topCache?: boolean;

    scaffold?: {
        workDir?: string;
        init: boolean;
        commands: string[];
    }
}


