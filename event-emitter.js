class EventEmitter {
    eventRegister: Map<string, any> = new Map();

    on = (name: string, fn: any) => {
        if (!this.eventRegister.get(name)) {
            this.eventRegister.set(name, [])
        };
        
        this.eventRegister.get(name).push(fn);
    }

    emit = (name: string) => {
        if (!this.eventRegister.get(name)) {
            return false
        };
        
        this.eventRegister
        .get(name)
        .forEach((fn: { call: () => any; }) => {
            fn.call()
        });
    }

    off = (name: string, fn: any) => {
        if (this.eventRegister.get(name)) {
            const index = this.eventRegister.get(name).indexOf(fn);
            if (index >= 0) {
                this.eventRegister.get(name).splice(index, 1)
            };
        }
    }
}

export const eventEmitter = new EventEmitter();
