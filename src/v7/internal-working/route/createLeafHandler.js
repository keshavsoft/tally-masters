const startFunc = ({ inPath, inSource, inExecutor }) => {
    const localPath = inPath;
    const localSource = inSource;
    const localExecutor = inExecutor;

    return async (...inParams) => {
        const localParams = inParams;

        return await localExecutor({
            inRoutePath: localPath,
            inParams: localParams,
            inSource: localSource
        });
    };
};

export default startFunc;
