
export type Project = {

    name?: string;

    packages?: string[];
    devPackages?: string[];
    subs?: (string | Project)[];
    depends?: (string | Project)[];

    package?: string;
    postCommand?: string;

    npx?: string;
    install?: string;

    topCache?: boolean;
    global?: boolean;
    mergeInstall?: boolean;
    isolate?: boolean;

};

export type ProjectMap = {
    defaults: string[];
    isolate: boolean;

    [name: string]: Project;
};

