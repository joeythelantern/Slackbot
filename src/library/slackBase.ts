import logging from "../config/logging";

abstract class SlackBase {
    name: string;

    constructor(name: string) {
        this.name = name;

        logging.info(`Starting ${this.name}`);
    }

    protected abstract define: () => void;
    public abstract start: () => void;
}

export default SlackBase;