function getEnvs(regex) {
    var envs = process.env;
    var filteredEnvs = [];

    Object.keys(envs).reduce(function (sum, key) {
        if (regex.test(key)) {
            value = process.env[key];
            if (value) filteredEnvs.push(value);
        }
    }, []);
    return filteredEnvs;
}

module.exports = getEnvs;
