import axios, { AxiosInstance } from "axios";
import { ICounterService } from "./counterService.types";

class CounterService implements ICounterService {
    private readonly endpoint = 'http://localhost:3001';
    private readonly instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: this.endpoint
        });
    }

    // async getExample(signal: AbortSignal): Promise<any> {
    //     let response = await this.instance.get(endpoints.COUNTER, { signal });
    //     return response.data;
    // }

    // async postExample(data: any, signal: AbortSignal): Promise<any> {
    //     let response = await this.instance.post(endpoints.COUNTER, data, { signal });
    //     return response.data;
    // }

}

export enum endpoints {
    COUNTER = '/counter'
}

export default CounterService;