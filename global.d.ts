
declare type MaybeProject = string | Project;

declare type Project = {
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

    topCache?: boolean;
};
